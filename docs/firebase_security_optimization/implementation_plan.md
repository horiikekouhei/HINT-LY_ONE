# Firebaseセキュリティ設定の最適化提案

現在、Firebase（Realtime Database）が「テストモード（誰でも読み書き可能）」になっているため、これをアプリの仕様に合わせた最適な制限に変更することを提案します。

## 現状の課題
- **誰でも全データの読み書きが可能**: データベースのURLを知っていれば、悪意のあるユーザーがすべてのルームデータを削除したり改ざんしたりできます。
- **プレイヤーのなりすまし**: 現在の`playerId`はクライアント側で生成されたランダムな文字列であり、認証されていないため、他人のIDを模倣して操作することが可能です。

## 提案する最適設定

### 1. 匿名認証 (Anonymous Authentication) の導入
セキュリティルールで「誰が操作しているか」を正確に判別するために、Firebaseの匿名認証を利用します。
- ユーザーにログイン作業を強いることなく、ブラウザごとにユニークな`auth.uid`を割り振ることができます。
- 現在の`sessionStorage`による手動のID管理をFirebase Authに置き換えます。

### 2. 詳細なセキュリティルール (Security Rules) の設定
ゲームの役割（ホスト、回答者、ヒント作成者など）に応じた権限管理を行います。

#### 制限の概要:
- **認証必須**: 認証されたユーザーのみが読み書き可能。
- **ルーム作成者 = ホスト**: ルームを作成したユーザーのみがそのルームのホスト権限を持つ。
- **役割ベースの書き込み制限**:
  - **ホストのみ**: ゲームフェーズの変更、プレイヤーのキック、ゲームの中断。
  - **各プレイヤー**: 自分のプレイヤー情報（名前など）の更新、自分のヒントの提出。
  - **お題選択者のみ**: お題（Topic）の選択。
  - **回答者のみ**: 回答（Guess）の提出。
- **データの整合性チェック**: IDの形式や必須フィールドの存在を検証。

---

## 変更内容

### [Firebase Console]
- **Authentication**: 匿名認証 (Anonymous) を有効化します。
- **Realtime Database**: 以下に提案するセキュリティルールを適用します。

### [Component: Firebase Configuration]
#### [MODIFY] [config.ts](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/firebase/config.ts)
- `getAuth` を初期化し、`auth` オブジェクトをエクスポートします。

### [Component: Game Store]
#### [MODIFY] [gameStore.ts](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/store/gameStore.ts)
- `getOrCreatePlayerId` を廃止し、`signInAnonymously` を使用して `auth.currentUser.uid` を取得するように変更します。
- アプリ起動時に認証を完了させるロジックを追加します。

---

## セキュリティルールの案 (JSON)

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        // 認証されたユーザーのみ閲覧可能
        ".read": "auth != null",
        
        // ルームの新規作成: 認証済みユーザーのみ
        // 既存ルームへの書き込み: 参加者またはホストのみ（下の階層で詳細に制御）
        ".write": "auth != null && (!data.exists() || data.child('players').hasChild(auth.uid))",

        "hostId": {
          ".validate": "!data.exists() || newData.val() === auth.uid"
        },
        
        "phase": {
          // フェーズ変更はホストのみ可能
          ".write": "data.parent().child('hostId').val() === auth.uid"
        },
        
        "players": {
          "$uid": {
            // 自分のデータのみ書き込み可能（またはホストによる削除/キック）
            ".write": "auth.uid === $uid || data.parent().parent().child('hostId').val() === auth.uid",
            ".validate": "newData.hasChildren(['id', 'name'])"
          }
        },
        
        "currentRound": {
          "topic": {
            // お題選択は、現在のラウンドのcontrollerIdのみ可能
            ".write": "data.parent().child('controllerId').val() === auth.uid"
          },
          "hints": {
            "$uid": {
              // ヒントの提出は自分自身のみ
              ".write": "auth.uid === $uid"
            }
          },
          "guess": {
            // 回答は、現在のラウンドのguesserIdのみ可能
            ".write": "data.parent().child('guesserId').val() === auth.uid"
          }
        }
      }
    }
  }
}
```

## 検証計画

### 手動確認
1.  **通常プレイ**: 匿名認証が正常に機能し、ゲームが従来通り進行できることを確認。
2.  **不正操作のシミュレーション**: 
    - 別のブラウザ（別ユーザー）から他人のヒントを上書きしようとしてエラーになるか。
    - ホストではないユーザーがフェーズを無理やり変更しようとしてエラーになるか。
    - 未認証の状態でデータにアクセスできないことを確認。

---

## ユーザーへの確認事項
- 匿名認証の導入に同意いただけますか？（Firebase Consoleでの設定が必要です）
- ルールの厳格さについて、さらに制限したい項目（例：ルームIDの文字数制限、データの保存期間など）はありますか？

# Firebaseセキュリティ設定の最適化 タスクリスト

- [x] Firebase Configuration の更新 (`src/firebase/config.ts`)
  - [x] `getAuth` の追加と `auth` のエクスポート
- [x] Game Store の更新 (`src/store/gameStore.ts`)
  - [x] 匿名認証の導入 (`signInAnonymously`)
  - [x] `playerId` の取得元を Firebase Auth に変更
  - [x] 初期化時の自動ログイン処理の追加
- [ ] セキュリティルールの提供
  - [ ] Realtime Database 用のルール JSON の作成
- [ ] 動作確認
  - [ ] ログインとゲーム進行が正常に行えるか確認

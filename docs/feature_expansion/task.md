# タスクリスト

- [x] データ構造の変更 (`types/game.ts`)
- [x] 言語データの追加 (`locales/*.ts`)
- [x] Firebaseロジックの実装 (`gameStore.ts`)
    - [x] `createRoomInFirebase` の拡張
    - [x] `finalizeResultInFirebase` のスコア計算変更
    - [x] `goNextRoundInFirebase` の履歴保存
    - [x] `joinRoomInFirebase` のフリーモード対応
    - [x] 新規関数の追加 (`kick`, `undoHint`, `endFreeMode`, `leave`)
- [x] UIの実装
    - [x] `Lobby.tsx`: ラウンド数・フリーモード選択
    - [x] `WaitingRoom.tsx`: キックボタン、強制退出処理
    - [x] `Game.tsx`: キックボタン、フリーモード終了ボタン
    - [x] `Phase2Hint.tsx`: 書き直しボタン
    - [x] `Phase5Result.tsx`: フリーモード終了ボタン
    - [x] `GameSummary.tsx`: 履歴リスト表示
- [x] 動作確認とデバッグ

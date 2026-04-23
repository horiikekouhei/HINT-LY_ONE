# 多言語対応タスクリスト

- `[x]` 1. i18n環境の構築
  - `[x]` `src/i18n/locales/ja.ts` と `en.ts` の作成
  - `[x]` `src/i18n/LanguageContext.tsx` の作成
  - `[x]` `src/App.tsx` に `LanguageProvider` を適用
- `[x]` 2. データ構造の変更
  - `[x]` `src/types/game.ts` の `Room` 型に `language` を追加
  - `[x]` `src/data/topics.ts` を日本語・英語に対応
- `[x]` 3. Storeの更新
  - `[x]` `src/store/gameStore.ts` で部屋作成時に言語設定を保存
  - `[x]` お題リストの切り替えロジック追加
- `[x]` 4. UIの多言語対応と切り替え
  - `[x]` `Lobby.tsx` に言語切り替えボタン追加＆翻訳適用
  - `[x]` `WaitingRoom.tsx` の翻訳適用
  - `[x]` `Game.tsx` と 各Phaseコンポーネントの翻訳適用
- `[x]` 5. テスト・確認
  - `[x]` 言語切り替えの動作確認
  - `[x]` 部屋のお題言語が設定通りか確認


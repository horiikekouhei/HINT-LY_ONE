# 追加言語対応タスクリスト

- `[x]` 1. 型定義の拡張 (`src/types/game.ts`)
- `[x]` 2. 翻訳ファイルの作成 (`src/i18n/locales/`)
  - `[x]` zh-CN (中国語 簡体字)
  - `[x]` zh-TW (台湾語 繁体字)
  - `[x]` ko (韓国語)
  - `[x]` es (スペイン語)
  - `[x]` hi (ヒンディー語)
  - `[x]` ar (アラビア語)
  - `[x]` fr (フランス語)
- `[x]` 3. LanguageContext の更新
  - `[x]` 全言語のインポートと型定義
  - `[x]` RTL (アラビア語) 対応
- `[x]` 4. お題リストの追加 (`src/data/topics.ts`)
  - `[x]` 各言語約150単語の追加
- `[x]` 5. Store ロジックの更新 (`src/store/gameStore.ts`)
  - `[x]` 言語に応じたお題リスト取得処理の実装
- `[x]` 6. UIの更新 (`src/pages/Lobby.tsx`)
  - `[x]` 言語切り替えドロップダウンの実装

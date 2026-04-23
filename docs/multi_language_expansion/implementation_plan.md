# 7つの追加言語の対応プラン

ユーザーの要望に基づき、世界で話者数が多い言語および指定の言語（中国語、台湾語、韓国語、スペイン語、ヒンディー語、アラビア語、フランス語）を追加サポートします。これにより、既存の日本語・英語と合わせて合計9言語で遊べるようになります。

## ユーザー確認が必要な事項

> [!IMPORTANT]
> 以下の7つの言語を追加する想定です：
> 1. **中国語（簡体字）** - zh-CN
> 2. **台湾語（繁体字）** - zh-TW
> 3. **韓国語** - ko
> 4. **スペイン語** - es
> 5. **ヒンディー語** - hi
> 6. **アラビア語** - ar
> 7. **フランス語** - fr

> [!NOTE]
> 言語が9つに増えるため、ロビー画面の言語切り替えUIを、**ドロップダウンメニュー (`<select>`)** に変更します。

## 提案する変更内容

---

### 型定義・データ構造

#### [MODIFY] [game.ts](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/types/game.ts)
- `Room` インターフェースの `language` プロパティを `'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'ko' | 'es' | 'hi' | 'ar' | 'fr'` に拡張します。

#### [MODIFY] [topics.ts](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/data/topics.ts)
- 各言語用に翻訳済みお題リストを追加します。

---

### 翻訳リソース (i18n)

#### [NEW] `zh-CN.ts`, `zh-TW.ts`, `ko.ts`, `es.ts`, `hi.ts`, `ar.ts`, `fr.ts`
- `en.ts` / `ja.ts` と同じ構造で、各言語の翻訳ファイルを新規作成します。

#### [MODIFY] [LanguageContext.tsx](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/i18n/LanguageContext.tsx)
- `Language` 型を拡張し、新規作成した翻訳辞書をインポートして適用します。

---

### UI・ロジック

#### [MODIFY] [Lobby.tsx](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/pages/Lobby.tsx)
- 右上の言語切り替えUIをドロップダウンメニューに変更します。

#### [MODIFY] [gameStore.ts](file:///c:/Users/thril/OneDrive/Desktop/%E8%B6%A3%E5%91%B3%E3%81%AE%E9%96%8B%E7%99%BA/JustOne/src/store/gameStore.ts)
- `startRoundInFirebase` で部屋の言語に応じたお題リストを取得するようにします。

## 検証プラン

### 手動での確認
- ロビー画面で言語ドロップダウンを操作し、中国語、スペイン語、ヒンディー語、アラビア語、フランス語に正しくUIが切り替わるか確認します。
- それぞれの言語で部屋を作成した際に、ゲーム画面のお題（Topic）が選択した言語で表示されるか確認します。

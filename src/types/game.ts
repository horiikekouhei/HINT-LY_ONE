// ゲームフェーズの定義
export type GamePhase =
  | 'lobby'
  | 'waiting'
  | 'phase1_topic'
  | 'phase2_hint'
  | 'phase3_check'
  | 'phase4_guess'
  | 'phase5_result'
  | 'summary';

// プレイヤーの型
export interface Player {
  id: string;
  name: string;
  isHost: boolean;
  isGuesser: boolean; // 今ラウンドの回答者かどうか
  hint?: string;
  isEliminated?: boolean; // ヒントが重複で消された
}

// ヒントの型
export interface Hint {
  playerId: string;
  playerName: string;
  text: string;
  isEliminated: boolean; // 重複チェックで消された
}

// ラウンド結果
export type RoundResult = 'correct' | 'incorrect' | 'pass';

// ラウンド情報
export interface Round {
  roundNumber: number;
  topic: string;
  options?: string[]; // 選択肢
  guesserId: string;
  controllerId?: string; // お題を選択するプレイヤーのID
  hints: Record<string, Hint>; // playerId -> Hint
  guess?: string;
  result?: RoundResult;
}

// ルーム（ゲームの状態）
export interface Room {
  id: string;
  hostId: string;
  phase: GamePhase;
  players: Record<string, Player>; // playerId -> Player
  currentRound?: Round;
  history?: Round[]; // 過去のラウンド履歴
  score: number;
  totalRounds: number;
  isFreeMode?: boolean; // フリーモード（無限ラウンド）かどうか
  topicList: string[];
  usedTopics: string[];
  language: 'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'ko' | 'es' | 'hi' | 'ar' | 'fr'; // 部屋の言語
  createdAt: number;
  updatedAt: number; // 最終更新日時
}

// ローカルのゲームストア用
export interface GameState {
  roomId: string | null;
  playerId: string | null;
  playerName: string;
  room: Room | null;
  isLoading: boolean;
  error: string | null;
}

export const zhTW = {
  lobby: {
    subtitle: "大家一起玩的單字提示遊戲",
    yourName: "你的名字",
    namePlaceholder: "輸入暱稱...",
    createRoom: "建立新房間",
    joinRoom: "加入房間",
    roomLanguage: "房間語言",
    creating: "建立中...",
    createConfirm: "建立房間",
    back: "返回",
    roomId: "房間 ID",
    roomIdPlaceholder: "例如: AB3X9Z",
    joining: "加入中...",
    joinConfirm: "加入",
    howToPlay: "🎯 玩法",
    rule1: "1人擔任「回答者」挑戰猜詞",
    rule2: "其他玩家各給出一個單字作為提示",
    rule3: "相同的提示會被消除！",
    rule4: "根據剩下的提示引導出正確答案",
    errors: {
      enterName: "請輸入名字",
      enterRoomId: "請輸入房間 ID"
    },
    roundCount: "回合數",
    freeMode: "自由模式",
    freeModeDesc: "可以隨時結束，也支持中途加入",
  },
  waiting: {
    waitingTag: "🎮 等待中",
    waitingTitle: "正在等待大家...",
    waitingSubtitle: "把這個 ID 告訴朋友一起玩吧！",
    roomIdLabel: "房間 ID",
    copy: "複製",
    copied: "已複製",
    players: "參與者 ({{count}}人)",
    you: "你",
    host: "👑 房主",
    startGame: "開始遊戲",
    waitingForHost: "正在等待房主開始遊戲...",
    needMore: "還需要 {{count}} 人以上"
  },
  game: {
    phase1: {
      tag: "階段 1 — 選擇題目",
      tagChoosing: "階段 1 — 題目選擇中",
      guesserTitle: "你是本輪的<br /><span class=\"text-gradient\">回答者</span>！",
      guesserDesc: "其他玩家正在選擇題目。<br />你看不見題目，請稍等。",
      chooseTitle: "請 <span class=\"text-gradient\">選擇</span> 本次題目",
      chooseDesc: "瞞著回答者，選一個容易給提示的題目吧。",
      choosingTitle: "正在 <span class=\"text-gradient\">選擇</span> 題目",
      choosingDesc: "負責人正在從5個候選題目中選擇。<br />請稍等。"
    },
    phase2: {
      tag: "階段 2 — 輸入提示",
      tagInputting: "階段 2 — 提示輸入中",
      guesserTitle: "思考中...",
      guesserDesc: "其他玩家正在思考提示。<br />請稍等！",
      submittedTitle: "發送成功！",
      yourHint: "你的提示",
      waitingOthers: "正在等待其他玩家...",
      progress: "{{submitted}} / {{total}} 人已輸入",
      topicLabel: "本次題目",
      inputTitle: "用 <span class=\"text-gradient\">1個單字</span> 輸入提示",
      inputDesc: "請輸入1個聯想到題目的單字。<br />相同的提示會消失！不能使用空格。",
      inputPlaceholder: "輸入提示...",
      warnOneWord: "⚠️ 只能輸入1個單字",
      submitBtn: "發送提示"
    },
    phase3: {
      tag: "階段 3 — 重複檢查",
      tagChecking: "階段 3 — 重複檢查中",
      guesserTitle: "檢查中...",
      guesserDesc: "其他玩家正在移除重複的提示。<br />就快好了！",
      checkTitle: "消除 <span class=\"text-gradient\">重複提示</span>",
      checkDesc: "點擊相同或意思相近的提示來消除。<br />剩下的提示將展示給回答者。",
      eliminated: "已消除",
      valid: "有效提示",
      confirmBtn: "確定"
    },
    phase4: {
      tag: "階段 4 — 輪到你了！",
      othersTitle: "回答者正在思考...",
      othersDesc: "根據發送的提示能猜對嗎？",
      allEliminated: "沒有有效的提示...",
      guesserTitle: "根據提示 <span class=\"text-gradient\">猜詞吧</span>！",
      guesserDesc: "根據剩下的提示引導出正確答案。",
      inputPlaceholder: "輸入答案...",
      submitBtn: "回答",
      passBtn: "跳過"
    },
    phase5: {
      tag: "階段 5 — 結果發佈",
      answerWas: "題目是",
      guesserWas: "回答者 {{name}} 的答案",
      correct: "正確！",
      incorrect: "錯誤...",
      pass: "跳過",
      hintList: "提示列表",
      nextRoundBtn: "下一輪",
      viewResultBtn: "遊戲結束！"
    },
    summary: {
      title: "遊戲結束！",
      scoreTitle: "最終得分",
      scorePoints: "分",
      maxScore: "總分",
      evaluation: {
        perfect: "🏆 傳奇團隊！完美！",
        great: "🌟 精彩的團隊配合！",
        good: "👍 表現不錯！",
        normal: "🙂 還可以！",
        poor: "😅 下次會更好！"
      },
      backToLobby: "返回大廳"
    },
    common: {
      scoreLabel: "得分",
      guesserRole: "回答者",
      endGame: "結束",
      leave: "退出",
      privacyPolicy: "隱私政策",
      shareX: "在 X 上分享",
      shareText: "我在 HINT-LY ONE 中獲得了 {{score}} 分！ #HintlyOne",
    }
  },
  privacy: {
    title: "隱私政策",
    lastUpdated: "最後更新日期：2024年4月25日",
    introduction: "本網站（HINT-LY ONE）關於個人資訊的處理規定如下。",
    sections: [
      {
        title: "1. 數據收集與使用",
        content: "本網站使用 Firebase 匿名身份驗證來維持遊戲和管理會話。收集的資訊包括匿名用戶 ID、輸入的玩家名稱以及在遊戲中發送的提示和回答。"
      },
      {
        title: "2. Cookie 的使用",
        content: "本網站使用 Google Firebase 服務，可能會出於分析和身份驗證的目的使用 Cookie。"
      },
      {
        title: "3. 廣告投遞",
        content: "本網站將來可能會展示來自 Google AdSense 等第三方廣告聯盟的廣告。這些供應商可能會使用 Cookie 根據用戶過去的訪問資訊投遞廣告。"
      },
      {
        title: "4. 聯繫我們",
        content: "如果您對本政策有任何疑問，請聯繫開發人員。"
      }
    ]
  }
};

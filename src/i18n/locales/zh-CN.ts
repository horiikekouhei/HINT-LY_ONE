export const zhCN = {
  lobby: {
    subtitle: "大家一起玩的单词提示游戏",
    yourName: "你的名字",
    namePlaceholder: "输入昵称...",
    createRoom: "创建新房间",
    joinRoom: "加入房间",
    roomLanguage: "房间语言",
    creating: "创建中...",
    createConfirm: "创建房间",
    back: "返回",
    roomId: "房间 ID",
    roomIdPlaceholder: "例如: AB3X9Z",
    joining: "加入中...",
    joinConfirm: "加入",
    howToPlay: "🎯 玩法",
    rule1: "1人担任“回答者”挑战猜词",
    rule2: "其他玩家各给出一个单词作为提示",
    rule3: "相同的提示会被消除！",
    rule4: "根据剩下的提示引导出正确答案",
    errors: {
      enterName: "请输入名字",
      enterRoomId: "请输入房间 ID"
    }
  },
  waiting: {
    waitingTag: "🎮 等待中",
    waitingTitle: "正在等待大家...",
    waitingSubtitle: "把这个 ID 告诉朋友一起玩吧！",
    roomIdLabel: "房间 ID",
    copy: "复制",
    copied: "已复制",
    players: "参与者 ({{count}}人)",
    you: "你",
    host: "👑 房主",
    startGame: "开始游戏",
    waitingForHost: "正在等待房主开始游戏...",
    needMore: "还需要 {{count}} 人以上"
  },
  game: {
    phase1: {
      tag: "阶段 1 — 选择题目",
      tagChoosing: "阶段 1 — 题目选择中",
      guesserTitle: "你是本轮的<br /><span class=\"text-gradient\">回答者</span>！",
      guesserDesc: "其他玩家正在选择题目。<br />你看不到题目，请稍等。",
      chooseTitle: "请 <span class=\"text-gradient\">选择</span> 本次题目",
      chooseDesc: "瞒着回答者，选一个容易给提示的题目吧。",
      choosingTitle: "正在 <span class=\"text-gradient\">选择</span> 题目",
      choosingDesc: "负责人正在从5个候选题目中选择。<br />请稍等。"
    },
    phase2: {
      tag: "阶段 2 — 输入提示",
      tagInputting: "阶段 2 — 提示输入中",
      guesserTitle: "思考中...",
      guesserDesc: "其他玩家正在思考提示。<br />请稍等！",
      submittedTitle: "发送成功！",
      yourHint: "你的提示",
      waitingOthers: "正在等待其他玩家...",
      progress: "{{submitted}} / {{total}} 人已输入",
      topicLabel: "本次题目",
      inputTitle: "用 <span class=\"text-gradient\">1个单词</span> 输入提示",
      inputDesc: "请输入1个联想到题目的单词。<br />相同的提示会消失！不能使用空格。",
      inputPlaceholder: "输入提示...",
      warnOneWord: "⚠️ 只能输入1个单词",
      submitBtn: "发送提示"
    },
    phase3: {
      tag: "阶段 3 — 重复检查",
      tagChecking: "阶段 3 — 重复检查中",
      guesserTitle: "检查中...",
      guesserDesc: "其他玩家正在移除重复的提示。<br />就快好了！",
      checkTitle: "消除 <span class=\"text-gradient\">重复提示</span>",
      checkDesc: "点击相同或意思相近的提示来消除。<br />剩下的提示将展示给回答者。",
      eliminated: "已消除",
      valid: "有效提示",
      confirmBtn: "确定"
    },
    phase4: {
      tag: "阶段 4 — 轮到你了！",
      othersTitle: "回答者正在思考...",
      othersDesc: "根据发送的提示能猜对吗？",
      allEliminated: "没有有效的提示...",
      guesserTitle: "根据提示 <span class=\"text-gradient\">猜词吧</span>！",
      guesserDesc: "根据剩下的提示引导出正确答案。",
      inputPlaceholder: "输入答案...",
      submitBtn: "回答",
      passBtn: "跳过"
    },
    phase5: {
      tag: "阶段 5 — 结果发布",
      answerWas: "题目是",
      guesserWas: "回答者 {{name}} 的答案",
      correct: "正确！",
      incorrect: "错误...",
      pass: "跳过",
      hintList: "提示列表",
      nextRoundBtn: "下一轮",
      viewResultBtn: "游戏结束！"
    },
    summary: {
      title: "游戏结束！",
      scoreTitle: "最终得分",
      scorePoints: "分",
      maxScore: "总分",
      evaluation: {
        perfect: "🏆 传奇团队！完美！",
        great: "🌟 精彩的团队配合！",
        good: "👍 表现不错！",
        normal: "🙂 还可以！",
        poor: "😅 下次会更好！"
      },
      backToLobby: "返回大厅"
    },
    common: {
      scoreLabel: "得分",
      guesserRole: "回答者"
    }
  }
};

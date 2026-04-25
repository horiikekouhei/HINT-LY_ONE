export const ar = {
  lobby: {
    subtitle: "لعبة تلميح الكلمات للعب مع الجميع",
    yourName: "اسمك",
    namePlaceholder: "أدخل لقبك...",
    createRoom: "إنشاء غرفة جديدة",
    joinRoom: "الانضمام إلى غرفة",
    roomLanguage: "لغة الغرفة",
    creating: "جاري الإنشاء...",
    createConfirm: "إنشاء غرفة",
    back: "رجوع",
    roomId: "معرف الغرفة",
    roomIdPlaceholder: "مثال: AB3X9Z",
    joining: "جاري الانضمام...",
    joinConfirm: "انضمام",
    howToPlay: "🎯 كيف تلعب",
    rule1: "شخص واحد هو 'المخمن' ويحاول تخمين الكلمة",
    rule2: "يقدم اللاعبون الآخرون تلميحاً من كلمة واحدة",
    rule3: "تتم إزالة التلميحات المتطابقة!",
    rule4: "خمن الإجابة الصحيحة فقط باستخدام التلميحات المتبقية",
    errors: {
      enterName: "يرجى إدخال اسمك",
      enterRoomId: "يرجى إدخال معرف الغرفة"
    },
    roundCount: "عدد الجولات",
    freeMode: "الوضع الحر",
    freeModeDesc: "يمكنك الإنهاء في أي وقت والانضمام في منتصف اللعبة",
  },
  waiting: {
    waitingTag: "🎮 في الانتظار",
    waitingTitle: "في انتظار الجميع...",
    waitingSubtitle: "أخبر أصدقاءك بهذا المعرف للعب معاً!",
    roomIdLabel: "معرف الغرفة",
    copy: "نسخ",
    copied: "تم النسخ",
    players: "اللاعبون ({{count}})",
    you: "أنت",
    host: "👑 المضيف",
    startGame: "بدء اللعبة",
    waitingForHost: "في انتظار المضيف لبدء اللعبة...",
    needMore: "بحاجة إلى {{count}} لاعبين إضافيين"
  },
  game: {
    phase1: {
      tag: "المرحلة 1 — اختيار الموضوع",
      tagChoosing: "المرحلة 1 — جاري اختيار الموضوع",
      guesserTitle: "أنت <br /><span class=\"text-gradient\">المخمن</span> في هذه الجولة!",
      guesserDesc: "اللاعبون الآخرون يختارون الموضوع.<br />لا يمكنك رؤيته، لذا يرجى الانتظار.",
      chooseTitle: "<span class=\"text-gradient\">اختر</span> الموضوع",
      chooseDesc: "اختر كلمة يسهل تقديم تلميحات عنها دون علم المخمن.",
      choosingTitle: "<span class=\"text-gradient\">جاري اختيار</span> الموضوع",
      choosingDesc: "المضيف يختار من بين 5 خيارات.<br />يرجى الانتظار."
    },
    phase2: {
      tag: "المرحلة 2 — إدخال التلميحات",
      tagInputting: "المرحلة 2 — جاري إدخال التلميحات",
      guesserTitle: "يفكر...",
      guesserDesc: "الآخرون يفكرون في التلميحات.<br />يرجى الانتظار!",
      submittedTitle: "تم الإرسال!",
      yourHint: "تلميحك",
      waitingOthers: "في انتظار الآخرين...",
      progress: "{{submitted}} / {{total}} لاعبون جاهزون",
      topicLabel: "الموضوع الحالي",
      inputTitle: "أدخل تلميحاً من <span class=\"text-gradient\">كلمة واحدة</span>",
      inputDesc: "أدخل كلمة واحدة فقط توحي بالموضوع.<br />ستختفي التلميحات المتكررة! لا تستخدم المسافات.",
      inputPlaceholder: "أدخل التلميح...",
      warnOneWord: "⚠️ مسموح بكلمة واحدة فقط",
      submitBtn: "إرسال التلميح"
    },
    phase3: {
      tag: "المرحلة 3 — فحص التكرار",
      tagChecking: "المرحلة 3 — جاري فحص التكرار",
      guesserTitle: "يفحص...",
      guesserDesc: "الآخرون يزيلون التلميحات المكررة.<br />اقتربنا!",
      checkTitle: "إزالة <span class=\"text-gradient\">التلميحات المكررة</span>",
      checkDesc: "المس التلميحات المتطابقة أو المتشابهة لإزالتها.<br />سيتم عرض التلميحات المتبقية للمخمن.",
      eliminated: "تمت الإزالة",
      valid: "تلميحات صالحة",
      confirmBtn: "تأكيد"
    },
    phase4: {
      tag: "المرحلة 4 — دورك!",
      othersTitle: "المخمن يفكر...",
      othersDesc: "هل سيتمكن من التخمين بتلميحاتك؟",
      allEliminated: "لا توجد تلميحات صالحة...",
      guesserTitle: "<span class=\"text-gradient\">خمن الموضوع</span> من التلميحات!",
      guesserDesc: "حاول استنتاج الإجابة الصحيحة مع التلميحات المتبقية.",
      inputPlaceholder: "أدخل الإجابة...",
      submitBtn: "تخمين",
      passBtn: "تجاوز"
    },
    phase5: {
      tag: "المرحلة 5 — النتائج",
      answerWas: "كانت الإجابة",
      guesserWas: "إجابة {{name}}",
      correct: "صحيح!",
      incorrect: "خطأ...",
      pass: "تجاوز",
      hintList: "قائمة التلميحات",
      nextRoundBtn: "الجولة التالية",
      viewResultBtn: "نهاية اللعبة!"
    },
    summary: {
      title: "انتهت اللعبة!",
      scoreTitle: "النتيجة النهائية",
      scorePoints: "نقاط",
      maxScore: "من",
      evaluation: {
        perfect: "🏆 فريق أسطوري! مثالي!",
        great: "🌟 عمل جماعي رائع!",
        good: "👍 عمل جيد!",
        normal: "🙂 ليس سيئاً!",
        poor: "😅 حظاً أفضل في المرة القادمة!"
      },
      backToLobby: "العودة إلى اللوبي"
    },
    common: {
      scoreLabel: "النقاط",
      guesserRole: "المخمن",
      endGame: "إنهاء",
      leave: "مغادرة",
      privacyPolicy: "سياسة الخصوصية",
      contact: "اتصل بنا",
      shareX: "مشاركة على X",
      shareText: "لقد حصلت على {{score}} نقطة في HINT-LY ONE! #HintlyOne",
    }
  },
  privacy: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 25 أبريل 2026",
    introduction: "تحدد هذه السياسة كيفية تعاملنا مع المعلومات الشخصية على هذا الموقع (HINT-LY ONE).",
    sections: [
      {
        title: "1. جمع البيانات واستخدامها",
        content: "يستخدم هذا الموقع مصادقة Firebase المجهولة للحفاظ على اللعبة وإدارة الجلسات. تشمل المعلومات التي يتم جمعها معرفات المستخدم المجهولة وأسماء اللاعبين والتلميحات/الإجابات المرسلة."
      },
      {
        title: "2. استخدام ملفات تعريف الارتباط",
        content: "يستخدم هذا الموقع خدمات Google Firebase وقد يستخدم ملفات تعريف الارتباط لأغراض التحليل والمصادقة."
      },
      {
        title: "3. الإعلان",
        content: "قد يعرض هذا الموقع إعلانات من جهات خارجية مثل Google AdSense في المستقبل. قد يستخدم هؤلاء المزودون ملفات تعريف الارتباط لعرض الإعلانات بناءً على زيارات المستخدم السابقة."
      },
      {
        title: "4. الاتصال بنا",
        content: "إذا كان لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بالمطور."
      }
    ]
  },
  contact: {
    title: "اتصل بنا",
    nameLabel: "المطور",
    emailLabel: "عنوان البريد الإلكتروني",
    description: "إذا كان لديك أي أسئلة أو تقارير عن أخطاء أو اقتراحات لـ HINT-LY ONE، فلا تتردد في التواصل معنا على العنوان التالي.",
    respondTime: "نرد عادةً في غضون 3 أيام عمل."
  }
};

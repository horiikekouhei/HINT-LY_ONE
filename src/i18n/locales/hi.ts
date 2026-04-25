export const hi = {
  lobby: {
    subtitle: "सभी के साथ खेलने के लिए शब्द संकेत गेम",
    yourName: "आपका नाम",
    namePlaceholder: "अपना उपनाम दर्ज करें...",
    createRoom: "नया कमरा बनाएं",
    joinRoom: "कमरे में शामिल हों",
    roomLanguage: "कमरे की भाषा",
    creating: "बनाया जा रहा है...",
    createConfirm: "कमरा बनाएं",
    back: "पीछे",
    roomId: "कमरा ID",
    roomIdPlaceholder: "जैसे: AB3X9Z",
    joining: "शामिल हो रहे हैं...",
    joinConfirm: "शामिल हों",
    howToPlay: "🎯 कैसे खेलें",
    rule1: "1 व्यक्ति 'अनुमानक' बनता है और शब्द का अनुमान लगाने की कोशिश करता है",
    rule2: "अन्य खिलाड़ी एक शब्द का संकेत देते हैं",
    rule3: "समान संकेत हटा दिए जाते हैं!",
    rule4: "केवल शेष संकेतों के साथ सही उत्तर का अनुमान लगाएं",
    errors: {
      enterName: "कृपया अपना नाम दर्ज करें",
      enterRoomId: "कृपया कमरा ID दर्ज करें"
    },
    roundCount: "दौर की संख्या",
    freeMode: "फ्री मोड",
    freeModeDesc: "आप किसी भी समय समाप्त कर सकते हैं और खेल के बीच में शामिल हो सकते हैं",
  },
  waiting: {
    waitingTag: "🎮 प्रतीक्षा",
    waitingTitle: "सभी की प्रतीक्षा की जा रही है...",
    waitingSubtitle: "साथ खेलने के लिए अपने दोस्तों को यह ID बताएं!",
    roomIdLabel: "कमरा ID",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया",
    players: "खिलाड़ी ({{count}})",
    you: "आप",
    host: "👑 होस्ट",
    startGame: "खेल शुरू करें",
    waitingForHost: "होस्ट के खेल शुरू करने की प्रतीक्षा की जा रही है...",
    needMore: "{{count}} और खिलाड़ियों की आवश्यकता है"
  },
  game: {
    phase1: {
      tag: "चरण 1 — विषय चयन",
      tagChoosing: "चरण 1 — विषय चुना जा रहा है",
      guesserTitle: "आप इस दौर के <br /><span class=\"text-gradient\">अनुमानक</span> हैं!",
      guesserDesc: "अन्य खिलाड़ी विषय चुन रहे हैं।<br />आप इसे नहीं देख सकते, इसलिए कृपया प्रतीक्षा करें।",
      chooseTitle: "विषय <span class=\"text-gradient\">चुनें</span>",
      chooseDesc: "ऐसा शब्द चुनें जिसके लिए संकेत देना आसान हो।",
      choosingTitle: "विषय <span class=\"text-gradient\">चुना जा रहा है</span>",
      choosingDesc: "होस्ट 5 विकल्पों में से चुन रहा है।<br />प्रतीक्षा करें।"
    },
    phase2: {
      tag: "चरण 2 — संकेत दर्ज करें",
      tagInputting: "चरण 2 — संकेत दर्ज किए जा रहे हैं",
      guesserTitle: "सोच रहे हैं...",
      guesserDesc: "अन्य लोग संकेतों के बारे में सोच रहे हैं।<br />प्रतीक्षा करें!",
      submittedTitle: "भेज दिया गया!",
      yourHint: "आपका संकेत",
      waitingOthers: "दूसरों की प्रतीक्षा की जा रही है...",
      progress: "{{submitted}} / {{total}} खिलाड़ी तैयार",
      topicLabel: "वर्तमान विषय",
      inputTitle: "<span class=\"text-gradient\">एक शब्द</span> में संकेत दर्ज करें",
      inputDesc: "विषय का सुझाव देने वाला केवल एक शब्द दर्ज करें।<br />समान संकेत गायब हो जाएंगे! रिक्त स्थान का उपयोग न करें।",
      inputPlaceholder: "संकेत दर्ज करें...",
      warnOneWord: "⚠️ केवल एक शब्द की अनुमति है",
      submitBtn: "संकेत भेजें"
    },
    phase3: {
      tag: "चरण 3 — डुप्लिकेट की जाँच",
      tagChecking: "चरण 3 — डुप्लिकेट की जाँच की जा रही है",
      guesserTitle: "जाँच की जा रही है...",
      guesserDesc: "अन्य लोग डुप्लिकेट संकेतों को हटा रहे हैं।<br />बस थोड़ा और!",
      checkTitle: "<span class=\"text-gradient\">डुप्लिकेट संकेत</span> हटाएं",
      checkDesc: "हटाने के लिए समान या मिलते-जुलते संकेतों को स्पर्श करें।<br />शेष संकेत अनुमानक को दिखाए जाएंगे।",
      eliminated: "हटाया गया",
      valid: "मान्य संकेत",
      confirmBtn: "पुष्टि करें"
    },
    phase4: {
      tag: "चरण 4 — आपकी बारी!",
      othersTitle: "अनुमानक सोच रहा है...",
      othersDesc: "क्या वे आपके संकेतों से अनुमान लगा पाएंगे?",
      allEliminated: "कोई मान्य संकेत नहीं...",
      guesserTitle: "संकेतों के साथ <span class=\"text-gradient\">विषय का अनुमान लगाएं</span>!",
      guesserDesc: "शेष संकेतों के साथ सही उत्तर खोजने का प्रयास करें।",
      inputPlaceholder: "उत्तर दर्ज करें...",
      submitBtn: "अनुमान लगाएं",
      passBtn: "पास"
    },
    phase5: {
      tag: "चरण 5 — परिणाम",
      answerWas: "उत्तर था",
      guesserWas: "{{name}} का उत्तर",
      correct: "सही!",
      incorrect: "गलत...",
      pass: "पास",
      hintList: "संकेतों की सूची",
      nextRoundBtn: "अगला दौर",
      viewResultBtn: "खेल समाप्त!"
    },
    summary: {
      title: "खेल समाप्त!",
      scoreTitle: "अंतिम स्कोर",
      scorePoints: "अंक",
      maxScore: "में से",
      evaluation: {
        perfect: "🏆 शानदार टीम! एकदम सही!",
        great: "🌟 बेहतरीन टीम वर्क!",
        good: "👍 अच्छा काम!",
        normal: "🙂 बुरा नहीं है!",
        poor: "😅 अगली बार बेहतर भाग्य!"
      },
      backToLobby: "लॉबी में वापस जाएं"
    },
    common: {
      scoreLabel: "अंक",
      guesserRole: "अनुमानक",
      endGame: "समाप्त करें",
      leave: "छोड़ें",
      privacyPolicy: "गोपनीयता नीति",
      shareX: "X पर साझा करें",
      shareText: "मैंने HINT-LY ONE में {{score}} अंक प्राप्त किए! #HintlyOne",
    }
  },
  privacy: {
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट: 25 अप्रैल 2024",
    introduction: "यह नीति बताती है कि हम इस साइट (HINT-LY ONE) पर व्यक्तिगत जानकारी को कैसे संभालते हैं।",
    sections: [
      {
        title: "1. डेटा संग्रह और उपयोग",
        content: "यह साइट खेल बनाए रखने और सत्र प्रबंधन के लिए Firebase अनाम प्रमाणीकरण का उपयोग करती है। एकत्र की गई जानकारी में अनाम उपयोगकर्ता ID, खिलाड़ियों के नाम और भेजे गए संकेत/उत्तर शामिल हैं।"
      },
      {
        title: "2. कुकीज़ का उपयोग",
        content: "यह साइट Google Firebase सेवाओं का उपयोग करती है और विश्लेषण और प्रमाणीकरण उद्देश्यों के लिए कुकीज़ का उपयोग कर सकती है।"
      },
      {
        title: "3. विज्ञापन",
        content: "यह साइट भविष्य में Google AdSense जैसे तृतीय-पक्ष विज्ञापनदाताओं के विज्ञापन प्रदर्शित कर सकती है। ये प्रदाता उपयोगकर्ता की पिछली यात्राओं के आधार पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग कर सकते हैं।"
      },
      {
        title: "4. संपर्क करें",
        content: "यदि आपके पास इस नीति के बारे में कोई प्रश्न हैं, तो कृपया डेवलपर से संपर्क करें।"
      }
    ]
  }
};

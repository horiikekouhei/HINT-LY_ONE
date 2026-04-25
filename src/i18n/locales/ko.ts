export const ko = {
  lobby: {
    subtitle: "모두가 함께 즐기는 단어 힌트 게임",
    yourName: "당신의 이름",
    namePlaceholder: "닉네임을 입력하세요...",
    createRoom: "새 방 만들기",
    joinRoom: "방 참여하기",
    roomLanguage: "방 언어",
    creating: "만드는 중...",
    createConfirm: "방 만들기",
    back: "뒤로",
    roomId: "방 ID",
    roomIdPlaceholder: "예: AB3X9Z",
    joining: "참여 중...",
    joinConfirm: "참여",
    howToPlay: "🎯 게임 방법",
    rule1: "1명이 '정답자'가 되어 제시어를 맞힙니다",
    rule2: "나머지 플레이어는 힌트를 한 단어씩 줍니다",
    rule3: "중복된 힌트는 사라집니다!",
    rule4: "남은 힌트만으로 정답을 맞히세요",
    errors: {
      enterName: "이름을 입력해주세요",
      enterRoomId: "방 ID를 입력해주세요",
      createFailed: "방 만들기에 실패했습니다",
      notFound: "방을 찾을 수 없거나 이미 시작되었습니다",
      joinFailed: "참여에 실패했습니다"
    },
    roundCount: "라운드 수",
    freeMode: "프리 모드",
    freeModeDesc: "언제든지 종료할 수 있으며 도중에 참여할 수 있습니다",
  },
  waiting: {
    waitingTag: "🎮 대기 중",
    waitingTitle: "모두를 기다리고 있습니다...",
    waitingSubtitle: "이 ID를 친구에게 알려주고 함께 즐기세요!",
    roomIdLabel: "방 ID",
    copy: "복사",
    copied: "복사됨",
    players: "참여자 ({{count}}명)",
    you: "당신",
    host: "👑 방장",
    kick: "강퇴",
    kickConfirm: "이 플레이어를 강퇴하시겠습니까?",
    needMore: "{{count}}명 더 필요합니다",
    startGame: "게임 시작",
    waitingForHost: "방장이 게임을 시작하기를 기다리고 있습니다...",
    kickedTitle: "방에서 나갔습니다",
    kickedDesc: "방장에 의해 방에서 제외되었습니다.",
  },
  game: {
    phase1: {
      tag: "단계 1 — 제시어 선택",
      tagChoosing: "단계 1 — 제시어 선택 중",
      guesserTitle: "당신은 이번 라운드의<br /><span class=\"text-gradient\">정답자</span>입니다!",
      guesserDesc: "다른 플레이어들이 제시어를 선택하고 있습니다.<br />제시어는 보이지 않으니 잠시만 기다려주세요.",
      chooseTitle: "제시어를 <span class=\"text-gradient\">선택해주세요</span>",
      chooseDesc: "정답자 몰래 힌트를 주기 좋은 단어를 하나 고르세요.",
      choosingTitle: "제시어를 <span class=\"text-gradient\">선택 중</span>입니다",
      choosingDesc: "진행자가 5개의 후보 중 하나를 고르고 있습니다.<br />잠시만 기다려주세요."
    },
    phase2: {
      tag: "단계 2 — 힌트 입력",
      tagInputting: "단계 2 — 힌트 입력 중",
      guesserTitle: "생각 중...",
      guesserDesc: "다른 플레이어들이 힌트를 생각하고 있습니다.<br />잠시만 기다려주세요!",
      submittedTitle: "전송 완료!",
      yourHint: "당신의 힌트",
      waitingOthers: "다른 플레이어를 기다리는 중...",
      progress: "{{submitted}} / {{total}} 명 입력 완료",
      topicLabel: "이번 제시어",
      inputTitle: "<span class=\"text-gradient\">한 단어</span>로 힌트를 입력하세요",
      inputDesc: "제시어를 연상시키는 단어를 하나만 입력하세요.<br />중복된 힌트는 사라집니다! 공백은 사용할 수 없습니다.",
      inputPlaceholder: "힌트 입력...",
      warnOneWord: "⚠️ 한 단어만 입력 가능합니다",
      submitBtn: "힌트 보내기",
      rewriteBtn: "다시 쓰기",
      joiningNextRound: "다음 라운드부터 게임에 참여합니다. 잠시만 기다려주세요.",
    },
    phase3: {
      tag: "단계 3 — 중복 체크",
      tagChecking: "단계 3 — 중복 체크 중",
      guesserTitle: "체크 중...",
      guesserDesc: "다른 플레이어들이 중복된 힌트를<br />제거하고 있습니다. 잠시만요!",
      checkTitle: "중복된 <span class=\"text-gradient\">힌트 지우기</span>",
      checkDesc: "같거나 비슷한 의미의 힌트를 터치해서 지워주세요.<br />남은 힌트가 정답자에게 보입니다.",
      eliminated: "삭제됨",
      valid: "남은 힌트",
      confirmBtn: "확정하기"
    },
    phase4: {
      tag: "단계 4 — 정답 맞히기",
      othersTitle: "정답자가 생각 중입니다...",
      othersDesc: "보낸 힌트로 정답을 맞힐 수 있을까요?",
      allEliminated: "유효한 힌트가 없습니다...",
      guesserTitle: "힌트로 <span class=\"text-gradient\">정답을 맞히세요</span>!",
      guesserDesc: "남은 힌트들을 보고 정답을 유추하세요.",
      inputPlaceholder: "정답 입력...",
      submitBtn: "정답 제출",
      passBtn: "패스"
    },
    phase5: {
      tag: "단계 5 — 결과 발표",
      answerWas: "제시어는",
      guesserWas: "정답자:",
      correct: "정답!",
      incorrect: "오답...",
      pass: "패스",
      hintList: "힌트 목록",
      eliminated: "(중복/무효)",
      nextRoundBtn: "다음 라운드",
      viewResultBtn: "최종 결과 보기",
      endFreeModeBtn: "게임 종료",
    },
    summary: {
      title: "게임 종료!",
      scoreTitle: "최종 스코어",
      scorePoints: "점",
      maxScore: "점 만점",
      historyTitle: "📝 플레이 기록",
      evaluation: {
        perfect: "🏆 전설적인 팀워크! 완벽합니다!",
        great: "🌟 정말 멋진 팀워크였어요!",
        good: "👍 꽤 괜찮은 성적이네요!",
        normal: "🙂 나쁘지 않은 결과입니다!",
        poor: "😅 다음엔 더 잘할 수 있을 거예요!"
      },
      backToLobby: "로비로 돌아가기"
    },
    common: {
      scoreLabel: "스코어",
      guesserRole: "정답자",
      endGame: "종료",
      leave: "나가기",
      privacyPolicy: "개인정보 처리방침",
      contact: "문의하기",
      shareX: "X에 공유",
      shareText: "HINT-LY ONE에서 {{score}}점을 획득했습니다! #HintlyOne",
    }
  },
  privacy: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2026년 4월 25일",
    introduction: "본 사이트(HINT-LY ONE)에서의 개인정보 취급에 대해 다음과 같이 정합니다.",
    sections: [
      {
        title: "1. 데이터 수집 및 이용",
        content: "본 사이트는 게임 플레이 유지 및 세션 관리를 위해 Firebase 익명 인증을 이용합니다. 수집되는 정보는 익명 사용자 ID, 입력된 플레이어 이름, 게임 내에서 전송된 힌트 및 답변뿐입니다."
      },
      {
        title: "2. 쿠키 이용",
        content: "본 사이트는 Google Firebase 서비스를 이용하며, 분석 및 인증 목적으로 쿠키를 사용할 수 있습니다."
      },
      {
        title: "3. 광고 게재",
        content: "본 사이트는 향후 Google AdSense 등 제3자 제공업체를 통한 광고를 게재할 수 있습니다. 이러한 업체는 사용자의 과거 방문 정보를 기반으로 광고를 게재하기 위해 쿠키를 사용할 수 있습니다."
      },
      {
        title: "4. 문의",
        content: "본 방침에 관한 문의는 개발자에게 연락해 주시기 바랍니다."
      }
    ]
  },
  contact: {
    title: "문의하기",
    nameLabel: "운영자",
    emailLabel: "이메일 주소",
    description: "HINT-LY ONE에 관한 질문, 버그 보고, 개선 요청 등은 아래 연락처로 언제든지 문의해 주세요.",
    respondTime: "보통 영업일 기준 3일 이내에 답변해 드립니다."
  }
};

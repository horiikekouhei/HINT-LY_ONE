export const fr = {
  lobby: {
    subtitle: "Le jeu d'indices de mots pour jouer avec tout le monde",
    yourName: "Votre nom",
    namePlaceholder: "Entrez votre pseudo...",
    createRoom: "Créer une nouvelle salle",
    joinRoom: "Rejoindre une salle",
    roomLanguage: "Langue de la salle",
    creating: "Création...",
    createConfirm: "Créer la salle",
    back: "Retour",
    roomId: "ID de la salle",
    roomIdPlaceholder: "Ex: AB3X9Z",
    joining: "Connexion...",
    joinConfirm: "Rejoindre",
    howToPlay: "🎯 Comment jouer",
    rule1: "Une personne est le 'Devineur' et tente de deviner le mot",
    rule2: "Les autres joueurs donnent un indice d'un seul mot",
    rule3: "Les indices identiques sont éliminés !",
    rule4: "Devinez la bonne réponse uniquement avec les indices restants",
    errors: {
      enterName: "Veuillez entrer votre nom",
      enterRoomId: "Veuillez entrer l'ID de la salle"
    },
    roundCount: "Nombre de tours",
    freeMode: "Mode libre",
    freeModeDesc: "Vous pouvez terminer à tout moment et rejoindre en cours de jeu",
  },
  waiting: {
    waitingTag: "🎮 En attente",
    waitingTitle: "En attente de tout le monde...",
    waitingSubtitle: "Donnez cet ID à vos amis pour jouer ensemble !",
    roomIdLabel: "ID de la salle",
    copy: "Copier",
    copied: "Copié",
    players: "Joueurs ({{count}})",
    you: "Vous",
    host: "👑 Hôte",
    startGame: "Lancer le jeu",
    waitingForHost: "En attente que l'hôte lance le jeu...",
    needMore: "Il faut encore {{count}} joueurs"
  },
  game: {
    phase1: {
      tag: "Phase 1 — Choix du sujet",
      tagChoosing: "Phase 1 — Choix du sujet en cours",
      guesserTitle: "Vous êtes le <br /><span class=\"text-gradient\">Devineur</span> de ce tour !",
      guesserDesc: "Les autres joueurs choisissent le sujet.<br />Vous ne pouvez pas le voir, alors patientez un instant.",
      chooseTitle: "<span class=\"text-gradient\">Choisissez</span> le sujet",
      chooseDesc: "Choisissez un mot facile pour donner des indices sans que le devineur ne le sache.",
      choosingTitle: "<span class=\"text-gradient\">Choix</span> du sujet",
      choosingDesc: "L'hôte choisit parmi 5 options.<br />Patientez un instant."
    },
    phase2: {
      tag: "Phase 2 — Saisie des indices",
      tagInputting: "Phase 2 — Saisie des indices en cours",
      guesserTitle: "Réflexion...",
      guesserDesc: "Les autres réfléchissent aux indices.<br />Patientez un instant !",
      submittedTitle: "Envoyé !",
      yourHint: "Votre indice",
      waitingOthers: "En attente des autres...",
      progress: "{{submitted}} / {{total}} joueurs prêts",
      topicLabel: "Sujet actuel",
      inputTitle: "Entrez un indice en <span class=\"text-gradient\">un seul mot</span>",
      inputDesc: "Entrez un seul mot qui suggère le sujet.<br />Les indices identiques disparaîtront ! Pas d'espaces.",
      inputPlaceholder: "Entrez l'indice...",
      warnOneWord: "⚠️ Un seul mot autorisé",
      submitBtn: "Envoyer l'indice"
    },
    phase3: {
      tag: "Phase 3 — Vérification des doublons",
      tagChecking: "Phase 3 — Vérification des doublons en cours",
      guesserTitle: "Vérification...",
      guesserDesc: "Les autres éliminent les indices en double.<br />C'est presque fini !",
      checkTitle: "Éliminer les <span class=\"text-gradient\">indices en double</span>",
      checkDesc: "Touchez les indices identiques ou similaires pour les éliminer.<br />Les restants seront montrés au devineur.",
      eliminated: "Éliminé",
      valid: "Indices valides",
      confirmBtn: "Confirmer"
    },
    phase4: {
      tag: "Phase 4 — Votre tour !",
      othersTitle: "Le devineur réfléchit...",
      othersDesc: "Pourra-t-il deviner avec vos indices ?",
      allEliminated: "Aucun indice valide...",
      guesserTitle: "<span class=\"text-gradient\">Devinez le sujet</span> avec les indices !",
      guesserDesc: "Tentez de trouver la bonne réponse avec les indices restants.",
      inputPlaceholder: "Entrez la réponse...",
      submitBtn: "Deviner",
      passBtn: "Passer"
    },
    phase5: {
      tag: "Phase 5 — Résultats",
      answerWas: "La réponse était",
      guesserWas: "Réponse de {{name}}",
      correct: "Correct !",
      incorrect: "Incorrect...",
      pass: "Passé",
      hintList: "Liste des indices",
      nextRoundBtn: "Tour suivant",
      viewResultBtn: "Fin du jeu !"
    },
    summary: {
      title: "Jeu terminé !",
      scoreTitle: "Score final",
      scorePoints: "pts",
      maxScore: "sur",
      evaluation: {
        perfect: "🏆 Équipe légendaire ! Parfait !",
        great: "🌟 Excellent travail d'équipe !",
        good: "👍 Bon travail !",
        normal: "🙂 Pas mal !",
        poor: "😅 Plus de chance la prochaine fois !"
      },
      backToLobby: "Retour au lobby"
    },
    common: {
      scoreLabel: "Points",
      guesserRole: "Devineur",
      endGame: "Terminer",
      leave: "Quitter",
      privacyPolicy: "Politique de confidentialité",
      shareX: "Partager sur X",
      shareText: "J'ai obtenu {{score}} points sur HINT-LY ONE ! #HintlyOne",
    }
  },
  privacy: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 25 avril 2024",
    introduction: "Cette politique définit la manière dont nous traitons les informations personnelles sur ce site (HINT-LY ONE).",
    sections: [
      {
        title: "1. Collecte et utilisation des données",
        content: "Ce site utilise l'authentification anonyme de Firebase pour maintenir le jeu et gérer les sessions. Les informations collectées comprennent des identifiants d'utilisateur anonymes, les noms des joueurs et les indices/réponses envoyés."
      },
      {
        title: "2. Utilisation des cookies",
        content: "Ce site utilise les services Google Firebase et peut utiliser des cookies à des fins d'analyse et d'authentification."
      },
      {
        title: "3. Publicité",
        content: "Ce site peut afficher à l'avenir des publicités de tiers comme Google AdSense. Ces fournisseurs peuvent utiliser des cookies pour diffuser des publicités basées sur les visites antérieures de l'utilisateur."
      },
      {
        title: "4. Contact",
        content: "Pour toute question concernant cette politique, veuillez contacter le développeur."
      }
    ]
  }
};

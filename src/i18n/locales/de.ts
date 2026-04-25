export const de = {
  lobby: {
    subtitle: "Ein kooperatives Wort-Ratespiel für alle",
    yourName: "Dein Name",
    namePlaceholder: "Gib deinen Nickname ein...",
    createRoom: "Raum erstellen",
    joinRoom: "Raum beitreten",
    roomLanguage: "Raumsprache",
    creating: "Erstelle...",
    createConfirm: "Raum erstellen",
    back: "Zurück",
    roomId: "Raum-ID",
    roomIdPlaceholder: "z.B. AB3X9Z",
    joining: "Trete bei...",
    joinConfirm: "Beitreten",
    howToPlay: "🎯 Spielanleitung",
    rule1: "Eine Person ist der 'Rater' und versucht das Wort zu erraten",
    rule2: "Die anderen Spieler geben jeweils einen Hinweis aus einem Wort",
    rule3: "Identische Hinweise werden gelöscht!",
    rule4: "Errate das Wort nur mit den verbleibenden Hinweisen",
    errors: {
      enterName: "Bitte gib deinen Namen ein",
      enterRoomId: "Bitte gib eine Raum-ID ein",
      createFailed: "Raum konnte nicht erstellt werden",
      notFound: "Raum nicht gefunden oder bereits gestartet",
      joinFailed: "Beitritt fehlgeschlagen"
    },
    roundCount: "Rundenanzahl",
    freeMode: "Freier Modus",
    freeModeDesc: "Jederzeit beenden, Beitritt während des Spiels möglich",
  },
  waiting: {
    waitingTag: "🎮 Warten",
    waitingTitle: "Warte auf Mitspieler...",
    waitingSubtitle: "Teile diese ID mit deinen Freunden!",
    roomIdLabel: "Raum-ID",
    copy: "Kopieren",
    copied: "Kopiert!",
    players: "Spieler ({{count}})",
    you: "Du",
    host: "👑 Host",
    kick: "Kick",
    kickConfirm: "Diesen Spieler kicken?",
    needMore: "Noch {{count}} Spieler benötigt",
    startGame: "Spiel starten",
    waitingForHost: "Warten auf den Host...",
    kickedTitle: "Raum verlassen",
    kickedDesc: "Du wurdest vom Host aus dem Raum entfernt.",
  },
  game: {
    phase1: {
      tag: "Phase 1 — Themenwahl",
      tagChoosing: "Phase 1 — Thema wird gewählt",
      guesserTitle: "Du bist der <br /><span class=\"text-gradient\">Rater</span> in dieser Runde!",
      guesserDesc: "Andere Spieler wählen ein Thema.<br />Bitte warte einen Moment.",
      chooseTitle: "<span class=\"text-gradient\">Wähle</span> das Thema",
      chooseDesc: "Wähle ein Wort, das leicht zu beschreiben ist, ohne dass der Rater es weiß.",
      choosingTitle: "Thema wird <span class=\"text-gradient\">gewählt</span>",
      choosingDesc: "Der Host wählt aus 5 Optionen.<br />Bitte warten."
    },
    phase2: {
      tag: "Phase 2 — Hinweise geben",
      tagInputting: "Phase 2 — Hinweise werden eingegeben",
      guesserTitle: "Überlegt...",
      guesserDesc: "Andere denken über Hinweise nach.<br />Bitte warten!",
      submittedTitle: "Gesendet!",
      yourHint: "Dein Hinweis",
      waitingOthers: "Warte auf andere...",
      progress: "{{submitted}} / {{total}} Spieler bereit",
      topicLabel: "Aktuelles Thema",
      inputTitle: "Gib einen Hinweis aus <span class=\"text-gradient\">einem Wort</span> ein",
      inputDesc: "Gib nur ein Wort ein, das auf das Thema hindeutet.<br />Doppelte Hinweise verschwinden! Keine Leerzeichen.",
      inputPlaceholder: "Hinweis eingeben...",
      warnOneWord: "⚠️ Nur ein Wort erlaubt",
      submitBtn: "Hinweis senden",
      rewriteBtn: "Neu schreiben",
      joiningNextRound: "Du nimmst ab der nächsten Runde teil. Bitte warten.",
    },
    phase3: {
      tag: "Phase 3 — Doppelte prüfen",
      tagChecking: "Phase 3 — Prüfung läuft",
      guesserTitle: "Prüfe...",
      guesserDesc: "Andere entfernen doppelte Hinweise.<br />Gleich geht's weiter!",
      checkTitle: "Doppelte <span class=\"text-gradient\">Hinweise löschen</span>",
      checkDesc: "Tippe auf identische oder ähnliche Hinweise, um sie zu löschen.<br />Die restlichen werden dem Rater gezeigt.",
      eliminated: "Gelöscht",
      valid: "Gültige Hinweise",
      confirmBtn: "Bestätigen"
    },
    phase4: {
      tag: "Phase 4 — Raten",
      othersTitle: "Der Rater überlegt...",
      othersDesc: "Wird er es mit deinen Hinweisen erraten?",
      allEliminated: "Keine gültigen Hinweise mehr...",
      guesserTitle: "<span class=\"text-gradient\">Errate das Wort</span>!",
      guesserDesc: "Versuche das richtige Wort anhand der Hinweise zu finden.",
      inputPlaceholder: "Antwort eingeben...",
      submitBtn: "Raten",
      passBtn: "Passen"
    },
    phase5: {
      tag: "Phase 5 — Ergebnis",
      answerWas: "Die Antwort war",
      guesserWas: "Antwort von:",
      correct: "Richtig!",
      incorrect: "Falsch...",
      pass: "Gepasst",
      hintList: "Hinweisliste",
      eliminated: "(Gelöscht/Ungültig)",
      nextRoundBtn: "Nächste Runde",
      viewResultBtn: "Spiel beenden",
      endFreeModeBtn: "Spiel beenden",
    },
    summary: {
      title: "Spiel vorbei!",
      scoreTitle: "Endstand",
      scorePoints: "Pkt",
      maxScore: "von",
      historyTitle: "📝 Spielverlauf",
      evaluation: {
        perfect: "🏆 Legendäres Team! Perfekt!",
        great: "🌟 Großartiges Teamwork!",
        good: "👍 Gute Arbeit!",
        normal: "🙂 Nicht schlecht!",
        poor: "😅 Nächstes Mal wird's besser!"
      },
      backToLobby: "Zurück zur Lobby"
    },
    common: {
      scoreLabel: "Punkte",
      guesserRole: "Rater",
      endGame: "Beenden",
      leave: "Verlassen",
      privacyPolicy: "Datenschutzerklärung",
      contact: "Kontakt",
      shareX: "Auf X teilen",
      shareText: "Ich habe {{score}} Punkte bei HINT-LY ONE erreicht! #HintlyOne",
    }
  },
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 25. April 2026",
    introduction: "Diese Erklärung legt fest, wie wir mit personenbezogenen Daten auf dieser Website (HINT-LY ONE) umgehen.",
    sections: [
      {
        title: "1. Datenerhebung und -verwendung",
        content: "Diese Website nutzt die anonyme Firebase-Authentifizierung zur Aufrechterhaltung des Spiels und zur Sitzungsverwaltung. Zu den gesammelten Informationen gehören anonyme Benutzer-IDs, Spielernamen sowie die im Spiel gesendeten Hinweise und Antworten."
      },
      {
        title: "2. Verwendung von Cookies",
        content: "Diese Website nutzt Google Firebase-Dienste, die Cookies zu Analyse- und Authentifizierungszwecken verwenden können."
      },
      {
        title: "3. Werbung",
        content: "Diese Website kann in Zukunft Werbung von Drittanbietern wie Google AdSense anzeigen. Diese Anbieter können Cookies verwenden, um Anzeigen basierend auf früheren Besuchen des Nutzers zu schalten."
      },
      {
        title: "4. Kontakt",
        content: "Bei Fragen zu dieser Richtlinie wenden Sie sich bitte an den Entwickler."
      }
    ]
  },
  contact: {
    title: "Kontakt",
    nameLabel: "Entwickler",
    emailLabel: "E-Mail-Adresse",
    description: "Wenn Sie Fragen, Fehlermeldungen oder Vorschläge für HINT-LY ONE haben, können Sie uns gerne unter der folgenden Adresse kontaktieren.",
    respondTime: "Wir antworten in der Regel innerhalb von 3 Werktagen."
  }
};

export const es = {
  lobby: {
    subtitle: "El juego de pistas de palabras para jugar con todos",
    yourName: "Tu nombre",
    namePlaceholder: "Introduce tu apodo...",
    createRoom: "Crear nueva sala",
    joinRoom: "Unirse a una sala",
    roomLanguage: "Idioma de la sala",
    creating: "Creando...",
    createConfirm: "Crear sala",
    back: "Atrás",
    roomId: "ID de la sala",
    roomIdPlaceholder: "Ej: AB3X9Z",
    joining: "Uniéndose...",
    joinConfirm: "Unirse",
    howToPlay: "🎯 Cómo jugar",
    rule1: "Una persona es el 'Adivinador' e intenta adivinar la palabra",
    rule2: "Los demás jugadores dan una pista de una sola palabra",
    rule3: "¡Las pistas idénticas se eliminan!",
    rule4: "Adivina la respuesta correcta solo con las pistas restantes",
    errors: {
      enterName: "Por favor, introduce tu nombre",
      enterRoomId: "Por favor, introduce el ID de la sala"
    },
    roundCount: "Número de rondas",
    freeMode: "Modo libre",
    freeModeDesc: "Puedes terminar en cualquier momento y unirte a mitad del juego",
  },
  waiting: {
    waitingTag: "🎮 Esperando",
    waitingTitle: "Esperando a todos...",
    waitingSubtitle: "¡Dile este ID a tus amigos para jugar juntos!",
    roomIdLabel: "ID de la sala",
    copy: "Copiar",
    copied: "Copiado",
    players: "Jugadores ({{count}})",
    you: "Tú",
    host: "👑 Anfitrión",
    startGame: "Empezar juego",
    waitingForHost: "Esperando a que el anfitrión empiece el juego...",
    needMore: "Se necesitan {{count}} jugadores más"
  },
  game: {
    phase1: {
      tag: "Fase 1 — Elección del tema",
      tagChoosing: "Fase 1 — Eligiendo tema",
      guesserTitle: "¡Eres el <br /><span class=\"text-gradient\">Adivinador</span> de esta ronda!",
      guesserDesc: "Los demás jugadores están eligiendo el tema.<br />No puedes verlo, así que espera un momento.",
      chooseTitle: "<span class=\"text-gradient\">Elige</span> el tema",
      chooseDesc: "Elige una palabra que sea fácil de dar pistas sin que el adivinador lo sepa.",
      choosingTitle: "<span class=\"text-gradient\">Eligiendo</span> tema",
      choosingDesc: "El anfitrión está eligiendo entre 5 opciones.<br />Espera un momento."
    },
    phase2: {
      tag: "Fase 2 — Entrada de pistas",
      tagInputting: "Fase 2 — Introduciendo pistas",
      guesserTitle: "Pensando...",
      guesserDesc: "Los demás están pensando en las pistas.<br />¡Espera un momento!",
      submittedTitle: "¡Enviado!",
      yourHint: "Tu pista",
      waitingOthers: "Esperando a los demás...",
      progress: "{{submitted}} / {{total}} jugadores listos",
      topicLabel: "Tema actual",
      inputTitle: "Introduce una pista de <span class=\"text-gradient\">una palabra</span>",
      inputDesc: "Introduce solo una palabra que sugiera el tema.<br />¡Las pistas repetidas desaparecerán! No uses espacios.",
      inputPlaceholder: "Introduce pista...",
      warnOneWord: "⚠️ Solo puedes introducir una palabra",
      submitBtn: "Enviar pista"
    },
    phase3: {
      tag: "Fase 3 — Revisión de duplicados",
      tagChecking: "Fase 3 — Revisando duplicados",
      guesserTitle: "Revisando...",
      guesserDesc: "Los demás están eliminando pistas duplicadas.<br />¡Ya casi está!",
      checkTitle: "Eliminar <span class=\"text-gradient\">pistas duplicadas</span>",
      checkDesc: "Toca las pistas iguales o similares para eliminarlas.<br />Las restantes se mostrarán al adivinador.",
      eliminated: "Eliminada",
      valid: "Pistas válidas",
      confirmBtn: "Confirmar"
    },
    phase4: {
      tag: "Fase 4 — ¡Tu turno!",
      othersTitle: "El adivinador está pensando...",
      othersDesc: "¿Podrá adivinar con tus pistas?",
      allEliminated: "No hay pistas válidas...",
      guesserTitle: "¡<span class=\"text-gradient\">Adivina el tema</span> con las pistas!",
      guesserDesc: "Intenta deducir la respuesta correcta con las pistas restantes.",
      inputPlaceholder: "Introduce respuesta...",
      submitBtn: "Adivinar",
      passBtn: "Pasar"
    },
    phase5: {
      tag: "Fase 5 — Resultados",
      answerWas: "La respuesta era",
      guesserWas: "Respuesta de {{name}}",
      correct: "¡Correcto!",
      incorrect: "Incorrecto...",
      pass: "Pasado",
      hintList: "Lista de pistas",
      nextRoundBtn: "Siguiente ronda",
      viewResultBtn: "¡Fin del juego!"
    },
    summary: {
      title: "¡Juego terminado!",
      scoreTitle: "Puntuación final",
      scorePoints: "pts",
      maxScore: "de",
      evaluation: {
        perfect: "🏆 ¡Equipo legendario! ¡Perfecto!",
        great: "🌟 ¡Excelente trabajo en equipo!",
        good: "👍 ¡Buen trabajo!",
        normal: "🙂 ¡Nada mal!",
        poor: "😅 ¡Más suerte la próxima vez!"
      },
      backToLobby: "Volver al lobby"
    },
    common: {
      scoreLabel: "Puntos",
      guesserRole: "Adivinador",
      endGame: "Terminar",
      leave: "Salir",
      privacyPolicy: "Política de privacidad",
      contact: "Contacto",
      shareX: "Compartir en X",
      shareText: "¡He conseguido {{score}} puntos en HINT-LY ONE! #HintlyOne",
    }
  },
  privacy: {
    title: "Política de privacidad",
    lastUpdated: "Última actualización: 25 de abril de 2026",
    introduction: "Esta política establece cómo manejamos la información personal en este sitio (HINT-LY ONE).",
    sections: [
      {
        title: "1. Recopilación y uso de datos",
        content: "Este sitio utiliza la autenticación anónima de Firebase para mantener el juego y gestionar las sesiones. La información recopilada incluye IDs de usuario anónimos, nombres de jugadores y las pistas/respuestas enviadas."
      },
      {
        title: "2. Uso de cookies",
        content: "Este sitio utiliza los servicios de Google Firebase y puede usar cookies con fines de análisis y autenticación."
      },
      {
        title: "3. Publicidad",
        content: "Este sitio puede mostrar anuncios de terceros como Google AdSense en el futuro. Estos proveedores pueden usar cookies para mostrar anuncios basados en las visitas previas del usuario."
      },
      {
        title: "4. Contacto",
        content: "Si tienes preguntas sobre esta política, por favor contacta con el desarrollador."
      }
    ]
  },
  contact: {
    title: "Contacto",
    nameLabel: "Desarrollador",
    emailLabel: "Correo electrónico",
    description: "Si tiene alguna pregunta, informe de errores o sugerencias para HINT-LY ONE, no dude en contactarnos en la siguiente dirección.",
    respondTime: "Normalmente respondemos en un plazo de 3 días hábiles."
  }
};

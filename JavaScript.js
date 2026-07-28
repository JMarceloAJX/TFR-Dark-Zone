/* ==================================================================
   MOTOR DE DIÁLOGO EXTENDIDO Y RAMIFICADO — RED DE CONTACTOS
   ------------------------------------------------------------------
   Conversaciones profundas, de múltiples capas e interactivas.
   ================================================================== */

const contacts = [
  {
    id: "dan",
    name: "Comandante Dan",
    initials: "CD",
    role: "Aliado de confianza // GFL",
    color: "#f3a804",
    photo: "Contactos/Comandante Dan.png", // <--- Extensión corregida a .png
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Qué tal, Contratista. Me alegra ver que sigues operativo en este lodazal. Por aquí las cosas se ponen ásperas, pero al menos nos tenemos los unos a los otros para cubrirnos las espaldas. ¿Cómo va tu sector?",
        choices: [
          { label: "Todo bajo control, Dan. ¿Necesitas apoyo en la zona?", next: "n2_apoyo" },
          { label: "Pesado, pero resistiendo. ¿Hay novedades por tu puesto?", next: "n2_novedades" },
          { label: "Bastante turbio. Siento que en cualquier momento esto colapsa.", next: "n2_colapso" }
        ]
      },
      n2_apoyo: {
        text: "Se agradece el gesto, Contratista. Siempre viene bien saber que hay alguien confiable cerca cuando la retaguardia flaquea. La escasez de suministros nos está pegando duro.",
        choices: [
          { label: "Puedo echarte una mano con un convoy de provisiones.", next: "n3_convoy" },
          { label: "Mantente firme, pronto mandaré refuerzos médicos.", next: "n3_refuerzos" }
        ]
      },
      n2_novedades: {
        text: "Nada que no podamos manejar con paciencia y plomo, aunque los reportes de actividad enemiga aumentaron anoche. ¿Tú has visto movimientos raros por tu perimetral?",
        choices: [
          { label: "Sí, patrullas sospechosas rondando los almacenes.", next: "n3_patrullas" },
          { label: "Todo tranquilo por ahora, pero no bajamos la guardia.", next: "n3_tranquilo" }
        ]
      },
      n2_colapso: {
        text: "No te dejes vencer por la paranoia, muchacho. Aquí el que duda pierde la cabeza antes de que suene el primer tiro. Respira hondo.",
        choices: [
          { label: "Tienes razón, solo ha sido una mala semana.", next: "n3_tranquilo" },
          { label: "Necesito un cambio de aires lejos de este sector.", next: "n3_convoy" }
        ]
      },
      n3_convoy: {
        text: "Excelente actitud. Hazme llegar los detalles del manifiesto de carga cuando salgas; estaré esperando en el punto de encuentro habitual.",
        choices: [
          { label: "Hecho. Nos vemos en el punto.", next: "n4_final_bueno" },
          { label: "Espérame, antes tengo que revisar otra ruta.", next: "n4_final_esperar" }
        ]
      },
      n3_refuerzos: {
        text: "Perfecto, los médicos de campo lo agradecerán enormemente. No te expongas de más por allá afuera, Contratista.",
        choices: [
          { label: "Descuidas, sé cuidarme.", next: "n4_final_bueno" }
        ]
      },
      n3_patrullas: {
        text: "Mala señal. Mantén el canal cifrado y no dispares a menos que sea estrictamente necesario. Te aviso si veo algo similar por este flanco.",
        choices: [
          { label: "Entendido, mantendremos perfil bajo.", next: "n4_final_bueno" }
        ]
      },
      n3_tranquilo: {
        text: "Mejor así. Descansa lo que puedas mientras la calma dure; ya sabes cómo cambia el panorama de la noche a la mañana en esta guerra.",
        choices: [
          { label: "Así será. Hablamos luego, Dan.", next: "n4_final_bueno" }
        ]
      },
      n4_final_bueno: { text: "Cuídate allá afuera, Contratista. Corto y fuera.", choices: [], end: true },
      n4_final_esperar: { text: "No tardes demasiado, la situación está volviéndose inestable por horas. Te estaré vigilando la espalda.", choices: [], end: true }
    }
  },

  {
    id: "joel",
    name: "Joel Garrison",
    initials: "JG",
    role: "Enlace de contrato — Exmaestro",
    color: "#f3a804",
    photo: "Contactos/Joel Garrison.jpeg",
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Tengo una misión que nadie más quiso aceptar, Contratista. Antes daba clases en un aula vacía, ahora reparto contratos entre ruinas — la guerra cambia lo que uno es. ¿Te apuntas?",
        choices: [
          { label: "Sí, dime los detalles del objetivo.", next: "n2_detalles" },
          { label: "Suena peligroso. ¿Quién está detrás de esto?", next: "n2_quien" },
          { label: "Prefiero la vida tranquila de los maestros, paso por hoy.", next: "n2_rechazo_suave" }
        ]
      },
      n2_detalles: {
        text: "Se trata de asegurar un viejo servidor con información clasificada antes de que las facciones locales lo arrasen. El pago es en efectivo y suministros limpios.",
        choices: [
          { label: "Acepto el contrato. Mándame las coordenadas.", next: "n3_aceptar" },
          { label: "Paso por esta vez, el riesgo es muy alto.", next: "n3_rechazar" }
        ]
      },
      n2_quien: {
        text: "Digamos que viene de gente que prefiere mantenerse en el anonimato, pero cuyos créditos son genuinos y pesados. Nadie pregunta de más por aquí.",
        choices: [
          { label: "Con eso me basta. Me encargo del trabajo.", next: "n3_aceptar" },
          { label: "No me fío de los anónimos. Mejor busco otra cosa.", next: "n3_rechazar" }
        ]
      },
      n2_rechazo_suave: {
        text: "Jajaja, te entiendo perfectamente. Extraño la tiza y la pizarra tanto como tú extrañas dormir ocho horas seguidas. Pero hay que comer.",
        choices: [
          { label: "Visto así, cuéntame más del contrato.", next: "n2_detalles" },
          { label: "Mejor descansa, Joel. Nos vemos.", next: "n3_rechazar" }
        ]
      },
      n3_aceptar: {
        text: "Sabía que podía contar con tu criterio, Contratista. Los archivos te esperan; no dejes cabos sueltos.",
        choices: [
          { label: "Todo saldrá bien. Nos vemos.", next: "n4_exito" }
        ]
      },
      n3_rechazar: {
        text: "Entendido. La oferta sigue en pie temporalmente, pero alguien más tomará el riesgo pronto. Cuídate.",
        choices: [
          { label: "Igualmente, Joel.", next: "n4_fin" }
        ]
      },
      n4_exito: { text: "Confiamos en tu talento. Buena suerte en el sector.", choices: [], end: true },
      n4_fin: { text: "Hasta la próxima.", choices: [], end: true }
    }
  },

  {
    id: "evita",
    name: "Evita",
    initials: "EV",
    role: "Médica de campo",
    color: "#ff5a5a",
    photo: "Contactos/Evita.jpeg",
    status: "pending",
    start: "n1",
    nodes: {
      n1: {
        text: "Contratista, necesito insumos médicos con suma urgencia para el puesto de avanzada, y de paso... sigo recopilando pistas sobre el paradero de mi padre. ¿Me ayudas con esta misión?",
        choices: [
          { label: "Claro, te consigo los medicamentos y rastreamos las pistas.", next: "n2_ayuda" },
          { label: "Estoy corto de tiempo, Evita. ¿Es muy urgente?", next: "n2_urgente" },
          { label: "Lo siento, la situación está muy peligrosa para buscar pistas.", next: "n2_miedo" }
        ]
      },
      n2_ayuda: {
        text: "Gracias de verdad. Los heridos están aumentando tras los últimos enfrentamientos en la periferia, y cada pista sobre mi padre me acerca a la verdad.",
        choices: [
          { label: "Revisaré los viejos puestos de control abandonados.", next: "n3_puestos" },
          { label: "Preguntaré con mis contactos del puerto.", next: "n3_puerto" }
        ]
      },
      n2_urgente: {
        text: "Los antibióticos se están agotando y la fiebre no cede en los pacientes críticos... Si puedes hacer un hueco, te lo pagaré como pueda.",
        choices: [
          { label: "Está bien, me encargo de los medicamentos ahora mismo.", next: "n3_puestos" },
          { label: "Lo siento, de verdad no puedo comprometerme hoy.", next: "n3_no_puedo" }
        ]
      },
      n2_miedo: {
        text: "Lo comprendo... Nadie te culpa por querer mantenerte a salvo. Yo solo sigo aferrada a la esperanza de encontrarlo.",
        choices: [
          { label: "Bueno, al menos te ayudaré con los medicamentos básicos.", next: "n3_puestos" },
          { label: "Cuídate mucho, Evita.", next: "n3_no_puedo" }
        ]
      },
      n3_puestos: { text: "Ten mucho cuidado en esas zonas olvidadas; los saqueadores suelen merodear por ahí. Avísame al regresar.", choices: [], end: true },
      n3_puerto: { text: "Buena idea, alguien debió ver algo en los muelles. Te estaré esperando aquí con la clínica lista.", choices: [], end: true },
      n3_no_puedo: { text: "Lo comprendo, esto no es fácil para nadie. Haré lo que pueda con lo que nos queda por aquí.", choices: [], end: true }
    }
  },

  {
    id: "deke",
    name: "Deke Vinson",
    initials: "DV",
    role: "Comerciante de objetos raros",
    color: "#f3a804",
    photo: "Contactos/Deke Vinson.jpeg",
    status: "pending",
    start: "n1",
    nodes: {
      n1: {
        text: "Tengo un lote exclusivo para vos, Contratista. Nadie más te va a ofrecer este nivel de equipamiento militar en kilómetros a la redonda, pero la oferta expira hoy.",
        choices: [
          { label: "A ver qué tienes. Muéstrame el catálogo.", next: "n2_catalogo" },
          { label: "¿De dónde sacaste esa mercancía, Deke?", next: "n2_procedencia" },
          { label: "No necesito nada por ahora, guárdatelo.", next: "n2_rechazo" }
        ]
      },
      n2_catalogo: {
        text: "Blindaje reforzado de grado táctico y visores nocturnos modificados. Todo legal... entre comillas, claro está. ¿Te llevas el combo completo?",
        choices: [
          { label: "Trato hecho, lo compro todo.", next: "n3_comprar" },
          { label: "Solo me interesa el blindaje por ahora.", next: "n3_parcial" }
        ]
      },
      n2_procedencia: {
        text: "Las reglas del gremio dictan que un buen comerciante nunca revela sus fuentes, Contratista. Solo te diré que cayeron en mis manos de forma muy limpia.",
        choices: [
          { label: "De acuerdo, no digas más. Hagamos negocios.", next: "n3_comprar" },
          { label: "Desconfío de tu mercancía. Paso.", next: "n3_rechazar" }
        ]
      },
      n2_rechazo: {
        text: "¿Seguro? Mira que mañana los precios van a subir el doble por la escasez de combustible.",
        choices: [
          { label: "Está bien, muéstrame el catálogo entonces.", next: "n2_catalogo" },
          { label: "No me importa, mantengo mi postura.", next: "n3_rechazar" }
        ]
      },
      n3_comprar: { text: "Así se hacen los negocios en este antro. Trato cerrado — la mercancía estará en tu casillero en una hora.", choices: [], end: true },
      n3_parcial: { text: "Menos ganancia para mí, pero venta al fin y al cabo. Aquí tienes tu equipo.", choices: [], end: true },
      n3_rechazar: { text: "Tu decisión. No voy a rogar, hay fila de operadores esperando estas piezas.", choices: [], end: true }
    }
  },

  {
    id: "randall",
    name: "Randall",
    initials: "RD",
    role: "Comandante de campo militar",
    color: "#8a8a86",
    photo: "Contactos/Randall.jpeg",
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Contratista, tengo una comisión directa de la Alianza Oceánica. Es una operación delicada en zona hostil y el margen de error es nulo. ¿La aceptas o busco a otro?",
        choices: [
          { label: "Cuenta conmigo, Comandante. ¿Cuáles son las órdenes?", next: "n2_ordenes" },
          { label: "Demasiado riesgo institucional para mi gusto. ¿Qué hay para mí?", next: "n2_riesgo" },
          { label: "Estoy fuera de servicio por esta semana, busca a alguien más.", next: "n2_fuera" }
        ]
      },
      n2_ordenes: {
        text: "Infiltración silenciosa en el sector industrial abandonado para neutralizar una célula disidente. No quiero bajas civiles ni testigos innecesarios.",
        choices: [
          { label: "Entendido. Entraré y saldré sin dejar rastro.", next: "n3_sigilo" },
          { label: "Prefiero ir con fuerza bruta si se complica.", next: "n3_fuerza" }
        ]
      },
      n2_riesgo: {
        text: "Habrá una compensación generosa en créditos y pases libres de tránsito para tus rutas. La Alianza sabe recompensar a quienes cumplen.",
        choices: [
          { label: "En ese caso, acepto la misión.", next: "n3_sigilo" },
          { label: "Aun así, la oferta no compensa el peligro. Lo rechazo.", next: "n3_rechazo" }
        ]
      },
      n2_fuera: {
        text: "Entiendo. Las órdenes son órdenes, pero no puedo obligar a un operador cansado. Descansa.",
        choices: [
          { label: "Gracias por comprender, Comandante.", next: "n3_rechazo" }
        ]
      },
      n3_sigilo: { text: "Excelente. Sigue el protocolo táctico al pie de la letra y reporta en cuanto asegures el perímetro.", choices: [], end: true },
      n3_fuerza: { text: "Usa el criterio que consideres necesario, pero recuerda que el objetivo principal es recuperar la posición intacta.", choices: [], end: true },
      n3_rechazo: { text: "Comprensible. No todos están dispuestos a ensuciarse las manos por la estabilidad del sector.", choices: [], end: true }
    }
  },

  {
    id: "rodriguez",
    name: "Rodríguez",
    initials: "RG",
    role: "Excapitán — Contrabandista",
    color: "#f3a804",
    photo: "Contactos/Rodriguez.jpeg",
    status: "pending",
    start: "n1",
    nodes: {
      n1: {
        text: "Contratista, tengo fichada una ruta de contrabando que los controles de las facciones ignoran por completo. Perfecta para mover mercancía pesada sin que nadie pregunte. ¿Te interesa?",
        choices: [
          { label: "Cuéntame más, ¿cuánto cuesta el acceso?", next: "n2_costo" },
          { label: "Las rutas de contrabandistas siempre traen problemas con los jefes.", next: "n2_problemas" },
          { label: "No me meto en contrabando, lo siento.", next: "n2_no" }
        ]
      },
      n2_costo: {
        text: "Un porcentaje pequeño de lo que muevas y tu absoluta discreción. Mis contactos en el muelle miran hacia otro lado cuando pasas.",
        choices: [
          { label: "Trato hecho. Prepararé el primer cargamento para esta noche.", next: "n3_preparar" },
          { label: "Es mucha comisión. Déjame pensarlo.", next: "n3_pensar" }
        ]
      },
      n2_problemas: {
        text: "Los problemas solo llegan si hablas de más con la gente equivocada. Aquí todos ganamos si sabemos mantener la boca cerrada.",
        choices: [
          { label: "Tienes razón. Vamos a hacer negocios.", next: "n3_preparar" },
          { label: "Prefiero mantenerme al margen de esto.", next: "n3_rechazar" }
        ]
      },
      n2_no: {
        text: "Como veas, las oportunidades de ganar buen dinero rápido no tocan dos veces a la puerta.",
        choices: [
          { label: "Bueno, hablemos de números entonces.", next: "n2_costo" },
          { label: "Me mantengo firme. Adiós.", next: "n3_rechazar" }
        ]
      },
      n3_preparar: { text: "Así me gusta, sin rodeos. Nos vemos en el callejón trasero a la medianoche.", choices: [], end: true },
      n3_pensar: { text: "No lo pienses tanto, que las buenas rutas no duran eternamente en este negocio.", choices: [], end: true },
      n3_rechazar: { text: "Como quieras. El que no arriesga se queda pobre en este lodazal.", choices: [], end: true }
    }
  },

  {
    id: "gavin",
    name: "Gavin McConnell",
    initials: "GM",
    role: "Logística y transporte",
    color: "#8a8a86",
    photo: "Contactos/Gavin McConell.jpeg",
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Contratista, tu último envío comercial llegó con un problema imprevisto en la ruta norte debido a los bloqueos militares. Necesito tu decisión urgente: ¿sigo por el camino alternativo o esperamos?",
        choices: [
          { label: "Desvía el cargamento por la ruta alternativa de inmediato.", next: "n2_alternativa" },
          { label: "¿Cuánto se retrasaría si esperamos a que abran el paso principal?", next: "n2_esperar" },
          { label: "Cancela el envío por ahora, no arriesgaremos la carga.", next: "n2_cancelar" }
        ]
      },
      n2_alternativa: {
        text: "Entendido. Implicará un costo extra por el combustible en caminos secundarios y un poco más de riesgo físico, pero llegará más rápido.",
        choices: [
          { label: "Adelante con el desvío. No podemos perder tiempo.", next: "n3_adelante" },
          { label: "Es muy costoso... ¿No hay otra opción?", next: "n3_opcion" }
        ]
      },
      n2_esperar: {
        text: "Al menos unas veinticuatro horas varados en el puesto de control, con el riesgo de que confisquen la mitad de la carga por revisión aleatoria.",
        choices: [
          { label: "Olvídalo, toma la ruta alternativa ahora mismo.", next: "n3_adelante" },
          { label: "Asumiremos el riesgo de esperar la revisión.", next: "n3_esperar_carga" }
        ]
      },
      n2_cancelar: {
        text: "Uf, eso va a generar penalizaciones con el cliente, pero es tu decisión final. ¿Procedo a traer los camiones de regreso?",
        choices: [
          { label: "Sí, tráelos de vuelta a la base.", next: "n3_regresar" },
          { label: "Lo pensé mejor, toma la ruta alternativa.", next: "n3_adelante" }
        ]
      },
      n3_adelante: { text: "Recibido. Pongo los camiones en marcha por el desvío. Te aviso en cuanto crucen el sector peligroso.", choices: [], end: true },
      n3_opcion: { text: "Es la única vía viable sin sobornar a los oficiales de alto rango. Tú decides.", choices: [], end: true },
      n3_esperar_carga: { text: "Arriesgada jugada, pero es tu mercancía. Cruzaré los dedos para que los inspectores estén de buenas.", choices: [], end: true },
      n3_regresar: { text: "Entendido, ordeno la retirada de los vehículos. Prepárate para lidiar con el cliente enojado.", choices: [], end: true }
    }
  },

  {
    id: "lyle",
    name: "Lyle Moreno",
    initials: "LM",
    role: "Consejo humanitario independiente",
    color: "#ff5a5a",
    photo: "Contactos/Lyle Moreno.jpeg",
    status: "pending",
    start: "n1",
    nodes: {
      n1: {
        text: "Contratista, represento a un consejo independiente que intenta mantener la ayuda humanitaria neutral en medio de este fuego cruzado. Necesitamos una escolta armada para un convoy de alimentos. ¿Puedes ayudarnos?",
        choices: [
          { label: "Sí, yo me encargo de escoltar el convoy sin problemas.", next: "n2_escoltar" },
          { label: "Las facciones armadas no respetan la neutralidad, Lyle. Es muy peligroso.", next: "n2_peligro" },
          { label: "No me involucro en misiones humanitarias, lo siento.", next: "n2_no" }
        ]
      },
      n2_escoltar: {
        text: "Te lo agradecemos profundamente. Hay cientos de refugiados civiles dependiendo de que estas raciones lleguen antes del atardecer.",
        choices: [
          { label: "Salgamos de una vez antes de que nos detecten.", next: "n3_salir" },
          { label: "Necesito verificar la ruta exacta antes de movernos.", next: "n3_ruta" }
        ]
      },
      n2_peligro: {
        text: "Lo sabemos perfectamente... por eso recurrimos a profesionales independientes como tú, y no a los ejércitos regulares que solo buscan robar los víveres.",
        choices: [
          { label: "Tienes razón, los civiles no tienen la culpa. Cuentas conmigo.", next: "n3_salir" },
          { label: "Lo siento, sigo pensando que es una trampa mortal.", next: "n3_rechazar" }
        ]
      },
      n2_no: {
        text: "Es una lástima. Cada vez quedan menos personas dispuestas a mirar por los que no tienen un fusil en la mano.",
        choices: [
          { label: "Espera, déjame pensarlo mejor. ¿Cuándo salen?", next: "n2_escoltar" },
          { label: "Es la ley del más fuerte. Adiós.", next: "n3_rechazar" }
        ]
      },
      n3_salir: { text: "Que la fortuna nos acompañe en el camino. Nos vemos en el punto de salida del campamento.", choices: [], end: true },
      n3_ruta: { text: "Aquí tienes el mapa digital con los tramos despejados. Revísalo con calma y me avisas.", choices: [], end: true },
      n3_rechazar: { text: "Comprendo tu postura. Buscaré a alguien más que arriesgue el pellejo por los desamparados.", choices: [], end: true }
    }
  },

  {
    id: "andre",
    name: "Andre",
    initials: "AN",
    role: "Representante político de Tevila",
    color: "#f3a804",
    photo: "Contactos/Andre.jpeg",
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Tevila necesita resultados contundentes esta semana, Contratista. Hay objetivos políticos muy claros en la región y generosas recompensas monetarias para quienes demuestren lealtad. ¿Te alineas con nosotros?",
        choices: [
          { label: "Sí, Tevila puede contar con mis servicios y armas.", next: "n2_servicio" },
          { label: "Prefiero mantenerme neutral en sus disputas políticas.", next: "n2_neutral" },
          { label: "He escuchado que la facción rival paga mucho mejor.", next: "n2_rival" }
        ]
      },
      n2_servicio: {
        text: "Sabia elección. El futuro de esta zona pertenece a quienes apoyan a Tevila desde el principio. Tu primer objetivo está en los distritos del este.",
        choices: [
          { label: "Envíame el dossier del objetivo. Me encargo hoy mismo.", next: "n3_dossier" },
          { label: "Primero hablemos del adelanto en efectivo.", next: "n3_adelanto" }
        ]
      },
      n2_neutral: {
        text: "La neutralidad es un lujo que ya nadie puede permitirse en este conflicto, Contratista. Tarde o temprano tendrás que elegir un bando.",
        choices: [
          { label: "Lo sé, pero por ahora prefiero seguir solo.", next: "n3_solo" },
          { label: "Visto así... tal vez debamos negociar un contrato.", next: "n3_dossier" }
        ]
      },
      n2_rival: {
        text: "Cuidado con los rumores, Contratista. Los tratos con esa gente suelen terminar mal para los mercenarios ambiciosos.",
        choices: [
          { label: "Solo estaba probando tu reacción. Hagamos tratos con Tevila.", next: "n2_servicio" },
          { label: "Me arriesgaré con ellos entonces. Adiós.", next: "n3_solo" }
        ]
      },
      n3_dossier: { text: "Excelente. Tevila no olvida a quienes cumplen con la causa.", choices: [], end: true },
      n3_adelanto: { text: "Los fondos ya fueron transferidos a tu cuenta encriptada. Esperamos resultados impecables.", choices: [], end: true },
      n3_solo: { text: "Cuidado con quedar atrapado en el fuego cruzado, entonces. Buena suerte.", choices: [], end: true }
    }
  },

  {
    id: "kayla",
    name: "Kayla",
    initials: "KY",
    role: "Representante de facción Colom",
    color: "#ff5a5a",
    photo: "Contactos/Kayla.jpeg",
    status: "online",
    start: "n1",
    nodes: {
      n1: {
        text: "Colom también tiene objetivos prioritarios esta semana, Contratista, y para ser sinceros... pagamos bastante mejor que esos tacaños de Tevila. ¿Trabajas para nuestra facción?",
        choices: [
          { label: "El dinero habla. Acepto trabajar para Colom.", next: "n2_aceptar_colom" },
          { label: "Ya tengo propuestas de otros lados. ¿Qué los hace diferentes?", next: "n2_diferentes" },
          { label: "No me meto en disputas de facciones.", next: "n2_rechazo" }
        ]
      },
      n2_aceptar_colom: {
        text: "Así me gusta, alguien que entiende de negocios rápido. Tenemos una plaza comercial disputada que limpiar de agentes enemigos.",
        choices: [
          { label: "Dime la ubicación y me encargo de despejarla.", next: "n3_plaza" },
          { label: "Necesitaré apoyo de artillería pesada para esa zona.", next: "n3_artilleria" }
        ]
      },
      n2_diferentes: {
        text: "Nosotros no hacemos promesas vacías sobre el futuro; pagamos al contado y cubrimos tus gastos médicos si algo sale mal en la operación.",
        choices: [
          { label: "Eso suena convincente. Me uno a ustedes.", next: "n3_plaza" },
          { label: "Aun así, prefiero evaluar mis opciones con calma.", next: "n3_evaluar" }
        ]
      },
      n2_rechazo: {
        text: "Una pena. Te pierdes la oportunidad de formar parte del bando ganador de esta guerra.",
        choices: [
          { label: "Bueno, hablemos de esa plaza comercial.", next: "n2_aceptar_colom" },
          { label: "El tiempo dirá quién gana. Adiós.", next: "n3_evaluar" }
        ]
      },
      n3_plaza: { text: "Perfecto. La plaza debe quedar bajo nuestro control antes del amanecer. No nos falles.", choices: [], end: true },
      n3_artilleria: { text: "Te mandaremos una unidad de apoyo blindado para cubrir el flanco principal. Sácanos ventaja.", choices: [], end: true },
      n3_evaluar: { text: "Evalúa rápido, porque las vacantes de confianza se llenan volando en este frente. Cuídate.", choices: [], end: true }
    }
  }
];

/* ================== ESTADO ================== */
const progress = {};
const historyByContact = {};
contacts.forEach(c => {
  progress[c.id] = c.start;
  historyByContact[c.id] = [];
});

/* ================== HELPERS ================== */
// Renderiza la foto en miniatura si existe, o las iniciales si no
function avatarMessageHTML(contact){
  if(contact.photo){
    return `<div class="avatar avatar-sm" style="background-image:url('${contact.photo}')"></div>`;
  }
  return `<div class="avatar avatar-sm" style="background:${contact.color}">${contact.initials}</div>`;
}

function avatarHeaderHTML(contact){
  if(contact.photo){
    return `div class="avatar" style="background-image:url('${contact.photo}')"></div>`;
  }
  return `<div class="avatar" style="background:${contact.color}">${contact.initials}</div>`;
}

/* ================== CUADRÍCULA DE CONTACTOS ================== */
function renderGrid(){
  const grid = document.getElementById('contactsGrid');
  grid.innerHTML = '';
  contacts.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contact-card';
    card.onclick = () => openChat(c.id);
    card.innerHTML = `
      <div class="contact-avatar-area">
        ${c.photo
          ? `<img src="${c.photo}" alt="${c.name}">`
          : `<div class="initials" style="color:${c.color}">${c.initials}</div>`}
        <div class="status-tag ${c.status === 'pending' ? 'pending' : ''}">${c.status === 'online' ? 'En línea' : 'Pendiente'}</div>
      </div>
      <div class="contact-body">
        <div class="contact-role">${c.role}</div>
        <div class="contact-name">${c.name}</div>
        <div class="contact-footer">
          <button class="talk-btn">Hablar</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  document.getElementById('contactCount').textContent = contacts.length + ' contactos cargados';
}

/* ==================================================================
   VENTANAS DE CHAT — una por contacto, pantalla completa, aisladas
   ================================================================== */
function buildChatWindows(){
  const container = document.getElementById('chat-container');
  container.innerHTML = '';

  contacts.forEach(c => {
    const win = document.createElement('div');
    win.className = 'chat-window';
    win.id = 'chat-window-' + c.id;

    // Estilo para el avatar de la cabecera del chat
    const headerAvatarStyle = c.photo ? `background-image:url('${c.photo}')` : `background:${c.color}`;
    const headerAvatarInner = c.photo ? '' : c.initials;

    win.innerHTML = `
      <div class="chat-header">
        <button class="back-btn" onclick="closeChat()">← Volver</button>
        <div class="avatar" style="${headerAvatarStyle}">${headerAvatarInner}</div>
        <div class="name">${c.name}</div>
        <div style="flex:1"></div>
        <div class="tag ${c.status === 'pending' ? 'pending' : ''}">${c.status === 'online' ? 'En línea' : 'Pendiente'}</div>
      </div>
      <div class="messages" id="messages-${c.id}"></div>
      <div class="choices" id="choices-${c.id}"></div>
    `;
    container.appendChild(win);
  });
}

function openChat(contactId){
  const contact = contacts.find(c => c.id === contactId);
  document.querySelectorAll('.chat-window').forEach(w => w.classList.remove('active'));
  document.getElementById('chat-window-' + contactId).classList.add('active');

  if(historyByContact[contactId].length === 0){
    const node = contact.nodes[progress[contactId]];
    appendMessage(contact, 'them', node.text);
    renderChoices(contact);
  }
}

function closeChat(){
  document.querySelectorAll('.chat-window').forEach(w => w.classList.remove('active'));
}

/* ================== MENSAJES ================== */
function messageRowHTML(contact, who, text){
  if(who === 'you'){
    return `<div class="msg-row you"><div class="bubble">${text}</div></div>`;
  }
  
  // Genera el HTML del avatar miniatura en el mensaje usando la foto del contacto
  const msgAvatar = contact.photo 
    ? `<div class="avatar avatar-sm" style="background-image:url('${contact.photo}')"></div>` 
    : `<div class="avatar avatar-sm" style="background:${contact.color}">${contact.initials}</div>`;

  return `
    <div class="msg-row">
      ${msgAvatar}
      <div>
        <div class="sender-tag">${contact.name.toUpperCase()}</div>
        <div class="bubble">${text}</div>
      </div>
    </div>`;
}

function appendMessage(contact, who, text){
  historyByContact[contact.id].push({ who, text });
  const box = document.getElementById('messages-' + contact.id);
  box.insertAdjacentHTML('beforeend', messageRowHTML(contact, who, text));
  box.scrollTop = box.scrollHeight;
}

/* ================== OPCIONES ================== */
function renderChoices(contact){
  const node = contact.nodes[progress[contact.id]];
  const box = document.getElementById('choices-' + contact.id);

  if(node.end || !node.choices || node.choices.length === 0){
    box.innerHTML = `<div class="end-note">— fin de la conversación por ahora —</div>`;
    return;
  }

  box.innerHTML = '';
  node.choices.forEach((choice, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="key">${i+1}</span><span>${choice.label}</span>`;
    btn.onclick = () => pickChoice(contact, choice);
    box.appendChild(btn);
  });
}

function pickChoice(contact, choice){
  appendMessage(contact, 'you', choice.label);
  progress[contact.id] = choice.next;
  const nextNode = contact.nodes[choice.next];

  document.getElementById('choices-' + contact.id).innerHTML = `<div class="end-note">escribiendo…</div>`;

  setTimeout(() => {
    appendMessage(contact, 'them', nextNode.text);
    renderChoices(contact);
  }, 400);
}

/* ================== TERMINAL DE ARRANQUE ================== */
const bootLines = [
  "> iniciando protocolo de enlace...",
  "> verificando credenciales de operador... [ok]",
  "> sincronizando contactos de la red...   [ok]",
  "> estableciendo canal cifrado...          [ok]",
  "> conexión estable. bienvenido de vuelta."
];

function runBoot(){
  const el = document.getElementById('boot-lines');
  let lineIndex = 0;
  let charIndex = 0;

  function typeNext(){
    if(lineIndex >= bootLines.length){
      setTimeout(() => {
        document.getElementById('boot').classList.add('hide');
        document.getElementById('main-view').classList.add('show');
      }, 500);
      return;
    }
    const line = bootLines[lineIndex];
    if(charIndex <= line.length){
      const done = bootLines.slice(0, lineIndex).join('\n');
      el.textContent = (done ? done + '\n' : '') + line.slice(0, charIndex);
      charIndex++;
      setTimeout(typeNext, 18);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNext, 220);
    }
  }
  typeNext();
}

/* ================== INICIO ================== */
renderGrid();
buildChatWindows();
runBoot();
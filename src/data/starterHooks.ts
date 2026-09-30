import type { SupportedLanguage } from '../i18n/ui';

export interface PostItem {
  id: string;
  day: number;
  hook: string;
  rawFileName: string;
  caption: string;
  hashtags: string;
  status: 'idea' | 'filmed' | 'posted';
  updatedAt: number;
}

export const starterHooksByLang: Record<SupportedLanguage, Array<Omit<PostItem, 'id' | 'day' | 'updatedAt'>>> = {
  en: [
    {
      hook: "Stop doing this if you want to grow in 2026...",
      rawFileName: "VID_Day01_StopDoingThis.mp4",
      caption: "Most creators make this fatal mistake in their first 3 seconds. Here is why retention drops and how you can flip the script in 2 minutes.\n\nSave this for your next recording session!\n\n1. Cut the introduction\n2. Start in the middle of the action\n3. Show the end result first",
      hashtags: "#contentcreator #videotips #growthhacks #socialmediamarketing #creatorsecrets",
      status: "posted"
    },
    {
      hook: "The $0 tool I wish I discovered 2 years ago.",
      rawFileName: "VID_Day02_SecretToolReview.mp4",
      caption: "You don't need a $2,000 setup to produce viral content. This single workflow shortcut saved me 15 hours every single week.\n\nDrop a comment if you want the breakdown!",
      hashtags: "#productivitytools #workflowhacks #videomarketing #creatorlife #techtools",
      status: "filmed"
    },
    {
      hook: "3 harsh truths every new video creator needs to hear.",
      rawFileName: "VID_Day03_HarshTruths.mp4",
      caption: "Nobody cares about your lighting if your story isn't clear. Here are three brutal lessons I learned after publishing 300+ videos.",
      hashtags: "#creatorjourney #videotips #mindsetshift #contentcreation #buildinpublic",
      status: "filmed"
    },
    {
      hook: "Why 99% of people fail at short-form video in 30 days.",
      rawFileName: "VID_Day04_WhyPeopleFail.mp4",
      caption: "Consistency without strategy is just noise. Watch till the end to see the 30-day queue framework that changes everything.",
      hashtags: "#shortformcontent #tiktoktips #reelstips #youtubeshorts #consistency",
      status: "idea"
    },
    {
      hook: "Steal my exact 5-step script template for 60-second reels.",
      rawFileName: "VID_Day05_ScriptTemplate.mp4",
      caption: "Hook -> Pattern Interrupt -> Agitation -> Value Delivery -> Fast CTA. That's the exact blueprint responsible for 500k+ views.",
      hashtags: "#copywriting #scripting #videocreator #reelsviral #storytelling",
      status: "idea"
    },
    {
      hook: "The psychology trick behind hooks that keep people watching.",
      rawFileName: "VID_Day06_HookPsychology.mp4",
      caption: "It's called open loops. When you promise an answer without giving it away immediately, dopamine kicks in. Here's how to apply it ethically.",
      hashtags: "#hookformulas #neurocopywriting #engagementtips #creatorstrategy",
      status: "idea"
    },
    {
      hook: "I tested posting at 7 AM vs 7 PM for 14 days. Here is what happened.",
      rawFileName: "VID_Day07_PostingTimeExperiment.mov",
      caption: "The algorithm data surprised even me. Timing matters, but audience intent matters 10x more. Here are the raw analytics.",
      hashtags: "#socialmediaanalytics #algorithmtest #creatorexperiment #datainsights",
      status: "idea"
    },
    {
      hook: "How to film 10 videos in under 2 hours without burning out.",
      rawFileName: "VID_Day08_BatchFilmingMethod.mp4",
      caption: "Batch filming is a superpower when you have a structured queue. Step 1: Lock your hooks. Step 2: Set your angles. Step 3: Record continuously.",
      hashtags: "#batchfilming #creatorefficiency #timemanagement #filmingtips",
      status: "idea"
    },
    {
      hook: "Never use this audio if your goal is audience retention.",
      rawFileName: "VID_Day09_AudioRetentionMistake.mp4",
      caption: "Background music that drowns out your vocal cadence will kill retention in 1.5 seconds. Use this free EQ balance trick.",
      hashtags: "#audioengineering #videoproduction #shortscreator #mobilefilming",
      status: "idea"
    },
    {
      hook: "The difference between a 1,000 view video and a 100,000 view video.",
      rawFileName: "VID_Day10_ComparisonStudy.mp4",
      caption: "It's rarely the camera quality. It's almost always the curiosity gap in the title and the pacing of the B-roll.",
      hashtags: "#viralvideoformula #videotips #contentbreakdown #shortsstrategy",
      status: "idea"
    },
    {
      hook: "My phone camera settings that look like a $3,000 cinema rig.",
      rawFileName: "VID_Day11_MobileSettings.mp4",
      caption: "Turn off auto HDR, lock exposure, shoot in 4k 24fps or 60fps depending on motion, and wipe your lens. Details inside!",
      hashtags: "#smartphonefilming #iphonevideography #filmmakingtips #mobilecreator",
      status: "idea"
    },
    {
      hook: "If I lost all my followers today, here is day 1 to 30.",
      rawFileName: "VID_Day12_RebuildStrategy.mp4",
      caption: "No paid ads. No famous collaborations. Just high-retention hooks and structured daily publishing. Bookmark this roadmap.",
      hashtags: "#growthroadmap #startingover #creatorstrategy #personalbrand",
      status: "idea"
    },
    {
      hook: "3 viral caption hooks that guarantee comments.",
      rawFileName: "VID_Day13_CaptionHooks.mp4",
      caption: "Comments send the strongest signal to ranking algorithms. Ask polarizing questions or deliberate binary choices.",
      hashtags: "#socialmediagrowth #algorithmhacks #captiontips #engagement",
      status: "idea"
    },
    {
      hook: "The exact microphone I use for crisp podcast-level voiceovers.",
      rawFileName: "VID_Day14_MicRecommendation.mp4",
      caption: "Great audio makes people forgive average video. Poor audio makes people swipe away instantly. Here is the budget champion.",
      hashtags: "#creatorgear #audiotips #micreview #mobilefilmmaker",
      status: "idea"
    },
    {
      hook: "Stop putting your CTA at the very end of your videos.",
      rawFileName: "VID_Day15_CTAMistake.mp4",
      caption: "Most viewers never reach the final 2 seconds. Seamlessly weave your call-to-action into the climax of the story instead.",
      hashtags: "#videotips #contentmarketing #audiencegrowth #conversions",
      status: "idea"
    },
    {
      hook: "How I organize my raw video files so editing takes 10 minutes.",
      rawFileName: "VID_Day16_FileOrganization.mp4",
      caption: "Name your files by Day Number and Hook keyword. When your assets match your queue, editing is lightning fast.",
      hashtags: "#editingworkflow #postproduction #premierepro #capcut #creatorlife",
      status: "idea"
    },
    {
      hook: "5 body language secrets that command attention on camera.",
      rawFileName: "VID_Day17_CameraPresence.mp4",
      caption: "Look directly into the camera lens, not your screen reflection. Use purposeful hand gestures and maintain energy tempo.",
      hashtags: "#camerapresence #publicspeaking #confidence #creatorgrowth",
      status: "idea"
    },
    {
      hook: "The 30-day content batching challenge: are you in?",
      rawFileName: "VID_Day18_BatchChallenge.mp4",
      caption: "Commit to planning 30 hooks in advance. When you separate planning from filming, creative block disappears forever.",
      hashtags: "#30daychallenge #contentpipeline #creativehabits #productivity",
      status: "idea"
    },
    {
      hook: "This editing trick makes 60 seconds feel like 15 seconds.",
      rawFileName: "VID_Day19_PacingMagic.mp4",
      caption: "Speed ramping and subtle J-cuts eliminate dead air and keep the viewer's brain engaged from start to finish.",
      hashtags: "#videoediting #capcuttips #editinghacks #shortformvideo",
      status: "idea"
    },
    {
      hook: "3 reasons your hashtags aren't bringing you viewers.",
      rawFileName: "VID_Day20_HashtagMyths.mp4",
      caption: "Hashtags categorize content for semantic search, not miraculous viral blasts. Use 3-5 hyper-targeted niche tags.",
      hashtags: "#hashtagstrategy #seo #discoverability #socialmediatips",
      status: "idea"
    },
    {
      hook: "How to turn 1 long thought into 5 punchy shorts.",
      rawFileName: "VID_Day21_ContentRepurposing.mp4",
      caption: "Extract the core thesis, the contrarian view, the practical how-to, the case study, and the common pitfall. Boom: 5 posts.",
      hashtags: "#repurposing #contentstrategy #creatorpipeline #smartcontent",
      status: "idea"
    },
    {
      hook: "The lighting setup I use in a small, dark bedroom.",
      rawFileName: "VID_Day22_BudgetLighting.mp4",
      caption: "One key light at 45 degrees and a gentle ambient fill. You don't need a huge studio space to get cinematic depth.",
      hashtags: "#lightingsetup #homestudio #cinematography #contentcreator",
      status: "idea"
    },
    {
      hook: "Why you should never delete low-performing videos.",
      rawFileName: "VID_Day23_NeverDeletePosts.mp4",
      caption: "Delayed gratification is real in modern recommendation engines. Videos can catch the algorithm weeks or months later.",
      hashtags: "#algorithmsecrets #contentcreator #tiktokadvice #creatoreducation",
      status: "idea"
    },
    {
      hook: "How top creators test 3 different hooks on the same video.",
      rawFileName: "VID_Day24_ABTestingHooks.mp4",
      caption: "Record 3 distinct 3-second openings with the exact same body content. Test what your audience responds to best.",
      hashtags: "#abtesting #creatoranalytics #videohooks #growthtips",
      status: "idea"
    },
    {
      hook: "The secret to storytelling in under 45 seconds.",
      rawFileName: "VID_Day25_MicroStorytelling.mp4",
      caption: "Status quo -> inciting incident -> unexpected obstacle -> resolution. Master micro-arcs and your retention will skyrocket.",
      hashtags: "#storytelling #shortformcontent #narrative #copywritingtips",
      status: "idea"
    },
    {
      hook: "3 free sound effect libraries every video editor must bookmark.",
      rawFileName: "VID_Day26_FreeSFX.mp4",
      caption: "Whooshes, pops, risers, and subtle vinyl clicks transform flat cuts into polished, broadcast-quality shorts.",
      hashtags: "#sounddesign #videoediting #freetools #creatorsources",
      status: "idea"
    },
    {
      hook: "How to stay motivated when views are low.",
      rawFileName: "VID_Day27_CreatorMindset.mp4",
      caption: "Treat every video as a rep in the gym, not a lottery ticket. Consistency builds skill, and skill yields inevitable reach.",
      hashtags: "#creatormindset #resilience #motivation #contentstrategy",
      status: "idea"
    },
    {
      hook: "The 3-second pattern interrupt that doubles watch time.",
      rawFileName: "VID_Day28_PatternInterrupt.mp4",
      caption: "Change camera angle, sound texture, or zoom focal length at the 3-second mark to reset subconscious viewer attention.",
      hashtags: "#patterninterrupt #neuroscience #videoretention #creators",
      status: "idea"
    },
    {
      hook: "My end-of-month content audit: what worked and what died.",
      rawFileName: "VID_Day29_MonthlyAudit.mp4",
      caption: "Reviewing metrics with honesty. Double down on the 20% that generated 80% of retention and ditch the rest.",
      hashtags: "#contentaudit #analytics #creatorbusiness #reflection",
      status: "idea"
    },
    {
      hook: "30 days completed! Here is how our queue performed.",
      rawFileName: "VID_Day30_QueueRecap.mp4",
      caption: "Having all 30 days mapped out in PostQueue eliminated all daily posting anxiety. Ready for next month?",
      hashtags: "#30dayschallenge #postqueue #contentplanner #creatorwin #consistency",
      status: "idea"
    }
  ],
  es: [
    {
      hook: "Deja de hacer esto si quieres crecer en 2026...",
      rawFileName: "VID_Dia01_ErrorFatal.mp4",
      caption: "La mayoría comete este error en los primeros 3 segundos. Así puedes duplicar tu retención en 2 minutos.\n\n¡Guarda este video!",
      hashtags: "#creadoresdecontenido #trucosvideo #redessociales #crecimientodigital",
      status: "posted"
    },
    {
      hook: "La herramienta gratuita que debí usar hace 2 años.",
      rawFileName: "VID_Dia02_HerramientaSecreta.mp4",
      caption: "No necesitas un equipo carísimo para hacer videos virales. Este atajo me ahorra 15 horas a la semana.",
      hashtags: "#productividad #herramientasgratis #creadores #marketingdigital",
      status: "filmed"
    },
    {
      hook: "3 verdades incómodas sobre crear contenido en video.",
      rawFileName: "VID_Dia03_VerdadesIncomodas.mp4",
      caption: "A nadie le importa tu cámara si tu mensaje no engancha. 3 lecciones reales tras publicar más de 300 videos.",
      hashtags: "#mentalidadcreativa #consejosvideo #emprendimiento #creators",
      status: "filmed"
    },
    {
      hook: "Por qué el 99% abandona los videos cortos en 30 días.",
      rawFileName: "VID_Dia04_PorQueAbandonan.mp4",
      caption: "Publicar sin estrategia es solo ruido. Conoce la metodología de pipeline de 30 días.",
      hashtags: "#tiktoktips #reelstips #youtubeshorts #constancia #estrategiadecontenido",
      status: "idea"
    },
    {
      hook: "Copia mi plantilla exacta de 5 pasos para reels de 60s.",
      rawFileName: "VID_Dia05_PlantillaGuion.mp4",
      caption: "Gancho -> Interrupción de patrón -> Problema -> Solución -> Llamada a la acción. Guarda esta estructura.",
      hashtags: "#guionvideo #storytelling #reelsvirales #creaciondecontenido",
      status: "idea"
    },
    {
      hook: "El truco psicológico detrás de los ganchos virales.",
      rawFileName: "VID_Dia06_PsicologiaGancho.mp4",
      caption: "Se llama bucle abierto. Promete una respuesta sin revelarla al instante para mantener la atención al 100%.",
      hashtags: "#ganchosvirales #neuromarketing #retenciondeaudiencia #tipscreadores",
      status: "idea"
    },
    {
      hook: "Publiqué a las 7 AM vs 7 PM por 14 días. Resultados:",
      rawFileName: "VID_Dia07_ExperimentoHorarios.mov",
      caption: "Los datos del algoritmo me sorprendieron. El horario importa, pero la intención de la audiencia importa 10 veces más.",
      hashtags: "#algoritmo #analiticarrss #experimento #creadores",
      status: "idea"
    },
    {
      hook: "Cómo grabar 10 videos en 2 horas sin agotarte.",
      rawFileName: "VID_Dia08_GrabacionPorLotes.mp4",
      caption: "La grabación por lotes es magia si tienes tus ganchos listos en PostQueue. Te muestro mi sistema.",
      hashtags: "#grabacionporlotes #productividad #organizacion #videoedicion",
      status: "idea"
    },
    {
      hook: "Nunca uses este tipo de audio si buscas retención.",
      rawFileName: "VID_Dia09_ErrorAudio.mp4",
      caption: "Una música estridente que opaque tu voz destruye la retención en 1.5 segundos. Aplica este truco de balance.",
      hashtags: "#audiovideo #ediciondevideo #trucosmovil #creadorescontenido",
      status: "idea"
    },
    {
      hook: "Diferencia entre un video de 1.000 vistas y uno de 100.000.",
      rawFileName: "VID_Dia10_EstudioComparativo.mp4",
      caption: "Casi nunca es la calidad de la cámara, sino la curiosidad generada en los primeros 3 segundos.",
      hashtags: "#videosvirales #analisiscontenido #estrategiasocialmedia",
      status: "idea"
    },
    {
      hook: "La configuración de celular que parece cámara de cine.",
      rawFileName: "VID_Dia11_AjustesCamara.mp4",
      caption: "Bloquea la exposición, graba en 4K 24fps y limpia tu lente antes de cada toma. ¡Comenta 'video' para más!",
      hashtags: "#grabacionconmovil #fotografiavideo #tipsiphone #creadores",
      status: "idea"
    },
    {
      hook: "Si perdiera todos mis seguidores, este sería mi plan de 30 días.",
      rawFileName: "VID_Dia12_PlanReinicio.mp4",
      caption: "Sin anuncios pagados ni colaboraciones famosas. Solo ganchos con alta retención y un calendario estricto.",
      hashtags: "#marcapersonal #crecimientodigital #estrategiacontenido #socialmedia",
      status: "idea"
    },
    {
      hook: "3 ganchos para la descripción que garantizan comentarios.",
      rawFileName: "VID_Dia13_GanchosTexto.mp4",
      caption: "Los comentarios son la señal más fuerte para el algoritmo. Haz preguntas que dividan opiniones con respeto.",
      hashtags: "#interaccion #algoritmotiktok #engagement #tipsredessociales",
      status: "idea"
    },
    {
      hook: "El micrófono económico con calidad de podcast que uso.",
      rawFileName: "VID_Dia14_MicrofonoEconomico.mp4",
      caption: "Un buen audio hace que perdonen una mala imagen; un mal audio hace que salgan del video en un segundo.",
      hashtags: "#microfonovideo #equipocreador #gadgetscreativos",
      status: "idea"
    },
    {
      hook: "Deja de poner tu llamado a la acción al final del video.",
      rawFileName: "VID_Dia15_ErrorLlamadaAccion.mp4",
      caption: "La mayoría no llega a los últimos 2 segundos. Integra tu llamado en el momento de mayor valor de la historia.",
      hashtags: "#marketingdigital #estrategiavideo #retencion",
      status: "idea"
    },
    {
      hook: "Cómo organizo mis archivos para editar en 10 minutos.",
      rawFileName: "VID_Dia16_OrganizarArchivos.mp4",
      caption: "Nombra cada archivo con el Día y la palabra clave del Gancho. Editar se vuelve pan comido.",
      hashtags: "#flujodetrabajo #edicionrapida #capcut #postproduccion",
      status: "idea"
    },
    {
      hook: "5 secretos de lenguaje corporal para hablar a la cámara.",
      rawFileName: "VID_Dia17_LenguajeCorporal.mp4",
      caption: "Mira directo al lente, no a tu pantalla. Usa gestos abiertos y modula la energía de tu voz.",
      hashtags: "#oratoria #comunicacion #hablaralacamara #confianza",
      status: "idea"
    },
    {
      hook: "Reto de 30 días de contenido por lotes: ¿te unes?",
      rawFileName: "VID_Dia18_Reto30Dias.mp4",
      caption: "Separa la planificación de la grabación. Cuando tienes tu cola lista, el bloqueo creativo desaparece.",
      hashtags: "#reto30dias #postqueue #habitoscreativos #productividad",
      status: "idea"
    },
    {
      hook: "Este truco de edición hace que 60 segundos parezcan 15.",
      rawFileName: "VID_Dia19_RitmoEdicion.mp4",
      caption: "Los cortes en J y cambios de escala cada 4 segundos mantienen el cerebro del espectador despierto.",
      hashtags: "#trucosedicion #capcutpc #premiere #videoedicion",
      status: "idea"
    },
    {
      hook: "3 razones por las que tus hashtags no te traen visitas.",
      rawFileName: "VID_Dia20_MitosHashtags.mp4",
      caption: "Los hashtags son para clasificar temáticas en el buscador, no milagros de viralidad. Usa de 3 a 5 específicos.",
      hashtags: "#seotiktok #hashtags #busquedasocial #estrategiarrss",
      status: "idea"
    },
    {
      hook: "Cómo transformar 1 idea larga en 5 videos cortos.",
      rawFileName: "VID_Dia21_MultiplicarContenido.mp4",
      caption: "Saca la tesis principal, el mito común, el paso a paso, el caso práctico y la advertencia. 5 videos listos.",
      hashtags: "#reutilizarcontenido #estrategiacontenido #productividadcreativa",
      status: "idea"
    },
    {
      hook: "Mi iluminación de estudio en una habitación pequeña y oscura.",
      rawFileName: "VID_Dia22_IluminacionCasera.mp4",
      caption: "Una luz principal a 45 grados y un fondo contrastado bastan para dar aspecto cinematográfico.",
      hashtags: "#iluminacion #estudioencasa #trucosgrabacion #creador",
      status: "idea"
    },
    {
      hook: "Por qué nunca debes borrar videos con pocas vistas.",
      rawFileName: "VID_Dia23_NoBorresVideos.mp4",
      caption: "El algoritmo moderno puede recomendar un video semanas o meses después. No reinicies tu historial.",
      hashtags: "#algoritmoinstagram #creadorcontenido #leccionescreativas",
      status: "idea"
    },
    {
      hook: "Cómo los mejores creadores prueban 3 ganchos en 1 video.",
      rawFileName: "VID_Dia24_TesteoGanchos.mp4",
      caption: "Graba 3 intros distintas con el mismo cuerpo de video para descubrir qué engancha a tu público.",
      hashtags: "#testab #optimizacion #ganchosvirales #creators",
      status: "idea"
    },
    {
      hook: "El secreto del micro-storytelling en menos de 45 segundos.",
      rawFileName: "VID_Dia25_MicroStorytelling.mp4",
      caption: "Situación inicial -> Suceso inesperado -> Giro dramático -> Aprendizaje. Estructura imbatible.",
      hashtags: "#storytelling #narrativadigital #guionesvideo",
      status: "idea"
    },
    {
      hook: "3 librerías de efectos de sonido gratuitos que debes guardar.",
      rawFileName: "VID_Dia26_EfectosSonido.mp4",
      caption: "Transiciones sonoras, swooshes y pops convierten una edición amateur en contenido profesional.",
      hashtags: "#disenosonoro #efectosdesonido #edicionvideo #recursosgratis",
      status: "idea"
    },
    {
      hook: "Cómo mantener la motivación cuando las vistas son bajas.",
      rawFileName: "VID_Dia27_MotivacionCreador.mp4",
      caption: "Cada video es un entrenamiento, no un boleto de lotería. La habilidad constante trae resultados inevitables.",
      hashtags: "#mentalidad #resiliencia #creadoresdigitales #motivacion",
      status: "idea"
    },
    {
      hook: "La interrupción de patrón de 3 segundos que duplica la retención.",
      rawFileName: "VID_Dia28_InterrupcionPatron.mp4",
      caption: "Cambia el ángulo o mete un zoom sutil al segundo 3 para reajustar la atención del usuario.",
      hashtags: "#retencion #psicologiaaudiencia #trucosvideo",
      status: "idea"
    },
    {
      hook: "Mi auditoría mensual de contenido: qué funcionó y qué descarté.",
      rawFileName: "VID_Dia29_AuditoriaMensual.mp4",
      caption: "Revisando métricas reales sin sesgo. Duplica la apuesta en el 20% que generó el 80% de impacto.",
      hashtags: "#metricas #auditoriacontenido #aprendizajes",
      status: "idea"
    },
    {
      hook: "¡30 días completados! Así rindió nuestra cola de publicación.",
      rawFileName: "VID_Dia30_ResumenFinal.mp4",
      caption: "Tener los 30 días organizados en PostQueue eliminó la ansiedad diaria de '¿qué publico hoy?'. ¿Listo para el próximo mes?",
      hashtags: "#postqueue #reto30dias #planificadorcontenido #exito",
      status: "idea"
    }
  ],
  pt: [
    {
      hook: "Pare de fazer isso se você quer crescer em 2026...",
      rawFileName: "VID_Dia01_ErroFatal.mp4",
      caption: "A maioria dos criadores erra nos primeiros 3 segundos. Veja como virar o jogo em 2 minutos.\n\nSalve para quando for gravar!",
      hashtags: "#criadoresdeconteudo #dicasdevideo #redessociais #crescimentodigital",
      status: "posted"
    },
    {
      hook: "A ferramenta 100% gratuita que eu devia ter usado há 2 anos.",
      rawFileName: "VID_Dia02_FerramentaSecreta.mp4",
      caption: "Você não precisa de um estúdio caro para criar vídeos com alta retenção. Esse método me poupa 15 horas semanais.",
      hashtags: "#produtividade #ferramentasgratis #criador #marketingdigital",
      status: "filmed"
    },
    {
      hook: "3 verdades duras que todo criador de vídeo precisa ouvir.",
      rawFileName: "VID_Dia03_VerdadesDuras.mp4",
      caption: "Ninguém se importa com a sua iluminação se a sua história não prender. 3 lições reais após mais de 300 vídeos.",
      hashtags: "#mentalidade #criacaodeconteudo #dicasvideo #reelsviral",
      status: "filmed"
    },
    {
      hook: "Por que 99% das pessoas desistem dos vídeos curtos em 30 dias.",
      rawFileName: "VID_Dia04_PorQueDesistem.mp4",
      caption: "Consistência sem planejamento é apenas cansaço. Conheça a metodologia de pipeline de 30 dias.",
      hashtags: "#tiktokdicas #reelsdicas #youtubeshorts #planejamentodeconteudo",
      status: "idea"
    },
    {
      hook: "Copie meu roteiro de 5 passos para vídeos de 60 segundos.",
      rawFileName: "VID_Dia05_Roteiro5Passos.mp4",
      caption: "Gancho -> Quebra de Padrão -> Problema -> Entrega de Valor -> Chamada Rápida. Guarde essa fórmula.",
      hashtags: "#roteiro #storytelling #reelsbrasil #conteudodigital",
      status: "idea"
    },
    {
      hook: "O gatilho psicológico por trás dos ganchos que prendem.",
      rawFileName: "VID_Dia06_GatilhoGancho.mp4",
      caption: "Chama-se 'loop aberto'. Prometa uma resposta sem entregar imediatamente para ativar a curiosidade máxima.",
      hashtags: "#ganchosvirais #retencaodeaudiencia #neuromarketing #dicascriador",
      status: "idea"
    },
    {
      hook: "Postei às 7h vs 19h por 14 dias seguidos. Veja os dados:",
      rawFileName: "VID_Dia07_TesteHorarios.mov",
      caption: "O algoritmo surpreendeu. O horário importa, mas a intenção do público é 10x mais relevante.",
      hashtags: "#algoritmo #metricasredessociais #testedeconteudo #dados",
      status: "idea"
    },
    {
      hook: "Como gravar 10 vídeos em 2 horas sem estresse.",
      rawFileName: "VID_Dia08_GravacaoEmLote.mp4",
      caption: "Gravação em lote com ganchos pré-definidos no PostQueue elimina qualquer bloqueio criativo.",
      hashtags: "#gravacaoemlote #produtividadecriativa #organizacao #videomaker",
      status: "idea"
    },
    {
      hook: "Nunca use esse tipo de música se o seu foco é retenção.",
      rawFileName: "VID_Dia09_ErroMusica.mp4",
      caption: "Música alta cobrindo sua fala faz o espectador pular o vídeo em 1 segundo. Use este ajuste de volume.",
      hashtags: "#audiodovideo #edicaodevideo #dicascelular #reelsbr",
      status: "idea"
    },
    {
      hook: "A diferença entre um vídeo de 1.000 e outro de 100.000 visualizações.",
      rawFileName: "VID_Dia10_EstudoDeCaso.mp4",
      caption: "Quase nunca é o modelo da câmera; é a curiosidade gerada nos primeiros segundos de vídeo.",
      hashtags: "#viralizar #estrategiadereels #conteudodevalor",
      status: "idea"
    },
    {
      hook: "Configurações de celular que deixam o vídeo parecendo cinema.",
      rawFileName: "VID_Dia11_AjustesCamera.mp4",
      caption: "Trave a exposição, filme em 4K 24fps e limpe a lente da câmera antes de gravar.",
      hashtags: "#gravandocomcelular #mobilefilmmaking #dicasiphone #criadores",
      status: "idea"
    },
    {
      hook: "Se eu perdesse todos os meus seguidores hoje, este seria meu plano.",
      rawFileName: "VID_Dia12_Recomeco30Dias.mp4",
      caption: "Sem anúncios e sem parcerias. Apenas ganchos fortes e calendário rigoroso de 30 dias.",
      hashtags: "#marcapessoal #crescertiktok #estrategiadigital #conteudoviral",
      status: "idea"
    },
    {
      hook: "3 ganchos de legenda que multiplicam comentários.",
      rawFileName: "VID_Dia13_GanchosLegenda.mp4",
      caption: "Comentários são o maior sinal de engajamento para a distribuição. Faça perguntas estratégicas.",
      hashtags: "#engajamento #legendas #socialmediadicas #criadores",
      status: "idea"
    },
    {
      hook: "O microfone custo-benefício com áudio de estúdio que uso.",
      rawFileName: "VID_Dia14_MicrofoneTop.mp4",
      caption: "O público tolera imagem razoável, mas abandona vídeo com som ruim na hora. Veja essa indicação.",
      hashtags: "#equipamentocriador #microfonecelular #dicasaudio",
      status: "idea"
    },
    {
      hook: "Pare de colocar o CTA no último segundo do seu vídeo.",
      rawFileName: "VID_Dia15_ErroCTA.mp4",
      caption: "A maioria das pessoas sai antes do final. Integre sua chamada no clímax da mensagem.",
      hashtags: "#marketingestrategico #chamadaparaacao #retencao",
      status: "idea"
    },
    {
      hook: "Como organizo meus arquivos para editar cada vídeo em 10 minutos.",
      rawFileName: "VID_Dia16_OrganizacaoArquivos.mp4",
      caption: "Dê nome aos arquivos com o Dia e a palavra-chave do Gancho. O alinhamento com a fila agiliza tudo.",
      hashtags: "#edicaorapida #capcutbrasil #fluxodetrabalho #produtividade",
      status: "idea"
    },
    {
      hook: "5 segredos de presença de câmera para prender a atenção.",
      rawFileName: "VID_Dia17_PresencaCamera.mp4",
      caption: "Olhe direto na lente, não para a tela. Use gestos pontuais e module o tom de voz com firmeza.",
      hashtags: "#comunicacao #oratoria #falarnacamera #confianca",
      status: "idea"
    },
    {
      hook: "Desafio dos 30 dias de conteúdo planejado: topa participar?",
      rawFileName: "VID_Dia18_Desafio30Dias.mp4",
      caption: "Separe o momento de planejar do momento de gravar. Com a fila pronta, o bloqueio criativo acaba.",
      hashtags: "#desafio30dias #postqueue #habitosdecriador #foco",
      status: "idea"
    },
    {
      hook: "Esse truque de corte faz 60 segundos parecerem 15 segundos.",
      rawFileName: "VID_Dia19_RitmoDeCorte.mp4",
      caption: "J-cuts e zooms sutis a cada 3 segundos renovam a atenção do cérebro do espectador.",
      hashtags: "#truquesdeedicao #capcuttutorial #premiere #videomaker",
      status: "idea"
    },
    {
      hook: "3 motivos pelos quais suas hashtags não atraem ninguém.",
      rawFileName: "VID_Dia20_MitosHashtags.mp4",
      caption: "Hashtags servem para categorizar nas buscas, não para milagres virais. Use de 3 a 5 bem focadas.",
      hashtags: "#seoparafeeds #hashtagsdicas #buscadigital",
      status: "idea"
    },
    {
      hook: "Como transformar 1 ideia longa em 5 vídeos curtos de sucesso.",
      rawFileName: "VID_Dia21_MultiplicarIdeias.mp4",
      caption: "Tese principal, erro comum, tutorial passo a passo, exemplo real e advertência. Cinco vídeos prontos.",
      hashtags: "#reaproveitamentodeconteudo #estrategiacriativa #socialmedia",
      status: "idea"
    },
    {
      hook: "Minha iluminação de vídeo em um quarto pequeno.",
      rawFileName: "VID_Dia22_IluminacaoQuarto.mp4",
      caption: "Uma luz principal suave a 45 graus com fundo escuro já cria profundidade cinematográfica.",
      hashtags: "#iluminacaovideo #estudioemcasa #cenariocriativo",
      status: "idea"
    },
    {
      hook: "Por que você nunca deve apagar vídeos que 'floparam'.",
      rawFileName: "VID_Dia23_NuncaApaguePosts.mp4",
      caption: "Os algoritmos modernos podem entregar vídeos semanas depois. Apagar só reinicia o seu sinal.",
      hashtags: "#algoritmotiktok #dicasdeconteudo #aprendizagem",
      status: "idea"
    },
    {
      hook: "Como grandes criadores testam 3 ganchos no mesmo vídeo.",
      rawFileName: "VID_Dia24_TestesDeGanchos.mp4",
      caption: "Grave 3 começos diferentes e teste qual chamada inicial gera mais retenção com o público.",
      hashtags: "#testea_b #otimizacaovideo #ganchosqueconvertem",
      status: "idea"
    },
    {
      hook: "O segredo do micro-storytelling em menos de 45 segundos.",
      rawFileName: "VID_Dia25_MicroStorytelling.mp4",
      caption: "Situação normal -> Conflito inesperado -> Clímax -> Lição prática. Fórmula imbatível.",
      hashtags: "#storytellingbrasil #roteirodevideo #criacaodeconteudo",
      status: "idea"
    },
    {
      hook: "3 sites de efeitos sonoros gratuitos que você precisa salvar.",
      rawFileName: "VID_Dia26_EfeitosSonoros.mp4",
      caption: "Swooshes, pops e transições de áudio dão acabamento profissional de alto nível aos seus cortes.",
      hashtags: "#designsonoro #efeitosdeaudio #edicao #recursosgratis",
      status: "idea"
    },
    {
      hook: "Como manter o foco quando as visualizações caem.",
      rawFileName: "VID_Dia27_MotivacaoCriador.mp4",
      caption: "Encare cada post como uma repetição de treino. A consistência gera maestria e alcance constante.",
      hashtags: "#mentalidadevencedora #disciplina #criadoresbr",
      status: "idea"
    },
    {
      hook: "A quebra de padrão de 3 segundos que dobra o tempo de tela.",
      rawFileName: "VID_Dia28_QuebraDePadrao.mp4",
      caption: "Mude o enquadramento ou insira um efeito visual aos 3 segundos para renovar a curiosidade.",
      hashtags: "#retencaovideo #psicologiadoconsumo #dicasvideo",
      status: "idea"
    },
    {
      hook: "Minha auditoria de 30 dias: o que funcionou e o que descartamos.",
      rawFileName: "VID_Dia29_AuditoriaMensal.mp4",
      caption: "Analisando métricas sem emoção. Foco no 20% das publicações que trouxeram 80% do resultado.",
      hashtags: "#auditoriadeconteudo #metricas #aprendizados",
      status: "idea"
    },
    {
      hook: "30 dias concluídos! Veja os resultados da nossa fila PostQueue.",
      rawFileName: "VID_Dia30_Conclusao30Dias.mp4",
      caption: "Planejar os 30 dias com antecedência no PostQueue tirou todo o estresse de publicação diária!",
      hashtags: "#postqueue #desafio30dias #sucessocriativo #consistencia",
      status: "idea"
    }
  ],
  de: [
    {
      hook: "Mach nicht diesen Fehler, wenn du 2026 wachsen willst...",
      rawFileName: "VID_Tag01_FatalerFehler.mp4",
      caption: "90% aller Creator verlieren ihre Zuschauer in den ersten 3 Sekunden. So drehst du den Spieß um.",
      hashtags: "#contentcreator #videotipps #socialmediamarketing #creatorgermany",
      status: "posted"
    },
    {
      hook: "Das kostenlose Tool, das ich vor 2 Jahren gebraucht hätte.",
      rawFileName: "VID_Tag02_GeheimesTool.mp4",
      caption: "Du brauchst kein teures Studio für virale Videos. Dieser Workflow spart mir 15 Stunden jede Woche.",
      hashtags: "#produktivität #toolsfürcreator #videomarketing #creatorlife",
      status: "filmed"
    },
    {
      hook: "3 harte Wahrheiten über Video-Content, die niemand ausspricht.",
      rawFileName: "VID_Tag03_HarteWahrheiten.mp4",
      caption: "Niemand interessiert sich für deine Beleuchtung, wenn die Botschaft schwach ist. 3 ehrliche Lektionen.",
      hashtags: "#mindset #contenttipps #authentizität #businessgrowth",
      status: "filmed"
    },
    {
      hook: "Warum 99% aller Creator bei Kurzvideos nach 30 Tagen aufgeben.",
      rawFileName: "VID_Tag04_WarumAufgeben.mp4",
      caption: "Konsistenz ohne Struktur führt zu Burnout. Hier ist das 30-Tage Pipeline-System.",
      hashtags: "#tiktoktipps #reelsdeutschland #youtubeshorts #fokus",
      status: "idea"
    },
    {
      hook: "Kopiere mein 5-Schritte-Skript für 60-Sekunden Videos.",
      rawFileName: "VID_Tag05_SkriptVorlage.mp4",
      caption: "Hook -> Pattern Interrupt -> Problem -> Lösung -> Klarer Call to Action. Speichere dir diese Formel!",
      hashtags: "#storytelling #skripttipps #videoproduktion #viralität",
      status: "idea"
    },
    {
      hook: "Der psychologische Trick hinter Hooks, die fesseln.",
      rawFileName: "VID_Tag06_HookPsychologie.mp4",
      caption: "Open Loops wecken Neugier, die das Gehirn auflösen möchte. So wendest du es ethisch an.",
      hashtags: "#hookformel #engagementtipps #psychologie #marketing",
      status: "idea"
    },
    {
      hook: "Posten um 7 Uhr morgens vs 19 Uhr abends: Der 14-Tage-Test.",
      rawFileName: "VID_Tag07_PostingZeitTest.mov",
      caption: "Die Algorithmus-Daten haben mich überrascht. Timing zählt, aber Mehrwert zählt 10-mal mehr.",
      hashtags: "#algorithmus #datenanalyse #creatortest #insights",
      status: "idea"
    },
    {
      hook: "Wie du 10 Videos in 2 Stunden drehst ohne Stress.",
      rawFileName: "VID_Tag08_BatchFilming.mp4",
      caption: "Batch-Filming funktioniert nur, wenn die Hooks vorher in PostQueue feststehen.",
      hashtags: "#batchfilming #zeitmanagement #produktivität #drehtag",
      status: "idea"
    },
    {
      hook: "Verwende niemals diesen Audio-Fehler bei deinen Videos.",
      rawFileName: "VID_Tag09_AudioFehler.mp4",
      caption: "Zu laute Hintergrundmusik vertreibt Zuschauer in Sekunde 1. Nutze diese Lautstärken-Regel.",
      hashtags: "#audiotipps #schnitt #videotutorial #creatorwissen",
      status: "idea"
    },
    {
      hook: "Der Unterschied zwischen 1.000 und 100.000 Aufrufen.",
      rawFileName: "VID_Tag10_Vergleichsanalyse.mp4",
      caption: "Es ist fast nie die Kamera. Es ist die Neugierlücke im Hook und das Tempo des Schnitts.",
      hashtags: "#viralgehen #videoanalyse #contentstrategie",
      status: "idea"
    },
    {
      hook: "Smartphone-Einstellungen, die nach 3.000€ Kamera aussehen.",
      rawFileName: "VID_Tag11_HandyKameraSetup.mp4",
      caption: "Belichtung sperren, 4K 24fps einstellen und Linse putzen. Sofort besseres Bild!",
      hashtags: "#filmenmithandy #iphonekamera #videoproduktion",
      status: "idea"
    },
    {
      hook: "Wenn ich heute bei 0 Followern starten müsste: Mein 30-Tage-Plan.",
      rawFileName: "VID_Tag12_NeustartPlan.mp4",
      caption: "Keine bezahlte Werbung. Nur starke Hooks und strukturierter Content. Hier ist der Fahrplan.",
      hashtags: "#neustart #socialmediastrategie #creatorreisen",
      status: "idea"
    },
    {
      hook: "3 Caption-Formeln, die sofort Kommentare bringen.",
      rawFileName: "VID_Tag13_CaptionFormeln.mp4",
      caption: "Kommentare signalisieren Relevanz. Stelle gezielte Fragen, die zum Mitreden anregen.",
      hashtags: "#captiontipps #communityaufbau #engagement",
      status: "idea"
    },
    {
      hook: "Das Budget-Mikrofon mit Studioqualität, das ich täglich nutze.",
      rawFileName: "VID_Tag14_MikrofonTest.mp4",
      caption: "Schlechtes Audio verzeiht niemand. Hier ist meine klare Empfehlung für Einsteiger.",
      hashtags: "#microfon #creatorgear #techniktipps",
      status: "idea"
    },
    {
      hook: "Hör auf, deinen Call to Action ganz ans Ende zu packen.",
      rawFileName: "VID_Tag15_CTAKritik.mp4",
      caption: "Die meisten sehen die letzten Sekunden nicht. Baue den Call to Action in den Höhepunkt ein.",
      hashtags: "#calltoaction #videotipps #conversions",
      status: "idea"
    },
    {
      hook: "So sortiere ich Rohdateien, um in 10 Minuten zu schneiden.",
      rawFileName: "VID_Tag16_DateienSortieren.mp4",
      caption: "Tag-Nummer und Hook-Stichwort im Dateinamen sparen stundenlanges Suchen beim Videoschnitt.",
      hashtags: "#schnitttipps #capcuttipps #premiere #workflow",
      status: "idea"
    },
    {
      hook: "5 Körpersprache-Tricks für mehr Charisma vor der Kamera.",
      rawFileName: "VID_Tag17_Koerpersprache.mp4",
      caption: "Schau direkt in die Linse statt aufs Display. Nutze ruhige Gesten und klare Betonung.",
      hashtags: "#auftreten #körpersprache #vortrag #selbstvertrauen",
      status: "idea"
    },
    {
      hook: "Die 30-Tage Content Challenge: Machst du mit?",
      rawFileName: "VID_Tag18_30TageChallenge.mp4",
      caption: "Plane 30 Hooks im Voraus mit PostQueue. Schluss mit der Frage 'Was poste ich heute?'.",
      hashtags: "#30tagechallenge #postqueue #routine #fokus",
      status: "idea"
    },
    {
      hook: "Dieser Schnitt-Trick lässt 60 Sekunden wie 15 wirken.",
      rawFileName: "VID_Tag19_SchnittRhythmus.mp4",
      caption: "J-Cuts und Bildwechsel alle 3-4 Sekunden halten das Auge aktiv am Ball.",
      hashtags: "#videobearbeitung #capcutdeutschland #editinghacks",
      status: "idea"
    },
    {
      hook: "3 Gründe, warum deine Hashtags gar nichts bringen.",
      rawFileName: "VID_Tag20_HashtagFehler.mp4",
      caption: "Hashtags sind für SEO-Kategorisierung, nicht für automatische Viralität. 3 bis 5 gezielte Tags genügen.",
      hashtags: "#hashtagtipps #seotipps #socialmediawissen",
      status: "idea"
    },
    {
      hook: "Aus 1 Gedanken 5 virale Kurzvideos machen.",
      rawFileName: "VID_Tag21_ContentRecycling.mp4",
      caption: "Kernidee, konträre Sichtweise, Anleitung, Fallstudie und Fehleranalyse. Fertig sind 5 Posts.",
      hashtags: "#contentrecyceln #ideenfindung #marketingideen",
      status: "idea"
    },
    {
      hook: "Mein Studio-Licht in einem kleinen, dunklen Raum.",
      rawFileName: "VID_Tag22_StudioLicht.mp4",
      caption: "Ein Key-Light im 45-Grad-Winkel erzeugt cineastische Tiefe auch im kleinsten Zimmer.",
      hashtags: "#lichtsetup #homestudio #videodreh",
      status: "idea"
    },
    {
      hook: "Warum du Videos mit wenig Klicks niemals löschen solltest.",
      rawFileName: "VID_Tag23_NiemalsLoeschen.mp4",
      caption: "Algorithmen spielen Videos oft erst nach Wochen oder Monaten aus. Löschen schadet der Historie.",
      hashtags: "#algorithmusgeheimnisse #creatorratschlag #socialmedia",
      status: "idea"
    },
    {
      hook: "Wie Top-Creator 3 Hooks für dasselbe Video testen.",
      rawFileName: "VID_Tag24_HookTesting.mp4",
      caption: "Filme drei 3-Sekunden-Intros und finde heraus, welcher Einstieg die beste Watchtime erzielt.",
      hashtags: "#abtesting #hookoptimierung #videoerfolg",
      status: "idea"
    },
    {
      hook: "Micro-Storytelling in unter 45 Sekunden meistern.",
      rawFileName: "VID_Tag25_MicroStorytelling.mp4",
      caption: "Alltag -> Überraschung -> Konflikt -> Erkenntnis. Perfekte Struktur für Kurzvideos.",
      hashtags: "#storytellingtipps #videokonzeption #kurzvideos",
      status: "idea"
    },
    {
      hook: "3 kostenlose Sound-Bibliotheken für Video-Editor.",
      rawFileName: "VID_Tag26_SoundBibliotheken.mp4",
      caption: "Whooshes, Klicks und Riser machen deine Videos dynamisch und professionell.",
      hashtags: "#sounddesign #sfx #schnitttools #kostenlos",
      status: "idea"
    },
    {
      hook: "Wie du motiviert bleibst, wenn Aufrufzahlen schwanken.",
      rawFileName: "VID_Tag27_CreatorMindset.mp4",
      caption: "Jedes Video ist ein Training, kein Lottoschein. Ausdauer schlägt Talent jedes Mal.",
      hashtags: "#durchhalten #disziplin #creatormindset",
      status: "idea"
    },
    {
      hook: "Der 3-Sekunden Musterunterbrecher für doppelte Watchtime.",
      rawFileName: "VID_Tag28_Musterunterbrechung.mp4",
      caption: "Wechsle nach 3 Sekunden den Winkel oder Zoomfaktor, um die Aufmerksamkeit neu zu aktivieren.",
      hashtags: "#watchtime #psychologietipps #videomarketing",
      status: "idea"
    },
    {
      hook: "Mein Monats-Audit: Was funktioniert hat und was wir streichen.",
      rawFileName: "VID_Tag29_MonatsAudit.mp4",
      caption: "Ehrliche Zahlenanalyse: Fokus auf die 20% Formate, die 80% des Wachstums bringen.",
      hashtags: "#analyse #zahlen #wachstum #business",
      status: "idea"
    },
    {
      hook: "30 Tage geschafft! Das Resümee unserer Content-Pipeline.",
      rawFileName: "VID_Tag30_PipelineFazit.mp4",
      caption: "Dank PostQueue war der Content-Monat stressfrei und planbar. Auf in die nächsten 30 Tage!",
      hashtags: "#postqueue #30tagegeschafft #erfolg #creatorcommunity",
      status: "idea"
    }
  ],
  fr: [
    {
      hook: "Arrêtez de faire ça si vous voulez grandir en 2026...",
      rawFileName: "VID_Jour01_ErreurFatale.mp4",
      caption: "La plupart des créateurs perdent 80% de l'audience lors des 3 premières secondes. Voici l'astuce pour inverser la courbe.",
      hashtags: "#createurdecontenu #astucesvideo #croissancetiktok #marketingdigital",
      status: "posted"
    },
    {
      hook: "L'outil 100% gratuit que j'aurais aimé connaître il y a 2 ans.",
      rawFileName: "VID_Jour02_OutilSecret.mp4",
      caption: "Pas besoin de matériel coûteux pour faire des millions de vues. Cette routine me fait gagner 15h par semaine.",
      hashtags: "#productivite #outilsgratuits #creativite #shortsfrancais",
      status: "filmed"
    },
    {
      hook: "3 vérités brutales que chaque créateur vidéo doit entendre.",
      rawFileName: "VID_Jour03_VeritesBrutales.mp4",
      caption: "Personne ne regarde vos vidéos pour la qualité de votre éclairage si votre histoire est ennuyeuse. 3 leçons après 300 vidéos.",
      hashtags: "#mindset #leconsdevie #reelsfrance #createurs",
      status: "filmed"
    },
    {
      hook: "Pourquoi 99% des gens échouent sur les vidéos courtes en 30 jours.",
      rawFileName: "VID_Jour04_PourquoiEchec.mp4",
      caption: "La régularité sans stratégie n'est que du bruit. Découvrez notre méthode de file d'attente sur 30 jours.",
      hashtags: "#strategiecontenu #tiktokfrance #reelsastuces #discipline",
      status: "idea"
    },
    {
      hook: "Volez ma structure de script en 5 étapes pour des reels viraux.",
      rawFileName: "VID_Jour05_StructureScript.mp4",
      caption: "Accroche -> Rupture de motif -> Problème -> Solution concrète -> Appel à l'action. Enregistrez ce post !",
      hashtags: "#scriptvideo #storytelling #reelsviraux #copywriting",
      status: "idea"
    },
    {
      hook: "Le mécanisme psychologique des accroches qui rendent accro.",
      rawFileName: "VID_Jour06_PsychologieAccroche.mp4",
      caption: "Les boucles ouvertes créent un besoin impératif dans le cerveau de découvrir la suite. Utilisez-le avec éthique.",
      hashtags: "#accrochevideo #neurosciences #engagement #marketingvideo",
      status: "idea"
    },
    {
      hook: "J'ai posté à 7h vs 19h pendant 14 jours. Voici les résultats :",
      rawFileName: "VID_Jour07_TestHoraires.mov",
      caption: "Les statistiques d'audience m'ont surpris. L'horaire compte, mais l'intérêt immédiat compte 10 fois plus.",
      hashtags: "#algorithme #analysemetrique #testvideo #insights",
      status: "idea"
    },
    {
      hook: "Comment tourner 10 vidéos en 2 heures sans s'épuiser.",
      rawFileName: "VID_Jour08_TournageParLots.mp4",
      caption: "Le tournage groupé devient un jeu d'enfant quand tous vos hooks sont déjà prêts dans PostQueue.",
      hashtags: "#tournage #organisation #productivitecreative #videomaker",
      status: "idea"
    },
    {
      hook: "Ne faites jamais cette erreur avec la musique de fond.",
      rawFileName: "VID_Jour09_ErreurMusique.mp4",
      caption: "Une musique qui couvre votre voix fait fuir le spectateur en moins de 2 secondes. Ajustez les niveaux.",
      hashtags: "#audiovideo #astucemontage #qualitevideo #shortsfr",
      status: "idea"
    },
    {
      hook: "La différence entre une vidéo à 1 000 vues et 100 000 vues.",
      rawFileName: "VID_Jour10_EtudeComparative.mp4",
      caption: "Ce n'est presque jamais la caméra, mais l'écart de curiosité suscité par les premières secondes.",
      hashtags: "#videosvirales #analysedecontenu #tiktoktips",
      status: "idea"
    },
    {
      hook: "Mes réglages smartphone pour un rendu digne d'une caméra cinéma.",
      rawFileName: "VID_Jour11_ReglagesSmartphone.mp4",
      caption: "Verrouillez l'exposition, filmez en 4K 24fps et nettoyez toujours votre objectif avant d'enregistrer.",
      hashtags: "#filmerausmartphone #astuceiphone #cinematographie",
      status: "idea"
    },
    {
      hook: "Si je devais repartir de zéro abonné : mon plan de 30 jours.",
      rawFileName: "VID_Jour12_RepartirAZero.mp4",
      caption: "Zéro publicité, zéro contact. Juste des hooks percutants et un calendrier de publication rigoureux.",
      hashtags: "#repartirdezero #croissanceorganique #marquepersonnelle",
      status: "idea"
    },
    {
      hook: "3 formules de légende qui déclenchent un tsunami de commentaires.",
      rawFileName: "VID_Jour13_FormulesLegendes.mp4",
      caption: "Les commentaires envoient le signal le plus fort à l'algorithme. Posez des questions engageantes.",
      hashtags: "#engagement #commentaires #socialmediatips",
      status: "idea"
    },
    {
      hook: "Le micro abordable au son professionnel que j'utilise au quotidien.",
      rawFileName: "VID_Jour14_MicroAbordable.mp4",
      caption: "Une mauvaise image se pardonne, un mauvais son fait fuir instantanément. Voici mon matériel favori.",
      hashtags: "#microvideo #materielcreateur #astucestechniques",
      status: "idea"
    },
    {
      hook: "Arrêtez de placer votre appel à l'action à la toute fin.",
      rawFileName: "VID_Jour15_ErreurCTA.mp4",
      caption: "La plupart des spectateurs ne voient jamais la fin. Intégrez votre demande au moment culminant du récit.",
      hashtags: "#appelalaction #conversion #strategievideo",
      status: "idea"
    },
    {
      hook: "Comment je classe mes fichiers bruts pour monter en 10 minutes.",
      rawFileName: "VID_Jour16_ClassementFichiers.mp4",
      caption: "Nommez chaque fichier avec le Jour et le mot-clé du Hook. Le montage devient fluide et instantané.",
      hashtags: "#montagevideo #capcutfrance #premierepro #workflow",
      status: "idea"
    },
    {
      hook: "5 astuces de langage corporel pour captiver face caméra.",
      rawFileName: "VID_Jour17_LangageCorporel.mp4",
      caption: "Regardez directement l'objectif, pas votre reflet. Adoptez des gestes posés et une diction assurée.",
      hashtags: "#aisanceorale #parlerencamera #confianceensoi",
      status: "idea"
    },
    {
      hook: "Le défi des 30 jours de contenu par lots : êtes-vous prêts ?",
      rawFileName: "VID_Jour18_Defi30Jours.mp4",
      caption: "Séparez la phase d'écriture de la phase de tournage. Adieu la panne d'inspiration quotidienne !",
      hashtags: "#defi30jours #postqueue #habitudes #productivite",
      status: "idea"
    },
    {
      hook: "Cette technique de découpage fait passer 60s pour 15s.",
      rawFileName: "VID_Jour19_RythmeMontage.mp4",
      caption: "Les J-cuts et transitions dynamiques toutes les 3 secondes maintiennent l'esprit du spectateur en éveil.",
      hashtags: "#astucesmontage #rythmevideo #capcuttuto",
      status: "idea"
    },
    {
      hook: "3 raisons pour lesquelles vos hashtags ne vous apportent rien.",
      rawFileName: "VID_Jour20_MythesHashtags.mp4",
      caption: "Les hashtags servent au référencement SEO thématique, pas à la magie virale. 3 à 5 tags précis suffisent.",
      hashtags: "#seotiktok #hashtagstips #referencementnaturel",
      status: "idea"
    },
    {
      hook: "Comment transformer 1 seule idée en 5 vidéos courtes.",
      rawFileName: "VID_Jour21_DeclinerContenu.mp4",
      caption: "La thèse principale, le mythe à déconstruire, le tutoriel pratique, l'exemple et le piège à éviter.",
      hashtags: "#recyclagecontenu #ideesvideos #creativite",
      status: "idea"
    },
    {
      hook: "Mon installation d'éclairage dans une petite pièce sombre.",
      rawFileName: "VID_Jour22_EclairageStudio.mp4",
      caption: "Une seule lumière clé douce à 45° suffit pour créer un contraste cinématographique saisissant.",
      hashtags: "#eclairagevideo #homestudio #cinematographie",
      status: "idea"
    },
    {
      hook: "Pourquoi il ne faut JAMAIS supprimer une vidéo qui fait peu de vues.",
      rawFileName: "VID_Jour23_NePasSupprimer.mp4",
      caption: "Les algorithmes actuels peuvent propulser une vidéo des semaines plus tard. Ne cassez pas votre historique.",
      hashtags: "#secretsalgorithme #conseilscreateur #patience",
      status: "idea"
    },
    {
      hook: "Comment les meilleurs créateurs testent 3 hooks sur la même vidéo.",
      rawFileName: "VID_Jour24_TestAccroches.mp4",
      caption: "Filmez 3 amorces distinctes pour découvrir quelle formule retient le plus l'attention.",
      hashtags: "#abtesting #optimisationvideo #viralite",
      status: "idea"
    },
    {
      hook: "Maîtriser le micro-storytelling en moins de 45 secondes.",
      rawFileName: "VID_Jour25_MicroStorytelling.mp4",
      caption: "Situation de départ -> Incident imprévu -> Tension -> Dénouement inspirant.",
      hashtags: "#storytelling #recit #accroche #ecriture",
      status: "idea"
    },
    {
      hook: "3 bibliothèques de bruitages gratuits à enregistrer d'urgence.",
      rawFileName: "VID_Jour26_BruitagesGratuits.mp4",
      caption: "Les swooshes et clics sonores transforment une vidéo amateur en contenu haut de gamme.",
      hashtags: "#bruitages #designsonore #ressourcesgratuites",
      status: "idea"
    },
    {
      hook: "Comment garder le moral quand les vues sont en baisse.",
      rawFileName: "VID_Jour27_MoralCreateur.mp4",
      caption: "Chaque vidéo est un entraînement, pas un billet de tombola. La régularité forge la compétence.",
      hashtags: "#resilience #discipline #mentalitecreateur",
      status: "idea"
    },
    {
      hook: "La rupture de motif de 3 secondes qui double votre temps de visionnage.",
      rawFileName: "VID_Jour28_RuptureDeMotif.mp4",
      caption: "Modifiez l'angle ou la valeur de plan à la 3e seconde pour relancer l'attention du spectateur.",
      hashtags: "#retentionvideo #psychologievisuelle #videotips",
      status: "idea"
    },
    {
      hook: "Mon audit mensuel : ce qui a cartonné et ce qu'on abandonne.",
      rawFileName: "VID_Jour29_AuditMensuel.mp4",
      caption: "Analyse chiffrée sans concession : capitalisez sur les 20% de vidéos qui ont fait 80% des résultats.",
      hashtags: "#auditdecontenu #statistiques #bilanmensuel",
      status: "idea"
    },
    {
      hook: "30 jours bouclés ! Bilan complet de notre file PostQueue.",
      rawFileName: "VID_Jour30_Bilan30Jours.mp4",
      caption: "Avoir programmé 30 jours d'avance dans PostQueue a éliminé tout stress de publication.",
      hashtags: "#postqueue #defi30jours #succes #communautecreateurs",
      status: "idea"
    }
  ],
  ja: [
    {
      hook: "2026年に動画を伸ばしたいなら、今すぐこれをやめてください...",
      rawFileName: "VID_01日目_絶対NGな行動.mp4",
      caption: "9割のクリエイターが冒頭3秒で離脱されています。視聴維持率を倍増させるオープニングの設計図を公開します。\n\n次回撮影用に保存してください！\n1. 挨拶を全カット\n2. 結論の直前から開始\n3. 変化を視覚で提示",
      hashtags: "#動画クリエイター #リール動画 #ショート動画 #発信のコツ #SNS運用",
      status: "posted"
    },
    {
      hook: "2年前に知りたかった、完全無料の神ツール。",
      rawFileName: "VID_02日目_無料ツール紹介.mp4",
      caption: "数十万円の機材は不要です。この作業フローだけで毎週15時間の時短に成功しました。\n\n詳細が知りたい方はコメント欄へ！",
      hashtags: "#生産性向上 #便利ツール #時短術 #動画編集 #クリエイターの日常",
      status: "filmed"
    },
    {
      hook: "動画投稿を始めた全員に伝えたい、3つの厳しい現実。",
      rawFileName: "VID_03日目_厳しい現実3選.mp4",
      caption: "内容が面白くなければ高画質カメラも意味がありません。300本以上投稿して痛感したリアルな教訓。",
      hashtags: "#マインドセット #失敗談 #SNS継続 #自己成長 #動画制作",
      status: "filmed"
    },
    {
      hook: "99%の人がショート動画で30日以内に挫折する本当の理由。",
      rawFileName: "VID_04日目_挫折する理由.mp4",
      caption: "計画のない毎日投稿はただの疲弊です。PostQueueを使った30日間パイプライン思考を解説。",
      hashtags: "#TikTok攻略 #インスタリール #YouTubeショート #継続のコツ",
      status: "idea"
    },
    {
      hook: "保存必須！60秒で魅せる台本テンプレート5箇条。",
      rawFileName: "VID_05日目_台本テンプレ.mp4",
      caption: "フック -> パターン遮断 -> 共感と課題提示 -> 解決策 -> 明確なCTA。累計50万再生を生んだ黄金比率です。",
      hashtags: "#台本作り #コピーライティング #バズる動画 #動画構成",
      status: "idea"
    },
    {
      hook: "人が思わず最後まで見てしまう「オープンループ」の心理学。",
      rawFileName: "VID_06日目_心理フック術.mp4",
      caption: "あえて結論を少し引っ張ることで脳が答えを探し続けます。悪用厳禁の維持率向上テクニック。",
      hashtags: "#心理学 #行動経済学 #維持率アップ #動画マーケティング",
      status: "idea"
    },
    {
      hook: "朝7時 vs 夜19時投稿を14日間検証した結果が衝撃的だった。",
      rawFileName: "VID_07日目_投稿時間検証.mov",
      caption: "アルゴリズムの生データを公開。投稿時間以上に視聴者の検索意図が10倍重要でした。",
      hashtags: "#アルゴリズム検証 #データ分析 #アナリティクス #SNS検証",
      status: "idea"
    },
    {
      hook: "疲れずに2時間で動画10本を一括撮影する方法。",
      rawFileName: "VID_08日目_まとめ撮り術.mp4",
      caption: "事前にフックをPostQueueで確定させておけば、撮影日はカメラの前で読むだけ。圧倒的効率化。",
      hashtags: "#まとめ撮り #作業効率化 #撮影術 #タスク管理",
      status: "idea"
    },
    {
      hook: "視聴維持率を下げてしまう絶対にNGなBGMの使い方。",
      rawFileName: "VID_09日目_BGMの失敗.mp4",
      caption: "声の周波数と被るBGMは1.5秒でスワイプされます。声を聞き取りやすくする音量バランスの法則。",
      hashtags: "#動画編集 #音響設計 #BGM選び #動画チュートリアル",
      status: "idea"
    },
    {
      hook: "1,000再生で終わる動画と、10万再生される動画の決定的な違い。",
      rawFileName: "VID_10日目_再生数の壁.mp4",
      caption: "カメラの性能ではなく、冒頭3秒の情報ギャップと画面展開のテンポの違いです。",
      hashtags: "#動画分析 #リール攻略 #バズる法則 #動画マーケティング",
      status: "idea"
    },
    {
      hook: "まるでプロ仕様！スマホ動画が一瞬で映画のようになる設定。",
      rawFileName: "VID_11日目_スマホカメラ設定.mp4",
      caption: "露出固定、4K24fps設定、そして撮影前のレンズ拭き。これだけでプロの質感になります。",
      hashtags: "#スマホ撮影 #iPhone動画 #撮影テクニック #モバイルクリエイター",
      status: "idea"
    },
    {
      hook: "もし今フォロワー0人になったら、最初の30日間でやること。",
      rawFileName: "VID_12日目_ゼロからのロードマップ.mp4",
      caption: "広告費0円、コラボなし。高維持率のフックと日々の計画的ストックだけで再現する戦略。",
      hashtags: "#ゼロからの発信 #ロードマップ #個人ブランディング",
      status: "idea"
    },
    {
      hook: "コメント欄が確実に盛り上がる3つのキャプション術。",
      rawFileName: "VID_13日目_コメント増加術.mp4",
      caption: "コメント数はアルゴリズム評価で最重要の指標。二者択一や体験を問う質問を投げかけましょう。",
      hashtags: "#エンゲージメント #コメント対策 #アカウント運用",
      status: "idea"
    },
    {
      hook: "コスパ最強！私が毎日使っている神ピンマイク。",
      rawFileName: "VID_14日目_おすすめマイク.mp4",
      caption: "多少の画質の粗さは許容されても、音質の悪さは即座に離脱されます。おすすめの1台をご紹介。",
      hashtags: "#機材紹介 #ピンマイク #音質改善 #撮影機材",
      status: "idea"
    },
    {
      hook: "動画の最後にCTAを入れるのを今すぐやめてください。",
      rawFileName: "VID_15日目_CTAの配置ミス.mp4",
      caption: "視聴者の多くは最後の2秒まで見ません。最も感情が高まるクライマックスで自然に促しましょう。",
      hashtags: "#CTA #行動喚起 #動画のコツ #コンバージョン",
      status: "idea"
    },
    {
      hook: "編集が10分で終わる、動画ファイル名の爆速管理術。",
      rawFileName: "VID_16日目_ファイル整理術.mp4",
      caption: "日付とフックのキーワードでファイル名を統一。PostQueueと連携すれば迷子になりません。",
      hashtags: "#ファイル管理 #動画編集効率化 #CapCut #PremierePro",
      status: "idea"
    },
    {
      hook: "カメラの前で緊張しない！人を惹きつける5つの身体言語。",
      rawFileName: "VID_17日目_カメラ目線と動作.mp4",
      caption: "画面ではなくレンズを凝視する、手振りを効果的に使う、声の抑揚を一定に保つポイント。",
      hashtags: "#話し方 #カメラ慣れ #表現力 #動画撮影",
      status: "idea"
    },
    {
      hook: "30日分の投稿ストックを作るチャレンジ、一緒にやりませんか？",
      rawFileName: "VID_18日目_30日チャレンジ.mp4",
      caption: "企画と撮影を切り離すことでネタ切れの恐怖がゼロになります。PostQueueで管理スタート！",
      hashtags: "#30日チャレンジ #習慣化 #PostQueue #動画ストック",
      status: "idea"
    },
    {
      hook: "60秒が15秒に感じる、視聴維持率爆上げのカッティング技術。",
      rawFileName: "VID_19日目_テンポの良いカット.mp4",
      caption: "3秒ごとのズームやJカットで視聴者の脳の注意を途切れさせない編集のコツ。",
      hashtags: "#編集テクニック #CapCut初心者 #テンポ感 #ショート動画編集",
      status: "idea"
    },
    {
      hook: "あなたのハッシュタグが全く効果を発揮しない3つの理由。",
      rawFileName: "VID_20日目_ハッシュタグの誤解.mp4",
      caption: "ハッシュタグはバズの魔法ではなく検索SEOのための分類です。絞り込んだ3〜5個が最適解。",
      hashtags: "#ハッシュタグ選定 #SEO対策 #検索流入 #SNS知識",
      status: "idea"
    },
    {
      hook: "1つのアイデアからショート動画5本を生み出す展開術。",
      rawFileName: "VID_21日目_アイデア転用.mp4",
      caption: "結論、逆説、実践手順、失敗例、よくある質問に分解すれば、1つのネタから5本作れます。",
      hashtags: "#コンテンツ再利用 #ネタ出し #アイデア発想法",
      status: "idea"
    },
    {
      hook: "狭い部屋でもプロっぽく撮れる、おすすめ照明ライティング。",
      rawFileName: "VID_22日目_部屋の照明術.mp4",
      caption: "メインライトを斜め45度から当てて背景を落とすだけで、奥行きのある映像が完成します。",
      hashtags: "#ライティング #撮影部屋 #ルームツアー #動画照明",
      status: "idea"
    },
    {
      hook: "再生数が伸びなかった動画を絶対に削除してはいけない理由。",
      rawFileName: "VID_23日目_削除NGな理由.mp4",
      caption: "最新の推薦エンジンは数週間〜数ヶ月後に突然拡散することがあります。履歴を守りましょう。",
      hashtags: "#アルゴリズムの秘密 #ショート動画運用 #息の長い動画",
      status: "idea"
    },
    {
      hook: "トップクリエイターが実践する、同一動画での3パターン検証。",
      rawFileName: "VID_24日目_ABテスト法.mp4",
      caption: "本編は同じで冒頭3秒のフックだけ3種類撮影し、どの切り口が刺さるかテストする方法。",
      hashtags: "#ABテスト #動画改善 #フック検証 #成長戦略",
      status: "idea"
    },
    {
      hook: "45秒以内で心を動かすマイクロストーリーテリングの極意。",
      rawFileName: "VID_25日目_ショート物語構成.mp4",
      caption: "日常 -> 予期せぬ事件 -> 葛藤 -> 学びと解決。短い動画だからこそストーリーが活きます。",
      hashtags: "#ストーリーテリング #共感を生む #動画構成案",
      status: "idea"
    },
    {
      hook: "ブックマーク必須！動画編集で使えるおすすめフリー効果音3選。",
      rawFileName: "VID_26日目_無料効果音.mp4",
      caption: "風切り音、ポップ音、低音のドーンという効果音を入れるだけでプロクオリティに変身。",
      hashtags: "#効果音 #SE #動画編集素材 #フリー素材",
      status: "idea"
    },
    {
      hook: "再生数が落ち込んだときにモチベーションを保つ秘訣。",
      rawFileName: "VID_27日目_モチベーション維持.mp4",
      caption: "動画1本は宝くじではなく筋トレの1レップ。毎日の積み重ねが確実にスキルとなります。",
      hashtags: "#マインドセット #継続は力なり #動画クリエイター",
      status: "idea"
    },
    {
      hook: "視聴時間を倍にする、3秒目のパターン遮断テクニック。",
      rawFileName: "VID_28日目_パターン遮断.mp4",
      caption: "3秒経った瞬間にカメラ画角やテロップ配置を切り替え、無意識の離脱を防ぎます。",
      hashtags: "#離脱防止 #視聴時間改善 #動画Tips",
      status: "idea"
    },
    {
      hook: "月末の動画棚卸し：伸びた動画とやめたフォーマットの分析。",
      rawFileName: "VID_29日目_月末分析.mp4",
      caption: "数字を客観的に直視。結果を出した上位20%のテーマに集中投資し、無駄を削ぎ落とします。",
      hashtags: "#振り返り #分析レポート #改善サイクル",
      status: "idea"
    },
    {
      hook: "祝30日完走！PostQueueで管理したコンテンツパイプラインの成果。",
      rawFileName: "VID_30日目_30日達成まとめ.mp4",
      caption: "PostQueueで30日分を視覚化していたおかげで、毎日のネタ探しストレスから完全に解放されました！",
      hashtags: "#PostQueue #30日完走 #目標達成 #クリエイター応援",
      status: "idea"
    }
  ]
};

export function getInitialSlots(lang: SupportedLanguage = 'en'): PostItem[] {
  const starters = starterHooksByLang[lang] || starterHooksByLang.en;
  return Array.from({ length: 30 }, (_, index) => {
    const starter = starters[index];
    return {
      id: `slot-${index + 1}-${Date.now()}`,
      day: index + 1,
      hook: starter?.hook ?? '',
      rawFileName: starter?.rawFileName ?? '',
      caption: starter?.caption ?? '',
      hashtags: starter?.hashtags ?? '',
      status: (starter?.status as 'idea' | 'filmed' | 'posted') ?? 'idea',
      updatedAt: Date.now(),
    };
  });
}

export function getEmptySlots(): PostItem[] {
  return Array.from({ length: 30 }, (_, index) => ({
    id: `slot-${index + 1}-${Date.now()}`,
    day: index + 1,
    hook: '',
    rawFileName: '',
    caption: '',
    hashtags: '',
    status: 'idea',
    updatedAt: Date.now(),
  }));
}

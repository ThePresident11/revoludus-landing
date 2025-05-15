import { SupportedLang } from "@/lib/i18n/LanguageSelector/index";

export const title: Record<SupportedLang, string> = {
  hr: "Moduli",
  en: "Modules",
  de: "Module",
  fr: "Modules",
  es: "Módulos",
  it: "Moduli",
  "sr-Latn": "Moduli",
  "sr-Cyrl": "Модули",
  bs: "Moduli",
  sl: "Moduli",
  mk: "Модули",
  cnr: "Moduli",
  sq: "Modulet",
  hu: "Modulok",
  ro: "Module",
  ru: "Модули",
  bg: "Модули",
  pl: "Moduły",
  cs: "Moduly",
  sk: "Moduly",
  uk: "Модулі",
  nl: "Modules",
  pt: "Módulos",
  tr: "Modüller",
  ar: "الوحدات",
  zh: "模块",
  ja: "モジュール",
  el: "Ενότητες",
  fi: "Moduulit",
  et: "Moodulid",
  lt: "Moduliai",
  lv: "Moduļi",
  no: "Moduler",
  da: "Moduler",
  az: "Modullar",
  hy: "Մոդուլներ",
  he: "מודולים",
  is: "Einingar",
  kk: "Модульдер",
  mt: "Moduli",
  sv: "Moduler",
  ka: "მოდულები",
  ga: "Modúil",
  ca: "Mòduls",
};

export const subtitle: Record<SupportedLang, string> = {
  hr: "Sveobuhvatna podrška za svaki segment sportskog rada.",
  en: "Comprehensive support for every aspect of sports work.",
  de: "Umfassende Unterstützung für jeden Bereich der sportlichen Arbeit.",
  fr: "Un soutien complet pour chaque aspect du travail sportif.",
  es: "Apoyo integral para cada aspecto del trabajo deportivo.",
  it: "Supporto completo per ogni aspetto del lavoro sportivo.",
  "sr-Latn": "Sveobuhvatna podrška za svaki segment sportskog rada.",
  "sr-Cyrl": "Свеобухватна подршка за сваки сегмент спортског рада.",
  bs: "Sveobuhvatna podrška za svaki segment sportskog rada.",
  sl: "Celovita podpora za vsak segment športnega dela.",
  mk: "Сеопфатна поддршка за секој сегмент на спортската работа.",
  cnr: "Sveobuhvatna podrška za svaki segment sportskog rada.",
  sq: "Mbështetje gjithëpërfshirëse për çdo segment të punës sportive.",
  hu: "Átfogó támogatás a sportmunka minden területére.",
  ro: "Sprijin cuprinzător pentru fiecare segment al muncii sportive.",
  ru: "Всесторонняя поддержка каждого аспекта спортивной деятельности.",
  bg: "Цялостна подкрепа за всеки аспект от спортната дейност.",
  pl: "Wszechstronne wsparcie dla każdego segmentu pracy sportowej.",
  cs: "Komplexní podpora pro každý segment sportovní činnosti.",
  sk: "Komplexná podpora pre každý segment športovej práce.",
  uk: "Всеохопна підтримка кожного аспекту спортивної роботи.",
  nl: "Allesomvattende ondersteuning voor elk aspect van sportwerk.",
  pt: "Suporte abrangente para todos os segmentos do trabalho desportivo.",
  tr: "Spor çalışmasının her alanı için kapsamlı destek.",
  ar: "دعم شامل لكل جانب من جوانب العمل الرياضي.",
  zh: "为体育工作的每个方面提供全面支持。",
  ja: "スポーツ業務のあらゆる側面を包括的にサポート。",
  el: "Πλήρης υποστήριξη για κάθε πτυχή της αθλητικής εργασίας.",
  fi: "Kattava tuki jokaiselle urheilutyön osa-alueelle.",
  et: "Terviklik tugi iga sporditöö segmendi jaoks.",
  lt: "Visapusiška pagalba kiekvienai sportinio darbo sričiai.",
  lv: "Visaptverošs atbalsts katram sporta darba aspektam.",
  no: "Omfattende støtte for alle aspekter av sportsarbeid.",
  da: "Omfattende støtte til alle aspekter af sportsarbejde.",
  az: "İdman işinin hər sahəsi üçün əhatəli dəstək.",
  hy: "Ամբողջական աջակցություն սպորտային աշխատանքի յուրաքանչյուր հատվածի համար։",
  he: "תמיכה מקיפה בכל תחום של העבודה הספורטיבית.",
  is: "Heildarstuðningur fyrir hvern þátt í íþróttastarfi.",
  kk: "Спорттық жұмыстың әрбір аспектісіне кешенді қолдау.",
  mt: "Appoġġ komprensiv għal kull segment tax-xogħol sportiv.",
  sv: "Omfattande stöd för varje del av det sportsliga arbetet.",
  ka: "სპორტული მუშაობის ყველა ასპექტის სრულყოფილი მხარდაჭერა.",
  ga: "Tacaíocht chuimsitheach do gach gné den obair spóirt.",
  ca: "Suport integral per a cada àmbit del treball esportiu.",
};

export const modules: Record<
  SupportedLang,
  { [key: string]: { name: string; desc: string } }
> = {
  hr: {
    administracija: {
      name: "ADMINISTRACIJA",
      desc: "Evidencija i vođenje podataka o igračima, trenerima i osoblju.",
    },
    plan: {
      name: "PLAN",
      desc: "Planiranje i organizacija treninga, utakmica i ostalih aktivnosti.",
    },
    takticka_ploca: {
      name: "TAKTIČKA PLOČA",
      desc: "Digitalno crtanje vježbi i taktičkih situacija.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Centralizirana zbirka vježbi i ostalih gotovih sadržaja.",
    },
    trening: {
      name: "TRENING",
      desc: "Kreiranje, praćenje i analiza trenažnog procesa.",
    },
    testovi: {
      name: "TESTOVI",
      desc: "Kreiranje, praćenje i analiza procesa testiranja igrača.",
    },
    natjecanje: {
      name: "NATJECANJE",
      desc: "Planiranje, praćenje i analiza natjecateljskog procesa.",
    },
    utakmica: {
      name: "UTAKMICA",
      desc: "Priprema, vođenje u stvarnom vremenu i analiza utakmica.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Praćenje, analiza i evaluacija vlastitih i protivničkih igrača i timova.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Napredne statističke analize i AI podrška.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Praćenje zdravlja i upravljanje procesom rehabilitacije igrača.",
    },
    nutricionizam: {
      name: "NUTRICIONIZAM",
      desc: "Prehrambeni planovi i praćenje prehrane sportaša.",
    },
    oprema: {
      name: "OPREMA",
      desc: "Evidencija, planovi uporabe i upravljanje zalihama opreme.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planovi uporabe i upravljanje sportskim terenima i objektima.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Obavijesti o angažmanu te interna i eksterna komunikacija.",
    },
  },
  en: {
    administracija: {
      name: "ADMINISTRATION",
      desc: "Data management for players, coaches, and staff.",
    },
    plan: {
      name: "PLAN",
      desc: "Planning and organization of training sessions, matches, and other activities.",
    },
    takticka_ploca: {
      name: "TACTICAL BOARD",
      desc: "Digital drawing of drills and tactical situations.",
    },
    biblioteka: {
      name: "LIBRARY",
      desc: "Centralized collection of drills and ready-to-use materials.",
    },
    trening: {
      name: "TRAINING",
      desc: "Creation, monitoring, and analysis of the training process.",
    },
    testovi: {
      name: "TESTS",
      desc: "Creation, monitoring, and analysis of player testing processes.",
    },
    natjecanje: {
      name: "COMPETITION",
      desc: "Planning, monitoring, and analysis of the competition process.",
    },
    utakmica: {
      name: "MATCH",
      desc: "Preparation, live management, and analysis of matches.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Monitoring, analysis, and evaluation of players and teams.",
    },
    statistika: {
      name: "STATISTICS",
      desc: "Advanced statistical analyses and AI support.",
    },
    medicina: {
      name: "MEDICINE",
      desc: "Health monitoring and management of player rehabilitation processes.",
    },
    nutricionizam: {
      name: "NUTRITION",
      desc: "Diet plans and monitoring of athletes' nutrition.",
    },
    oprema: {
      name: "EQUIPMENT",
      desc: "Inventory, usage planning, and stock management.",
    },
    infrastruktura: {
      name: "INFRASTRUCTURE",
      desc: "Usage planning and management of sports fields and facilities.",
    },
    komunikacija: {
      name: "COMMUNICATION",
      desc: "Engagement notifications and internal and external communication.",
    },
  },
  de: {
    administracija: {
      name: "ADMINISTRATION",
      desc: "Erfassung und Verwaltung von Daten über Spieler, Trainer und Mitarbeiter.",
    },
    plan: {
      name: "PLANUNG",
      desc: "Planung und Organisation von Trainingseinheiten, Spielen und weiteren Aktivitäten.",
    },
    takticka_ploca: {
      name: "TAKTIKTAFEL",
      desc: "Digitales Zeichnen von Übungen und taktischen Situationen.",
    },
    biblioteka: {
      name: "BIBLIOTHEK",
      desc: "Zentralisierte Sammlung von Übungen und fertigen Inhalten.",
    },
    trening: {
      name: "TRAINING",
      desc: "Erstellung, Überwachung und Analyse des Trainingsprozesses.",
    },
    testovi: {
      name: "TESTS",
      desc: "Erstellung, Überwachung und Analyse von Spielertests.",
    },
    natjecanje: {
      name: "WETTKAMPF",
      desc: "Planung, Überwachung und Analyse des Wettkampfprozesses.",
    },
    utakmica: {
      name: "SPIEL",
      desc: "Vorbereitung, Live-Management und Analyse von Spielen.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Überwachung, Analyse und Bewertung von Spielern und Teams.",
    },
    statistika: {
      name: "STATISTIK",
      desc: "Fortgeschrittene statistische Analysen und KI-Unterstützung.",
    },
    medicina: {
      name: "MEDIZIN",
      desc: "Überwachung der Gesundheit und Verwaltung von Rehabilitationsprozessen der Spieler.",
    },
    nutricionizam: {
      name: "ERNÄHRUNG",
      desc: "Ernährungspläne und Überwachung der Sportlernahrung.",
    },
    oprema: {
      name: "AUSRÜSTUNG",
      desc: "Inventar, Nutzungsplanung und Lagerverwaltung.",
    },
    infrastruktura: {
      name: "INFRASTRUKTUR",
      desc: "Nutzungsplanung und Verwaltung von Sportplätzen und Einrichtungen.",
    },
    komunikacija: {
      name: "KOMMUNIKATION",
      desc: "Benachrichtigungen über Einsätze sowie interne und externe Kommunikation.",
    },
  },
  bs: {
    administracija: {
      name: "ADMINISTRACIJA",
      desc: "Evidencija i vođenje podataka o igračima, trenerima i osoblju.",
    },
    plan: {
      name: "PLAN",
      desc: "Planiranje i organizacija treninga, utakmica i ostalih aktivnosti.",
    },
    takticka_ploca: {
      name: "TAKTIČKA PLOČA",
      desc: "Digitalno crtanje vježbi i taktičkih situacija.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Centralizirana zbirka vježbi i ostalih gotovih sadržaja.",
    },
    trening: {
      name: "TRENING",
      desc: "Kreiranje, praćenje i analiza trenažnog procesa.",
    },
    testovi: {
      name: "TESTOVI",
      desc: "Kreiranje, praćenje i analiza procesa testiranja igrača.",
    },
    natjecanje: {
      name: "TAKMIČENJE",
      desc: "Planiranje, praćenje i analiza takmičarskog procesa.",
    },
    utakmica: {
      name: "UTAKMICA",
      desc: "Priprema, vođenje u stvarnom vremenu i analiza utakmica.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Praćenje, analiza i evaluacija igrača i timova.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Napredne statističke analize i AI podrška.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Praćenje zdravlja i upravljanje rehabilitacijom.",
    },
    nutricionizam: {
      name: "NUTRICIONIZAM",
      desc: "Planiranje i praćenje prehrane sportista.",
    },
    oprema: {
      name: "OPREMA",
      desc: "Evidencija, planiranje korištenja i upravljanje opremom.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planiranje korištenja i upravljanje terenima i objektima.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Interna i eksterna komunikacija i obavještenja.",
    },
  },
  "sr-Latn": {
    administracija: {
      name: "ADMINISTRACIJA",
      desc: "Evidencija i vođenje podataka o igračima, trenerima i osoblju.",
    },
    plan: {
      name: "PLAN",
      desc: "Planiranje i organizacija treninga, utakmica i ostalih aktivnosti.",
    },
    takticka_ploca: {
      name: "TAKTIČKA TABLA",
      desc: "Digitalno crtanje vežbi i taktičkih situacija.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Centralizovana zbirka vežbi i ostalih gotovih sadržaja.",
    },
    trening: {
      name: "TRENING",
      desc: "Kreiranje, praćenje i analiza trenažnog procesa.",
    },
    testovi: {
      name: "TESTOVI",
      desc: "Kreiranje, praćenje i analiza procesa testiranja igrača.",
    },
    natjecanje: {
      name: "TAKMIČENJE",
      desc: "Planiranje, praćenje i analiza takmičarskog procesa.",
    },
    utakmica: {
      name: "UTAKMICA",
      desc: "Priprema, vođenje u realnom vremenu i analiza utakmica.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Praćenje, analiza i evaluacija igrača i timova.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Napredne statističke analize i AI podrška.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Praćenje zdravlja i upravljanje rehabilitacijom.",
    },
    nutricionizam: {
      name: "NUTRICIONIZAM",
      desc: "Planiranje i praćenje ishrane sportista.",
    },
    oprema: {
      name: "OPREMA",
      desc: "Evidencija, planiranje korišćenja i upravljanje opremom.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planiranje korišćenja i upravljanje terenima i objektima.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Interna i eksterna komunikacija i obaveštenja.",
    },
  },
  "sr-Cyrl": {
    administracija: {
      name: "АДМИНИСТРАЦИЈА",
      desc: "Евиденција и вођење података о играчима, тренерима и особљу.",
    },
    plan: {
      name: "ПЛАН",
      desc: "Планирање и организација тренинга, утакмица и осталих активности.",
    },
    takticka_ploca: {
      name: "ТАКТИЧКА ТАБЛА",
      desc: "Дигитално цртање вежби и тактичких ситуација.",
    },
    biblioteka: {
      name: "БИБЛИОТЕКА",
      desc: "Централизована збирка вежби и осталих готових садржаја.",
    },
    trening: {
      name: "ТРЕНИНГ",
      desc: "Креирање, праћење и анализа тренажног процеса.",
    },
    testovi: {
      name: "ТЕСТОВИ",
      desc: "Креирање, праћење и анализа процеса тестирања играча.",
    },
    natjecanje: {
      name: "ТАКМИЧЕЊЕ",
      desc: "Планирање, праћење и анализа такмичарског процеса.",
    },
    utakmica: {
      name: "УТАКМИЦА",
      desc: "Припрема, вођење у реалном времену и анализа утакмица.",
    },
    skauting: {
      name: "СКАУТИНГ",
      desc: "Праћење, анализа и евалуација играча и тимова.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Напредне статистичке анализе и АИ подршка.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Праћење здравља и управљање рехабилитацијом.",
    },
    nutricionizam: {
      name: "НУТРИЦИОНИЗАМ",
      desc: "Планирање и праћење исхране спортиста.",
    },
    oprema: {
      name: "ОПРЕМА",
      desc: "Евиденција, планирање коришћења и управљање опремом.",
    },
    infrastruktura: {
      name: "ИНФРАСТРУКТУРА",
      desc: "Планирање коришћења и управљање теренима и објектима.",
    },
    komunikacija: {
      name: "КОМУНИКАЦИЈА",
      desc: "Интерна и екстерна комуникација и обавештења.",
    },
  },
  sl: {
    administracija: {
      name: "ADMINISTRACIJA",
      desc: "Vodenje evidenc in podatkov o igralcih, trenerjih in osebju.",
    },
    plan: {
      name: "NAČRT",
      desc: "Načrtovanje in organizacija treningov, tekem in drugih aktivnosti.",
    },
    takticka_ploca: {
      name: "TAKTIČNA TABLA",
      desc: "Digitalno risanje vaj in taktičnih situacij.",
    },
    biblioteka: {
      name: "KNJIŽNICA",
      desc: "Centralizirana zbirka vaj in drugih pripravljenih vsebin.",
    },
    trening: {
      name: "TRENING",
      desc: "Ustvarjanje, spremljanje in analiza trenažnega procesa.",
    },
    testovi: {
      name: "TESTI",
      desc: "Ustvarjanje, spremljanje in analiza testiranja igralcev.",
    },
    natjecanje: {
      name: "TEKMOVANJE",
      desc: "Načrtovanje, spremljanje in analiza tekmovalnega procesa.",
    },
    utakmica: {
      name: "TEKMA",
      desc: "Priprava, vodenje v realnem času in analiza tekem.",
    },
    skauting: {
      name: "SKAVTIRANJE",
      desc: "Spremljanje, analiza in ocenjevanje igralcev in ekip.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Napredne statistične analize in podpora AI.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Spremljanje zdravja in upravljanje rehabilitacije.",
    },
    nutricionizam: {
      name: "PREHRANA",
      desc: "Načrtovanje in spremljanje prehrane športnikov.",
    },
    oprema: {
      name: "OPREMA",
      desc: "Evidenca, načrti uporabe in upravljanje opreme.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Načrti uporabe in upravljanje športnih objektov in terenov.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Interna in eksterna komunikacija ter obvestila.",
    },
  },
  mk: {
    administracija: {
      name: "АДМИНИСТРАЦИЈА",
      desc: "Евиденција и управување со податоци за играчи, тренери и персонал.",
    },
    plan: {
      name: "ПЛАН",
      desc: "Планирање и организација на тренинзи, натпревари и други активности.",
    },
    takticka_ploca: {
      name: "ТАКТИЧКА ТАБЛА",
      desc: "Дигитално цртање на вежби и тактички ситуации.",
    },
    biblioteka: {
      name: "БИБЛИОТЕКА",
      desc: "Централизирана збирка на вежби и подготвени материјали.",
    },
    trening: {
      name: "ТРЕНИНГ",
      desc: "Креирање, следење и анализа на тренажниот процес.",
    },
    testovi: {
      name: "ТЕСТОВИ",
      desc: "Креирање, следење и анализа на тестирањето на играчи.",
    },
    natjecanje: {
      name: "НАТПРЕВАР",
      desc: "Планирање, следење и анализа на натпреварувачкиот процес.",
    },
    utakmica: {
      name: "НАТПРЕВАР",
      desc: "Подготовка, водење во реално време и анализа на натпревари.",
    },
    skauting: {
      name: "ИЗВИДУВАЊЕ",
      desc: "Следење, анализа и проценка на играчи и тимови.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Напредна статистичка анализа и поддршка со вештачка интелигенција.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Следење на здравјето и управување со рехабилитација на играчи.",
    },
    nutricionizam: {
      name: "НУТРИЦИОНИЗАМ",
      desc: "Планови за исхрана и следење на исхраната на спортистите.",
    },
    oprema: {
      name: "ОПРЕМА",
      desc: "Евиденција, планови за употреба и управување со опрема.",
    },
    infrastruktura: {
      name: "ИНФРАСТРУКТУРА",
      desc: "Планирање и управување со спортски терени и објекти.",
    },
    komunikacija: {
      name: "КОМУНИКАЦИЈА",
      desc: "Известувања и внатрешна и надворешна комуникација.",
    },
  },
  cnr: {
    administracija: {
      name: "ADMINISTRACIJA",
      desc: "Evidencija i upravljanje podacima o igračima, trenerima i osoblju.",
    },
    plan: {
      name: "PLAN",
      desc: "Planiranje i organizacija treninga, utakmica i drugih aktivnosti.",
    },
    takticka_ploca: {
      name: "TAKTIČKA TABLA",
      desc: "Digitalno crtanje vježbi i taktičkih situacija.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Centralizovana zbirka vježbi i gotovih sadržaja.",
    },
    trening: {
      name: "TRENING",
      desc: "Kreiranje, praćenje i analiza trenažnog procesa.",
    },
    testovi: {
      name: "TESTOVI",
      desc: "Kreiranje, praćenje i analiza procesa testiranja igrača.",
    },
    natjecanje: {
      name: "TAKMIČENJE",
      desc: "Planiranje, praćenje i analiza takmičarskog procesa.",
    },
    utakmica: {
      name: "UTAKMICA",
      desc: "Priprema, vođenje uživo i analiza utakmica.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Praćenje, analiza i evaluacija igrača i timova.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Napredna statistička analiza i podrška vještačke inteligencije.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Praćenje zdravlja i upravljanje rehabilitacijom igrača.",
    },
    nutricionizam: {
      name: "NUTRICIONIZAM",
      desc: "Planiranje i praćenje ishrane sportista.",
    },
    oprema: {
      name: "OPREMA",
      desc: "Evidencija, planovi korišćenja i upravljanje zalihama opreme.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planovi korišćenja i upravljanje sportskim objektima i terenima.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Interna i eksterna komunikacija i obavještenja o angažmanu.",
    },
  },
  fr: {
    administracija: {
      name: "ADMINISTRATION",
      desc: "Gestion des données des joueurs, entraîneurs et membres du personnel.",
    },
    plan: {
      name: "PLANIFICATION",
      desc: "Planification des entraînements, matchs et autres activités.",
    },
    takticka_ploca: {
      name: "TABLEAU TACTIQUE",
      desc: "Dessins numériques d'exercices et de situations tactiques.",
    },
    biblioteka: {
      name: "BIBLIOTHÈQUE",
      desc: "Collection centralisée d'exercices et de contenus prêts à l'emploi.",
    },
    trening: {
      name: "ENTRAÎNEMENT",
      desc: "Création, suivi et analyse du processus d'entraînement.",
    },
    testovi: {
      name: "TESTS",
      desc: "Création, suivi et analyse des tests des joueurs.",
    },
    natjecanje: {
      name: "COMPÉTITION",
      desc: "Planification, suivi et analyse du processus de compétition.",
    },
    utakmica: {
      name: "MATCH",
      desc: "Préparation, gestion en temps réel et analyse des matchs.",
    },
    skauting: {
      name: "RECRUTEMENT",
      desc: "Suivi, analyse et évaluation des joueurs et des équipes.",
    },
    statistika: {
      name: "STATISTIQUES",
      desc: "Analyses statistiques avancées et support IA.",
    },
    medicina: {
      name: "MÉDECINE",
      desc: "Suivi de la santé et gestion des processus de réhabilitation.",
    },
    nutricionizam: {
      name: "NUTRITION",
      desc: "Plans alimentaires et suivi de la nutrition des athlètes.",
    },
    oprema: {
      name: "ÉQUIPEMENT",
      desc: "Gestion des stocks, planification d'utilisation et inventaire.",
    },
    infrastruktura: {
      name: "INFRASTRUCTURE",
      desc: "Planification et gestion des terrains et installations sportives.",
    },
    komunikacija: {
      name: "COMMUNICATION",
      desc: "Notifications d'engagement et communication interne/externe.",
    },
  },
  pt: {
    administracija: {
      name: "ADMINISTRAÇÃO",
      desc: "Gestão de dados de jogadores, treinadores e pessoal.",
    },
    plan: {
      name: "PLANO",
      desc: "Planejamento e organização de treinos, jogos e outras atividades.",
    },
    takticka_ploca: {
      name: "QUADRO TÁTICO",
      desc: "Desenho digital de exercícios e situações táticas.",
    },
    biblioteka: {
      name: "BIBLIOTECA",
      desc: "Coleção centralizada de exercícios e conteúdos prontos.",
    },
    trening: {
      name: "TREINO",
      desc: "Criação, acompanhamento e análise do processo de treino.",
    },
    testovi: {
      name: "TESTES",
      desc: "Criação, acompanhamento e análise de testes dos jogadores.",
    },
    natjecanje: {
      name: "COMPETIÇÃO",
      desc: "Planejamento, acompanhamento e análise do processo competitivo.",
    },
    utakmica: {
      name: "JOGO",
      desc: "Preparação, gestão ao vivo e análise de jogos.",
    },
    skauting: {
      name: "OBSERVAÇÃO",
      desc: "Monitoramento, análise e avaliação de jogadores e equipes.",
    },
    statistika: {
      name: "ESTATÍSTICAS",
      desc: "Análises estatísticas avançadas e suporte com IA.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Acompanhamento da saúde e gestão de reabilitação dos jogadores.",
    },
    nutricionizam: {
      name: "NUTRIÇÃO",
      desc: "Planos alimentares e acompanhamento da nutrição dos atletas.",
    },
    oprema: {
      name: "EQUIPAMENTO",
      desc: "Inventário, planejamento de uso e gestão de estoques.",
    },
    infrastruktura: {
      name: "INFRAESTRUTURA",
      desc: "Planejamento de uso e gestão de campos e instalações esportivas.",
    },
    komunikacija: {
      name: "COMUNICAÇÃO",
      desc: "Notificações de envolvimento e comunicação interna e externa.",
    },
  },
  es: {
    administracija: {
      name: "ADMINISTRACIÓN",
      desc: "Gestión de datos de jugadores, entrenadores y personal.",
    },
    plan: {
      name: "PLANIFICACIÓN",
      desc: "Planificación y organización de entrenamientos, partidos y otras actividades.",
    },
    takticka_ploca: {
      name: "PIZARRA TÁCTICA",
      desc: "Dibujo digital de ejercicios y situaciones tácticas.",
    },
    biblioteka: {
      name: "BIBLIOTECA",
      desc: "Colección centralizada de ejercicios y contenidos preparados.",
    },
    trening: {
      name: "ENTRENAMIENTO",
      desc: "Creación, seguimiento y análisis del proceso de entrenamiento.",
    },
    testovi: {
      name: "PRUEBAS",
      desc: "Creación, seguimiento y análisis de las pruebas de los jugadores.",
    },
    natjecanje: {
      name: "COMPETICIÓN",
      desc: "Planificación, seguimiento y análisis del proceso competitivo.",
    },
    utakmica: {
      name: "PARTIDO",
      desc: "Preparación, gestión en tiempo real y análisis de partidos.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Seguimiento, análisis y evaluación de jugadores y equipos.",
    },
    statistika: {
      name: "ESTADÍSTICAS",
      desc: "Análisis estadísticos avanzados y apoyo de IA.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Seguimiento de la salud y gestión de rehabilitación de los jugadores.",
    },
    nutricionizam: {
      name: "NUTRICIÓN",
      desc: "Planes nutricionales y seguimiento de la alimentación de los atletas.",
    },
    oprema: {
      name: "EQUIPAMIENTO",
      desc: "Inventario, planificación de uso y gestión de existencias.",
    },
    infrastruktura: {
      name: "INFRAESTRUCTURA",
      desc: "Planificación de uso y gestión de campos e instalaciones deportivas.",
    },
    komunikacija: {
      name: "COMUNICACIÓN",
      desc: "Notificaciones de participación y comunicación interna y externa.",
    },
  },
  it: {
    administracija: {
      name: "AMMINISTRAZIONE",
      desc: "Gestione dei dati di giocatori, allenatori e personale.",
    },
    plan: {
      name: "PIANIFICAZIONE",
      desc: "Pianificazione e organizzazione di allenamenti, partite e altre attività.",
    },
    takticka_ploca: {
      name: "LAVAGNA TATTICA",
      desc: "Disegno digitale di esercitazioni e situazioni tattiche.",
    },
    biblioteka: {
      name: "BIBLIOTECA",
      desc: "Raccolta centralizzata di esercizi e contenuti pronti all'uso.",
    },
    trening: {
      name: "ALLENAMENTO",
      desc: "Creazione, monitoraggio e analisi del processo di allenamento.",
    },
    testovi: {
      name: "TEST",
      desc: "Creazione, monitoraggio e analisi dei test dei giocatori.",
    },
    natjecanje: {
      name: "COMPETIZIONE",
      desc: "Pianificazione, monitoraggio e analisi del processo competitivo.",
    },
    utakmica: {
      name: "PARTITA",
      desc: "Preparazione, gestione in tempo reale e analisi delle partite.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Monitoraggio, analisi e valutazione di giocatori e squadre.",
    },
    statistika: {
      name: "STATISTICHE",
      desc: "Analisi statistiche avanzate e supporto AI.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Monitoraggio della salute e gestione della riabilitazione dei giocatori.",
    },
    nutricionizam: {
      name: "NUTRIZIONE",
      desc: "Piani nutrizionali e monitoraggio dell'alimentazione degli atleti.",
    },
    oprema: {
      name: "ATTREZZATURA",
      desc: "Inventario, pianificazione dell'uso e gestione delle scorte.",
    },
    infrastruktura: {
      name: "INFRASTRUTTURE",
      desc: "Pianificazione e gestione di campi e impianti sportivi.",
    },
    komunikacija: {
      name: "COMUNICAZIONE",
      desc: "Notifiche di impegno e comunicazione interna ed esterna.",
    },
  },
  sq: {
    administracija: {
      name: "ADMINISTRIMI",
      desc: "Menaxhimi i të dhënave për lojtarët, trajnerët dhe stafin.",
    },
    plan: {
      name: "PLANIFIKIMI",
      desc: "Planifikimi dhe organizimi i stërvitjeve, ndeshjeve dhe aktiviteteve të tjera.",
    },
    takticka_ploca: {
      name: "TABLA TAKTIKE",
      desc: "Vizatim dixhital i ushtrimeve dhe situatave taktike.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Koleksion i centralizuar i ushtrimeve dhe materialeve të gatshme.",
    },
    trening: {
      name: "STËRVITJE",
      desc: "Krijimi, ndjekja dhe analiza e procesit stërvitor.",
    },
    testovi: {
      name: "TESTE",
      desc: "Krijimi, ndjekja dhe analiza e testimeve të lojtarëve.",
    },
    natjecanje: {
      name: "GARA",
      desc: "Planifikimi, ndjekja dhe analiza e procesit garues.",
    },
    utakmica: {
      name: "NDESHJE",
      desc: "Përgatitja, menaxhimi në kohë reale dhe analiza e ndeshjeve.",
    },
    skauting: {
      name: "SKAUTIMI",
      desc: "Monitorimi, analiza dhe vlerësimi i lojtarëve dhe ekipeve.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Analiza statistikore të avancuara dhe mbështetje nga AI.",
    },
    medicina: {
      name: "MJEKËSIA",
      desc: "Monitorimi i shëndetit dhe menaxhimi i rehabilitimit të lojtarëve.",
    },
    nutricionizam: {
      name: "USHQIMI",
      desc: "Plane ushqimore dhe ndjekja e ushqyerjes së sportistëve.",
    },
    oprema: {
      name: "PAISJET",
      desc: "Inventar, planifikim përdorimi dhe menaxhim i pajisjeve.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planifikimi dhe menaxhimi i fushave dhe objekteve sportive.",
    },
    komunikacija: {
      name: "KOMUNIKIMI",
      desc: "Njoftime për angazhime dhe komunikim i brendshëm dhe i jashtëm.",
    },
  },
  hy: {
    administracija: {
      name: "ԱԴՄԻՆԻՍՏՐԱՑԻԱ",
      desc: "Տվյալների կառավարում խաղացողների, մարզիչների և անձնակազմի համար։",
    },
    plan: {
      name: "ՊԼԱՆԱՎՈՐՈՒՄ",
      desc: "Վարժանքների, խաղերի և այլ գործողությունների պլանավորում և կազմակերպում։",
    },
    takticka_ploca: {
      name: "ՏԱԿՏԻԿԱԿԱՆ ՏԱԽՏԱ",
      desc: "Վարժանքների և տակտիկական իրավիճակների թվային գծագրում։",
    },
    biblioteka: {
      name: "ԳՐԱԴԱՐԱՆ",
      desc: "Կենտրոնացված վարժանքների և պատրաստի բովանդակության հավաքածու։",
    },
    trening: {
      name: "ՄԱՐԶՈՒՄՆԵՐ",
      desc: "Մարզման գործընթացի ստեղծում, հետևում և վերլուծություն։",
    },
    testovi: {
      name: "ԹԵՍՏԵՐ",
      desc: "Խաղացողների թեստավորման գործընթացի ստեղծում, հետևում և վերլուծություն։",
    },
    natjecanje: {
      name: "ՄՐՑՈՒՅԹ",
      desc: "Մրցակցային գործընթացի պլանավորում, վերահսկում և վերլուծություն։",
    },
    utakmica: {
      name: "ԽԱՂ",
      desc: "Խաղերի նախապատրաստում, ընթացիկ կառավարում և վերլուծություն։",
    },
    skauting: {
      name: "ՀԵՏԱԽՈՒԶՈՒՄ",
      desc: "Խաղացողների և թիմերի հետևում, վերլուծություն և գնահատում։",
    },
    statistika: {
      name: "ՎԻՃԱԿԱԳՐՈՒԹՅՈՒՆ",
      desc: "Ընդլայնված վիճակագրական վերլուծություններ և ԱԻ աջակցություն։",
    },
    medicina: {
      name: "ԲԺՇԿՈՒԹՅՈՒՆ",
      desc: "Առողջության վերահսկում և վերականգնման գործընթացի կառավարում։",
    },
    nutricionizam: {
      name: "ՍՆՆԴԱԲԱՐՁՈՒԹՅՈՒՆ",
      desc: "Սննդային պլաններ և մարզիկների սննդի մոնիթորինգ։",
    },
    oprema: {
      name: "ՍԱՐՔԱՎՈՐՈՒՄ",
      desc: "Պահեստի հաշվառում, օգտագործման պլանավորում և կառավարում։",
    },
    infrastruktura: {
      name: "ԻՆՖՐԱԿԱՌՈՒՑՎԱԾՔ",
      desc: "Սպորտային դաշտերի և հաստատությունների պլանավորում և կառավարում։",
    },
    komunikacija: {
      name: "ՀԱՂՈՐԴԱԿՑՈՒԹՅՈՒՆ",
      desc: "Ներգրավվածության ծանուցումներ և ներքին/արտաքին հաղորդակցություն։",
    },
  },
  az: {
    administracija: {
      name: "ADMİNİSTRASİYA",
      desc: "Oyunçular, məşqçilər və heyət üçün məlumatların idarə olunması.",
    },
    plan: {
      name: "PLANLAŞDIRMA",
      desc: "Təlimlər, oyunlar və digər fəaliyyətlərin planlaşdırılması və təşkili.",
    },
    takticka_ploca: {
      name: "TAKTİK LÖVHƏ",
      desc: "Tapşırıqlar və taktiki vəziyyətlərin rəqəmsal çəkilməsi.",
    },
    biblioteka: {
      name: "KİTABXANA",
      desc: "Tapşırıqlar və hazır məzmunun mərkəzləşdirilmiş kolleksiyası.",
    },
    trening: {
      name: "MƏŞQ",
      desc: "Məşq prosesinin yaradılması, izlənməsi və təhlili.",
    },
    testovi: {
      name: "TESTLƏR",
      desc: "Oyunçuların test prosesi üçün yaradılma, izləmə və analiz.",
    },
    natjecanje: {
      name: "YARIŞ",
      desc: "Yarış prosesinin planlaşdırılması, izlənməsi və təhlili.",
    },
    utakmica: {
      name: "OYUN",
      desc: "Oyunların hazırlanması, real vaxt idarəsi və təhlili.",
    },
    skauting: {
      name: "SKAUTİNG",
      desc: "Oyunçuların və komandaların izlənməsi, təhlili və qiymətləndirilməsi.",
    },
    statistika: {
      name: "STATİSTİKA",
      desc: "İrəliləmiş statistik analizlər və süni intellekt dəstəyi.",
    },
    medicina: {
      name: "TİBB",
      desc: "Oyunçuların sağlamlığının izlənməsi və reabilitasiya prosesinin idarə edilməsi.",
    },
    nutricionizam: {
      name: "QİDALANMA",
      desc: "İdmançılar üçün qida planları və qidalanmanın izlənməsi.",
    },
    oprema: {
      name: "AVADANLIQ",
      desc: "Avadanlıq ehtiyatı, istifadənin planlaşdırılması və idarə olunması.",
    },
    infrastruktura: {
      name: "İNFRASRTUKTUR",
      desc: "İdman sahələrinin və obyektlərinin planlaşdırılması və idarə edilməsi.",
    },
    komunikacija: {
      name: "KOMMUNİKASİYA",
      desc: "İştirakla bağlı bildirişlər və daxili/xarici ünsiyyət.",
    },
  },
  bg: {
    administracija: {
      name: "АДМИНИСТРАЦИЯ",
      desc: "Управление на данни за играчи, треньори и персонал.",
    },
    plan: {
      name: "ПЛАНИРАНЕ",
      desc: "Планиране и организация на тренировки, мачове и други дейности.",
    },
    takticka_ploca: {
      name: "ТАКТИЧЕСКА ДЪСКА",
      desc: "Цифрово изчертаване на упражнения и тактически ситуации.",
    },
    biblioteka: {
      name: "БИБЛИОТЕКА",
      desc: "Централизирана колекция от упражнения и готово съдържание.",
    },
    trening: {
      name: "ТРЕНИРОВКА",
      desc: "Създаване, проследяване и анализ на тренировъчния процес.",
    },
    testovi: {
      name: "ТЕСТОВЕ",
      desc: "Създаване, проследяване и анализ на тестове за играчи.",
    },
    natjecanje: {
      name: "СЪСТЕЗАНИЕ",
      desc: "Планиране, проследяване и анализ на състезателния процес.",
    },
    utakmica: {
      name: "МАЧ",
      desc: "Подготовка, управление в реално време и анализ на мачове.",
    },
    skauting: {
      name: "СКАУТИНГ",
      desc: "Проследяване, анализ и оценка на играчи и отбори.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Разширени статистически анализи и поддръжка с ИИ.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Проследяване на здравето и управление на рехабилитационния процес.",
    },
    nutricionizam: {
      name: "ХРАНЕНЕ",
      desc: "Планове за хранене и наблюдение на храненето на спортистите.",
    },
    oprema: {
      name: "ОБОРУДВАНЕ",
      desc: "Регистрация, планиране на използването и управление на запасите.",
    },
    infrastruktura: {
      name: "ИНФРАСТРУКТУРА",
      desc: "Планиране и управление на спортни терени и съоръжения.",
    },
    komunikacija: {
      name: "КОМУНИКАЦИЯ",
      desc: "Известия за ангажименти и вътрешна/външна комуникация.",
    },
  },
  cs: {
    administracija: {
      name: "ADMINISTRATIVA",
      desc: "Správa dat o hráčích, trenérech a personálu.",
    },
    plan: {
      name: "PLÁN",
      desc: "Plánování a organizace tréninků, zápasů a dalších aktivit.",
    },
    takticka_ploca: {
      name: "TAKTICKÁ TABULE",
      desc: "Digitální kreslení cvičení a taktických situací.",
    },
    biblioteka: {
      name: "KNIHOVNA",
      desc: "Centralizovaná sbírka cvičení a připraveného obsahu.",
    },
    trening: {
      name: "TRÉNINK",
      desc: "Vytváření, sledování a analýza tréninkového procesu.",
    },
    testovi: {
      name: "TESTY",
      desc: "Vytváření, sledování a analýza testovacích procesů hráčů.",
    },
    natjecanje: {
      name: "SOUTĚŽ",
      desc: "Plánování, sledování a analýza soutěžního procesu.",
    },
    utakmica: {
      name: "ZÁPAS",
      desc: "Příprava, řízení v reálném čase a analýza zápasů.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Sledování, analýza a hodnocení hráčů a týmů.",
    },
    statistika: {
      name: "STATISTIKY",
      desc: "Pokročilé statistické analýzy a podpora umělé inteligence.",
    },
    medicina: {
      name: "MEDICÍNA",
      desc: "Sledování zdraví a řízení procesu rehabilitace hráčů.",
    },
    nutricionizam: {
      name: "VÝŽIVA",
      desc: "Stravovací plány a sledování výživy sportovců.",
    },
    oprema: {
      name: "VYBAVENÍ",
      desc: "Inventář, plánování využití a správa zásob vybavení.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Plánování a správa sportovišť a zařízení.",
    },
    komunikacija: {
      name: "KOMUNIKACE",
      desc: "Oznámení o zapojení a interní a externí komunikace.",
    },
  },
  da: {
    administracija: {
      name: "ADMINISTRATION",
      desc: "Administration og styring af data om spillere, trænere og personale.",
    },
    plan: {
      name: "PLANLÆGNING",
      desc: "Planlægning og organisering af træninger, kampe og andre aktiviteter.",
    },
    takticka_ploca: {
      name: "TAKTISK TAVLE",
      desc: "Digital tegning af øvelser og taktiske situationer.",
    },
    biblioteka: {
      name: "BIBLIOTEK",
      desc: "Centraliseret samling af øvelser og foruddefineret indhold.",
    },
    trening: {
      name: "TRÆNING",
      desc: "Oprettelse, overvågning og analyse af træningsprocessen.",
    },
    testovi: {
      name: "TESTS",
      desc: "Oprettelse, overvågning og analyse af spilleres testprocesser.",
    },
    natjecanje: {
      name: "KONKURRENCE",
      desc: "Planlægning, overvågning og analyse af konkurrenceprocessen.",
    },
    utakmica: {
      name: "KAMP",
      desc: "Forberedelse, livehåndtering og analyse af kampe.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Overvågning, analyse og vurdering af spillere og hold.",
    },
    statistika: {
      name: "STATISTIK",
      desc: "Avancerede statistiske analyser og AI-understøttelse.",
    },
    medicina: {
      name: "MEDICIN",
      desc: "Overvågning af helbred og styring af spillernes rehabilitering.",
    },
    nutricionizam: {
      name: "ERNÆRING",
      desc: "Kostplaner og overvågning af atleters ernæring.",
    },
    oprema: {
      name: "UDSTYR",
      desc: "Registrering, brugsplanlægning og lagerstyring af udstyr.",
    },
    infrastruktura: {
      name: "INFRASTRUKTUR",
      desc: "Planlægning og styring af sportsbaner og faciliteter.",
    },
    komunikacija: {
      name: "KOMMUNIKATION",
      desc: "Notifikationer om engagement samt intern og ekstern kommunikation.",
    },
  },
  et: {
    administracija: {
      name: "ADMINISTRATSIOON",
      desc: "Mängijate, treenerite ja personali andmete haldamine.",
    },
    plan: {
      name: "PLANEERIMINE",
      desc: "Treeningute, mängude ja muude tegevuste kavandamine ja korraldamine.",
    },
    takticka_ploca: {
      name: "TAKTIKATABEL",
      desc: "Harjutuste ja taktikaliste olukordade digitaalne joonistamine.",
    },
    biblioteka: {
      name: "RAAMATUKOGU",
      desc: "Keskne kogu harjutusi ja valmis sisu.",
    },
    trening: {
      name: "TREENING",
      desc: "Treeningprotsessi loomine, jälgimine ja analüüs.",
    },
    testovi: {
      name: "TESTID",
      desc: "Mängijate testimisprotsesside loomine, jälgimine ja analüüs.",
    },
    natjecanje: {
      name: "VÕISTLUS",
      desc: "Võistlusprotsessi planeerimine, jälgimine ja analüüs.",
    },
    utakmica: {
      name: "MÄNG",
      desc: "Mängude ettevalmistamine, reaalajas juhtimine ja analüüs.",
    },
    skauting: {
      name: "SKAUTIMINE",
      desc: "Mängijate ja meeskondade jälgimine, analüüs ja hindamine.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Täpsem statistiline analüüs ja tehisintellekti tugi.",
    },
    medicina: {
      name: "MEDITSIIN",
      desc: "Tervise jälgimine ja mängijate taastumisprotsessi haldamine.",
    },
    nutricionizam: {
      name: "TOITUMINE",
      desc: "Toitumiskavad ja sportlaste toitumise jälgimine.",
    },
    oprema: {
      name: "VARUSTUS",
      desc: "Inventuur, kasutusplaanid ja varude haldamine.",
    },
    infrastruktura: {
      name: "TARISTU",
      desc: "Spordiväljakute ja rajatiste planeerimine ja haldamine.",
    },
    komunikacija: {
      name: "KOMMUNIKATSIOON",
      desc: "Kaasamise teated ning sisemine ja väline suhtlus.",
    },
  },
  fi: {
    administracija: {
      name: "HALLINTO",
      desc: "Pelaajien, valmentajien ja henkilöstön tietojen hallinta.",
    },
    plan: {
      name: "SUUNNITELMA",
      desc: "Harjoitusten, otteluiden ja muiden tapahtumien suunnittelu ja organisointi.",
    },
    takticka_ploca: {
      name: "TAKTINEN TAULU",
      desc: "Harjoitusten ja taktisten tilanteiden digitaalinen piirto.",
    },
    biblioteka: {
      name: "KIRJASTO",
      desc: "Keskitetty kokoelma harjoituksia ja valmista sisältöä.",
    },
    trening: {
      name: "HARJOITUS",
      desc: "Harjoitusprosessin luominen, seuranta ja analysointi.",
    },
    testovi: {
      name: "TESTIT",
      desc: "Pelaajien testausprosessien luominen, seuranta ja analysointi.",
    },
    natjecanje: {
      name: "KILPAILU",
      desc: "Kilpailuprosessin suunnittelu, seuranta ja analyysi.",
    },
    utakmica: {
      name: "OTTELU",
      desc: "Otteluiden valmistelu, reaaliaikainen hallinta ja analyysi.",
    },
    skauting: {
      name: "SCOUTTAUS",
      desc: "Pelaajien ja joukkueiden seuranta, analyysi ja arviointi.",
    },
    statistika: {
      name: "TILASTOT",
      desc: "Edistyneet tilastoanalyysit ja tekoälytuki.",
    },
    medicina: {
      name: "LÄÄKETIEDE",
      desc: "Pelaajien terveyden seuranta ja kuntoutuksen hallinta.",
    },
    nutricionizam: {
      name: "RAVINTO",
      desc: "Ruokavaliot ja urheilijoiden ravitsemuksen seuranta.",
    },
    oprema: {
      name: "VARUSTEET",
      desc: "Varastot, käyttöönottosuunnitelmat ja varusteiden hallinta.",
    },
    infrastruktura: {
      name: "INFRASTRUKTUURI",
      desc: "Kenttien ja urheilutilojen käyttö ja hallinta.",
    },
    komunikacija: {
      name: "VIESTINTÄ",
      desc: "Ilmoitukset ja sisäinen/ulkoisen viestinnän hallinta.",
    },
  },
  el: {
    administracija: {
      name: "ΔΙΟΙΚΗΣΗ",
      desc: "Διαχείριση δεδομένων για παίκτες, προπονητές και προσωπικό.",
    },
    plan: {
      name: "ΣΧΕΔΙΟ",
      desc: "Προγραμματισμός και οργάνωση προπονήσεων, αγώνων και άλλων δραστηριοτήτων.",
    },
    takticka_ploca: {
      name: "ΤΑΚΤΙΚΟΣ ΠΙΝΑΚΑΣ",
      desc: "Ψηφιακή σχεδίαση ασκήσεων και τακτικών καταστάσεων.",
    },
    biblioteka: {
      name: "ΒΙΒΛΙΟΘΗΚΗ",
      desc: "Κεντρική συλλογή ασκήσεων και έτοιμου περιεχομένου.",
    },
    trening: {
      name: "ΠΡΟΠΟΝΗΣΗ",
      desc: "Δημιουργία, παρακολούθηση και ανάλυση της προπονητικής διαδικασίας.",
    },
    testovi: {
      name: "ΤΕΣΤ",
      desc: "Δημιουργία, παρακολούθηση και ανάλυση των δοκιμών παικτών.",
    },
    natjecanje: {
      name: "ΑΓΩΝΑΣ",
      desc: "Προγραμματισμός, παρακολούθηση και ανάλυση της αγωνιστικής διαδικασίας.",
    },
    utakmica: {
      name: "ΑΝΑΜΕΤΡΗΣΗ",
      desc: "Προετοιμασία, ζωντανή διαχείριση και ανάλυση αγώνων.",
    },
    skauting: {
      name: "ΣΚΑΟΥΤΙΝΓΚ",
      desc: "Παρακολούθηση, ανάλυση και αξιολόγηση παικτών και ομάδων.",
    },
    statistika: {
      name: "ΣΤΑΤΙΣΤΙΚΑ",
      desc: "Προηγμένες στατιστικές αναλύσεις και υποστήριξη AI.",
    },
    medicina: {
      name: "ΙΑΤΡΙΚΗ",
      desc: "Παρακολούθηση της υγείας και διαχείριση της αποκατάστασης των παικτών.",
    },
    nutricionizam: {
      name: "ΔΙΑΤΡΟΦΗ",
      desc: "Διατροφικά πλάνα και παρακολούθηση της διατροφής των αθλητών.",
    },
    oprema: {
      name: "ΕΞΟΠΛΙΣΜΟΣ",
      desc: "Καταγραφή, προγραμματισμός χρήσης και διαχείριση αποθεμάτων.",
    },
    infrastruktura: {
      name: "ΥΠΟΔΟΜΗ",
      desc: "Προγραμματισμός και διαχείριση αθλητικών εγκαταστάσεων και γηπέδων.",
    },
    komunikacija: {
      name: "ΕΠΙΚΟΙΝΩΝΙΑ",
      desc: "Ειδοποιήσεις συμμετοχής και εσωτερική/εξωτερική επικοινωνία.",
    },
  },
  ka: {
    administracija: {
      name: "ადმინისტრაცია",
      desc: "მოთამაშეების, მწვრთნელებისა და პერსონალის მონაცემების მართვა.",
    },
    plan: {
      name: "გეგმა",
      desc: "ვარჯიშების, მატჩებისა და სხვა აქტივობების დაგეგმვა და ორგანიზება.",
    },
    takticka_ploca: {
      name: "ტაქტიკური დაფა",
      desc: "ვარჯიშებისა და ტაქტიკური სიტუაციების ციფრული ხატვა.",
    },
    biblioteka: {
      name: "ბიბლიოთეკა",
      desc: "ვარჯიშებისა და მზა მასალების ცენტრალიზებული კოლექცია.",
    },
    trening: {
      name: "ვარჯიში",
      desc: "ვარჯიშის პროცესის შექმნა, მონიტორინგი და ანალიზი.",
    },
    testovi: {
      name: "ტესტები",
      desc: "მოთამაშეთა ტესტირების პროცესის შექმნა, მონიტორინგი და ანალიზი.",
    },
    natjecanje: {
      name: "შეჯიბრება",
      desc: "შეჯიბრებითი პროცესის დაგეგმვა, მონიტორინგი და ანალიზი.",
    },
    utakmica: {
      name: "მატჩი",
      desc: "მატჩების მომზადება, რეალურ დროში მართვა და ანალიზი.",
    },
    skauting: {
      name: "სკაუტინგი",
      desc: "მოთამაშეების და გუნდების მონიტორინგი, ანალიზი და შეფასება.",
    },
    statistika: {
      name: "სტატისტიკა",
      desc: "გაფართოებული სტატისტიკური ანალიზი და ხელოვნური ინტელექტის მხარდაჭერა.",
    },
    medicina: {
      name: "მედიცინა",
      desc: "ჯანმრთელობის მონიტორინგი და მოთამაშეთა რეაბილიტაციის პროცესის მართვა.",
    },
    nutricionizam: {
      name: "კვება",
      desc: "სპორტსმენთა კვების გეგმა და მონიტორინგი.",
    },
    oprema: {
      name: "აღჭურვილობა",
      desc: "ინვენტარი, გამოყენების გეგმები და მარაგის მართვა.",
    },
    infrastruktura: {
      name: "ინფრასტრუქტურა",
      desc: "სპორტული მოედნების და ობიექტების გამოყენების დაგეგმვა და მართვა.",
    },
    komunikacija: {
      name: "კომუნიკაცია",
      desc: "ჩართულობის შეტყობინებები და შიდა/გარე კომუნიკაცია.",
    },
  },
  he: {
    administracija: {
      name: "מִנְהָל",
      desc: "ניהול נתונים של שחקנים, מאמנים וצוות.",
    },
    plan: {
      name: "תָכְנִית",
      desc: "תכנון וארגון של אימונים, משחקים ופעילויות אחרות.",
    },
    takticka_ploca: {
      name: "לוּחַ טַקְטִי",
      desc: "שרטוט דיגיטלי של תרגילים ומצבים טקטיים.",
    },
    biblioteka: {
      name: "סִפְרִיָּה",
      desc: "אוסף מרוכז של תרגילים ותכנים מוכנים.",
    },
    trening: { name: "אִמּוּן", desc: "יצירה, מעקב וניתוח של תהליך האימון." },
    testovi: {
      name: "מִבְחָנִים",
      desc: "יצירה, מעקב וניתוח של מבחני שחקנים.",
    },
    natjecanje: {
      name: "תַּחֲרוּת",
      desc: "תכנון, מעקב וניתוח של תהליך תחרותי.",
    },
    utakmica: {
      name: "מִשְׂחָק",
      desc: "הכנה, ניהול בזמן אמת וניתוח של משחקים.",
    },
    skauting: {
      name: "סקאוטינג",
      desc: "מעקב, ניתוח והערכה של שחקנים וקבוצות.",
    },
    statistika: {
      name: "סְטָטִיסְטִיקָה",
      desc: "ניתוחים סטטיסטיים מתקדמים ותמיכת AI.",
    },
    medicina: {
      name: "רְפוּאָה",
      desc: "מעקב אחר בריאות וניהול תהליך השיקום של שחקנים.",
    },
    nutricionizam: {
      name: "תְּזוּנָה",
      desc: "תוכניות תזונה ומעקב אחר תזונת ספורטאים.",
    },
    oprema: { name: "צִיוּד", desc: "מלאי, תכנון שימוש וניהול הציוד." },
    infrastruktura: {
      name: "תוּשִׁיוֹת",
      desc: "תכנון שימוש וניהול של מגרשים ומתקנים ספורטיביים.",
    },
    komunikacija: {
      name: "תִּקְשׁוֹרֶת",
      desc: "הודעות על מעורבות ותקשורת פנימית וחיצונית.",
    },
  },
  is: {
    administracija: {
      name: "STJÓRNUN",
      desc: "Umsjón gagna um leikmenn, þjálfara og starfsfólk.",
    },
    plan: {
      name: "ÁÆTLUN",
      desc: "Áætlun og skipulag æfinga, leikja og annarra viðburða.",
    },
    takticka_ploca: {
      name: "TÆKNITAFLA",
      desc: "Stafrænt teiknað æfingar og taktískar aðstæður.",
    },
    biblioteka: {
      name: "BÓKASAFN",
      desc: "Miðlæg safn æfinga og tilbúins efnis.",
    },
    trening: {
      name: "ÆFINGAR",
      desc: "Gerð, eftirlit og greining æfingaferlisins.",
    },
    testovi: {
      name: "PRÓF",
      desc: "Gerð, eftirlit og greining á prófum leikmanna.",
    },
    natjecanje: {
      name: "KEPPNI",
      desc: "Skipulag, eftirlit og greining keppnisferlisins.",
    },
    utakmica: {
      name: "LEIKUR",
      desc: "Undirbúningur, rauntímastjórnun og greining leikja.",
    },
    skauting: {
      name: "LEIKMANNAEFTIRLIT",
      desc: "Eftirlit, greining og mat á leikmönnum og liðum.",
    },
    statistika: {
      name: "TÖLFRÆÐI",
      desc: "Ítarleg tölfræðigreining og AI aðstoð.",
    },
    medicina: {
      name: "LÆKNISFRÆÐI",
      desc: "Eftirlit með heilsu og stjórnun endurhæfingar leikmanna.",
    },
    nutricionizam: {
      name: "NÆRING",
      desc: "Næringarplön og eftirlit með mataræði íþróttamanna.",
    },
    oprema: {
      name: "BÚNAÐUR",
      desc: "Skráning, notkunaráætlanir og birgðastjórnun búnaðar.",
    },
    infrastruktura: {
      name: "INNVIÐIR",
      desc: "Skipulag og stjórnun íþróttasvæða og mannvirkja.",
    },
    komunikacija: {
      name: "SAMSKIPTI",
      desc: "Tilkynningar um þátttöku og innri/ytri samskipti.",
    },
  },
  kk: {
    administracija: {
      name: "ӘКІМШІЛІК",
      desc: "Ойыншылар, жаттықтырушылар және қызметкерлер туралы деректерді басқару.",
    },
    plan: {
      name: "ЖОСПАР",
      desc: "Жаттығуларды, ойындарды және басқа іс-шараларды жоспарлау және ұйымдастыру.",
    },
    takticka_ploca: {
      name: "ТАКТИКАЛЫҚ ТАҚТА",
      desc: "Жаттығулар мен тактикалық жағдайларды цифрлық түрде сызу.",
    },
    biblioteka: {
      name: "КІТАПХАНА",
      desc: "Жаттығулар мен дайын материалдардың орталықтандырылған жинағы.",
    },
    trening: {
      name: "ЖАТТЫҒУ",
      desc: "Жаттығу процесін жасау, бақылау және талдау.",
    },
    testovi: {
      name: "ТЕСТТЕР",
      desc: "Ойыншыларды тестілеу процесін жасау, бақылау және талдау.",
    },
    natjecanje: {
      name: "ЖАРЫС",
      desc: "Жарыс процесін жоспарлау, бақылау және талдау.",
    },
    utakmica: {
      name: "ОЙЫН",
      desc: "Ойындарға дайындық, нақты уақытта басқару және талдау.",
    },
    skauting: {
      name: "СКАУТИНГ",
      desc: "Ойыншылар мен командаларды бақылау, талдау және бағалау.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Кеңейтілген статистикалық талдаулар және ЖИ қолдауы.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Ойыншылардың денсаулығын бақылау және қалпына келтіру процесін басқару.",
    },
    nutricionizam: {
      name: "ТАҒАМТАНУ",
      desc: "Атлеттерге арналған диета жоспарлары және тамақтануды бақылау.",
    },
    oprema: {
      name: "ЖАБДЫҚ",
      desc: "Қойма есебі, пайдалану жоспары және жабдықтарды басқару.",
    },
    infrastruktura: {
      name: "ИНФРАҚҰРЫЛЫМ",
      desc: "Спорт алаңдары мен нысандарын пайдалану жоспары және басқару.",
    },
    komunikacija: {
      name: "БАЙЛАНЫС",
      desc: "Қатысу туралы хабарламалар және ішкі/сыртқы байланыс.",
    },
  },
  lv: {
    administracija: {
      name: "ADMINISTRĀCIJA",
      desc: "Datu pārvaldība par spēlētājiem, treneriem un personālu.",
    },
    plan: {
      name: "PLĀNOŠANA",
      desc: "Treniņu, spēļu un citu aktivitāšu plānošana un organizēšana.",
    },
    takticka_ploca: {
      name: "TAKTISKĀ TĀFELE",
      desc: "Digitāla vingrinājumu un taktisko situāciju zīmēšana.",
    },
    biblioteka: {
      name: "BIBLIOTĒKA",
      desc: "Centralizēta vingrinājumu un gatavu materiālu kolekcija.",
    },
    trening: {
      name: "TRENIŅŠ",
      desc: "Treniņu procesa veidošana, uzraudzība un analīze.",
    },
    testovi: {
      name: "TESTI",
      desc: "Spēlētāju testēšanas procesu veidošana, uzraudzība un analīze.",
    },
    natjecanje: {
      name: "SACENSĪBAS",
      desc: "Sacensību procesa plānošana, uzraudzība un analīze.",
    },
    utakmica: {
      name: "SPĒLE",
      desc: "Spēļu sagatavošana, tiešā pārvaldība un analīze.",
    },
    skauting: {
      name: "SKAUTINGS",
      desc: "Spēlētāju un komandu novērošana, analīze un izvērtēšana.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Padziļināta statistikas analīze un mākslīgā intelekta atbalsts.",
    },
    medicina: {
      name: "MEDICĪNA",
      desc: "Spēlētāju veselības uzraudzība un rehabilitācijas procesa vadība.",
    },
    nutricionizam: {
      name: "UZTURS",
      desc: "Uztura plāni un sportistu uztura uzraudzība.",
    },
    oprema: {
      name: "APRĪKOJUMS",
      desc: "Inventārs, lietošanas plāni un aprīkojuma krājumu pārvaldība.",
    },
    infrastruktura: {
      name: "INFRASTRUKTŪRA",
      desc: "Sporta laukumu un objektu lietošanas plānošana un pārvaldība.",
    },
    komunikacija: {
      name: "SAZIŅA",
      desc: "Paziņojumi par iesaisti un iekšējā/ārējā saziņa.",
    },
  },
  lt: {
    administracija: {
      name: "ADMINISTRAVIMAS",
      desc: "Žaidėjų, trenerių ir personalo duomenų valdymas.",
    },
    plan: {
      name: "PLANAVIMAS",
      desc: "Treniruočių, rungtynių ir kitų veiklų planavimas ir organizavimas.",
    },
    takticka_ploca: {
      name: "TAKTINĖ LENTA",
      desc: "Pratimų ir taktinių situacijų skaitmeninis braižymas.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Centralizuota pratimų ir parengto turinio kolekcija.",
    },
    trening: {
      name: "TRENIRUOTĖ",
      desc: "Treniruočių proceso kūrimas, stebėjimas ir analizė.",
    },
    testovi: {
      name: "TESTAI",
      desc: "Žaidėjų testavimo procesų kūrimas, stebėjimas ir analizė.",
    },
    natjecanje: {
      name: "VARŽYBOS",
      desc: "Varžybų proceso planavimas, stebėjimas ir analizė.",
    },
    utakmica: {
      name: "RUNGTYNĖS",
      desc: "Rungtynių pasiruošimas, tiesioginis valdymas ir analizė.",
    },
    skauting: {
      name: "SKAUTINGAS",
      desc: "Žaidėjų ir komandų stebėjimas, analizė ir vertinimas.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Išplėstinė statistinė analizė ir dirbtinio intelekto pagalba.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Žaidėjų sveikatos stebėsena ir reabilitacijos proceso valdymas.",
    },
    nutricionizam: {
      name: "MITYBA",
      desc: "Mitybos planai ir sportininkų mitybos stebėjimas.",
    },
    oprema: {
      name: "ĮRANGA",
      desc: "Inventorius, naudojimo planai ir atsargų valdymas.",
    },
    infrastruktura: {
      name: "INFRASTRUKTŪRA",
      desc: "Sporto aikščių ir objektų naudojimo planavimas ir valdymas.",
    },
    komunikacija: {
      name: "KOMUNIKACIJA",
      desc: "Pranešimai apie įsitraukimą bei vidinė ir išorinė komunikacija.",
    },
  },
  hu: {
    administracija: {
      name: "ADMINISZTRÁCIÓ",
      desc: "Játékosok, edzők és személyzet adatainak kezelése.",
    },
    plan: {
      name: "TERVEZÉS",
      desc: "Edzések, mérkőzések és egyéb tevékenységek tervezése és szervezése.",
    },
    takticka_ploca: {
      name: "TAKTIKAI TÁBLA",
      desc: "Gyakorlatok és taktikai helyzetek digitális rajzolása.",
    },
    biblioteka: {
      name: "KÖNYVTÁR",
      desc: "Központosított gyűjtemény gyakorlatokból és kész tartalmakból.",
    },
    trening: {
      name: "EDZÉS",
      desc: "Az edzésfolyamat létrehozása, nyomon követése és elemzése.",
    },
    testovi: {
      name: "TESZTEK",
      desc: "Játékosok tesztelési folyamatának létrehozása, nyomon követése és elemzése.",
    },
    natjecanje: {
      name: "VERSENY",
      desc: "A versenyfolyamat tervezése, követése és elemzése.",
    },
    utakmica: {
      name: "MÉRKŐZÉS",
      desc: "Mérkőzések előkészítése, valós idejű kezelése és elemzése.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Játékosok és csapatok megfigyelése, elemzése és értékelése.",
    },
    statistika: {
      name: "STATISZTIKA",
      desc: "Fejlett statisztikai elemzések és mesterséges intelligencia támogatás.",
    },
    medicina: {
      name: "ORVOSTUDOMÁNY",
      desc: "A játékosok egészségének nyomon követése és rehabilitációs folyamat kezelése.",
    },
    nutricionizam: {
      name: "TÁPLÁLKOZÁS",
      desc: "Táplálkozási tervek és sportolók étrendjének nyomon követése.",
    },
    oprema: {
      name: "FELSZERELÉS",
      desc: "Készletnyilvántartás, használati tervek és eszközök kezelése.",
    },
    infrastruktura: {
      name: "INFRASTRUKTÚRA",
      desc: "Sportpályák és létesítmények használatának tervezése és kezelése.",
    },
    komunikacija: {
      name: "KOMMUNIKÁCIÓ",
      desc: "Részvételi értesítések, valamint belső és külső kommunikáció.",
    },
  },
  mt: {
    administracija: {
      name: "AMMINISTRAZZJONI",
      desc: "Ġestjoni tad-dejta dwar plejers, kowċis u persunal.",
    },
    plan: {
      name: "PJAN",
      desc: "Ippjanar u organizzazzjoni ta' taħriġ, logħbiet u attivitajiet oħra.",
    },
    takticka_ploca: {
      name: "BORD TATTIKU",
      desc: "Tpinġija diġitali ta’ eżerċizzji u sitwazzjonijiet tattiku.",
    },
    biblioteka: {
      name: "LIBRERIJA",
      desc: "Ġabra ċċentralizzata ta’ eżerċizzji u kontenut lest.",
    },
    trening: {
      name: "TAĦRIĠ",
      desc: "Ħolqien, monitoraġġ u analiżi tal-proċess tat-taħriġ.",
    },
    testovi: {
      name: "TESTI",
      desc: "Ħolqien, monitoraġġ u analiżi tal-proċess tat-testjar tal-plejers.",
    },
    natjecanje: {
      name: "KOMPETIZZJONI",
      desc: "Ippjanar, monitoraġġ u analiżi tal-proċess kompetittiv.",
    },
    utakmica: {
      name: "LOGĦBA",
      desc: "Preparazzjoni, ġestjoni f’ħin reali u analiżi tal-logħbiet.",
    },
    skauting: {
      name: "SKOUTING",
      desc: "Monitoraġġ, analiżi u evalwazzjoni ta’ plejers u timijiet.",
    },
    statistika: {
      name: "STATISTIKA",
      desc: "Analiżi statistika avvanzata u appoġġ tal-AI.",
    },
    medicina: {
      name: "MEDIĊINA",
      desc: "Monitoraġġ tas-saħħa u ġestjoni tar-riabilitazzjoni tal-plejers.",
    },
    nutricionizam: {
      name: "NUTRIZZJONI",
      desc: "Pjani ta’ dieta u monitoraġġ tan-nutrizzjoni tal-atleti.",
    },
    oprema: {
      name: "TAGĦMIR",
      desc: "Inventarju, pjanijiet ta’ użu u ġestjoni tal-ħażna.",
    },
    infrastruktura: {
      name: "INFRASTRUTTURA",
      desc: "Pjanijiet ta’ użu u ġestjoni ta’ grawnds u faċilitajiet sportivi.",
    },
    komunikacija: {
      name: "KOMUNIKAZZJONI",
      desc: "Notifikazzjonijiet ta’ involviment u komunikazzjoni interna u esterna.",
    },
  },
  nl: {
    administracija: {
      name: "ADMINISTRATIE",
      desc: "Gegevensbeheer van spelers, trainers en personeel.",
    },
    plan: {
      name: "PLANNING",
      desc: "Planning en organisatie van trainingen, wedstrijden en andere activiteiten.",
    },
    takticka_ploca: {
      name: "TACTISCH BORD",
      desc: "Digitale tekening van oefeningen en tactische situaties.",
    },
    biblioteka: {
      name: "BIBLIOTHEEK",
      desc: "Gecentraliseerde verzameling van oefeningen en kant-en-klare inhoud.",
    },
    trening: {
      name: "TRAINING",
      desc: "Opzetten, volgen en analyseren van het trainingsproces.",
    },
    testovi: {
      name: "TESTEN",
      desc: "Opzetten, volgen en analyseren van het testproces van spelers.",
    },
    natjecanje: {
      name: "COMPETITIE",
      desc: "Planning, monitoring en analyse van het competitieproces.",
    },
    utakmica: {
      name: "WEDSTRIJD",
      desc: "Voorbereiding, live beheer en analyse van wedstrijden.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Monitoring, analyse en beoordeling van spelers en teams.",
    },
    statistika: {
      name: "STATISTIEKEN",
      desc: "Geavanceerde statistische analyses en AI-ondersteuning.",
    },
    medicina: {
      name: "GENEESKUNDE",
      desc: "Gezondheidsmonitoring en revalidatiebeheer van spelers.",
    },
    nutricionizam: {
      name: "VOEDING",
      desc: "Dieetplannen en monitoring van sportersvoeding.",
    },
    oprema: {
      name: "UITRUSTING",
      desc: "Inventaris, gebruiksplannen en voorraadbeheer.",
    },
    infrastruktura: {
      name: "INFRASTRUCTUUR",
      desc: "Gebruik en beheer van sportvelden en faciliteiten.",
    },
    komunikacija: {
      name: "COMMUNICATIE",
      desc: "Betrokkenheidsmeldingen en interne/externe communicatie.",
    },
  },
  no: {
    administracija: {
      name: "ADMINISTRASJON",
      desc: "Administrasjon og styring av data om spillere, trenere og personale.",
    },
    plan: {
      name: "PLANLEGGING",
      desc: "Planlegging og organisering av treninger, kamper og andre aktiviteter.",
    },
    takticka_ploca: {
      name: "TAKTISK TAVLE",
      desc: "Digital tegning av øvelser og taktiske situasjoner.",
    },
    biblioteka: {
      name: "BIBLIOTEK",
      desc: "Sentralisert samling av øvelser og ferdig innhold.",
    },
    trening: {
      name: "TRENING",
      desc: "Opprettelse, oppfølging og analyse av treningsprosessen.",
    },
    testovi: {
      name: "TESTER",
      desc: "Opprettelse, oppfølging og analyse av spillertesting.",
    },
    natjecanje: {
      name: "KONKURRANSE",
      desc: "Planlegging, oppfølging og analyse av konkurranseprosessen.",
    },
    utakmica: {
      name: "KAMP",
      desc: "Forberedelse, live styring og analyse av kamper.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Overvåkning, analyse og evaluering av spillere og lag.",
    },
    statistika: {
      name: "STATISTIKK",
      desc: "Avansert statistisk analyse og AI-støtte.",
    },
    medicina: {
      name: "MEDISIN",
      desc: "Helseovervåkning og håndtering av rehabilitering av spillere.",
    },
    nutricionizam: {
      name: "ERNÆRING",
      desc: "Kostholdsplaner og overvåkning av idrettsutøveres ernæring.",
    },
    oprema: { name: "UTSTYR", desc: "Inventar, brukplaner og lagerstyring." },
    infrastruktura: {
      name: "INFRASTRUKTUR",
      desc: "Planlegging og styring av idrettsbaner og fasiliteter.",
    },
    komunikacija: {
      name: "KOMMUNIKASJON",
      desc: "Varsler om deltakelse samt intern og ekstern kommunikasjon.",
    },
  },
  pl: {
    administracija: {
      name: "ADMINISTRACJA",
      desc: "Zarządzanie danymi o zawodnikach, trenerach i personelu.",
    },
    plan: {
      name: "PLANOWANIE",
      desc: "Planowanie i organizacja treningów, meczów i innych aktywności.",
    },
    takticka_ploca: {
      name: "TABLICA TAKTYCZNA",
      desc: "Cyfrowe rysowanie ćwiczeń i sytuacji taktycznych.",
    },
    biblioteka: {
      name: "BIBLIOTEKA",
      desc: "Scentralizowany zbiór ćwiczeń i gotowych materiałów.",
    },
    trening: {
      name: "TRENING",
      desc: "Tworzenie, monitorowanie i analiza procesu treningowego.",
    },
    testovi: {
      name: "TESTY",
      desc: "Tworzenie, monitorowanie i analiza procesów testowania zawodników.",
    },
    natjecanje: {
      name: "ZAWODY",
      desc: "Planowanie, monitorowanie i analiza procesu rywalizacji.",
    },
    utakmica: {
      name: "MECZ",
      desc: "Przygotowanie, zarządzanie na żywo i analiza meczów.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Obserwacja, analiza i ocena zawodników i drużyn.",
    },
    statistika: {
      name: "STATYSTYKI",
      desc: "Zaawansowane analizy statystyczne i wsparcie AI.",
    },
    medicina: {
      name: "MEDYCYNA",
      desc: "Monitorowanie zdrowia i zarządzanie procesem rehabilitacji zawodników.",
    },
    nutricionizam: {
      name: "ŻYWIENIE",
      desc: "Plany żywieniowe i monitorowanie diety sportowców.",
    },
    oprema: {
      name: "SPRZĘT",
      desc: "Ewidencja, plany użytkowania i zarządzanie zasobami sprzętu.",
    },
    infrastruktura: {
      name: "INFRASTRUKTURA",
      desc: "Planowanie użytkowania i zarządzanie boiskami oraz obiektami sportowymi.",
    },
    komunikacija: {
      name: "KOMUNIKACJA",
      desc: "Powiadomienia o zaangażowaniu oraz komunikacja wewnętrzna i zewnętrzna.",
    },
  },
  tr: {
    administracija: {
      name: "YÖNETİM",
      desc: "Oyuncular, antrenörler ve personel için veri yönetimi.",
    },
    plan: {
      name: "PLANLAMA",
      desc: "Antrenman, maç ve diğer aktivitelerin planlanması ve organizasyonu.",
    },
    takticka_ploca: {
      name: "TAKTİK TAHTASI",
      desc: "Egzersizler ve taktiksel durumların dijital çizimi.",
    },
    biblioteka: {
      name: "KÜTÜPHANE",
      desc: "Egzersizler ve hazır içeriklerin merkezi koleksiyonu.",
    },
    trening: {
      name: "ANTRENMAN",
      desc: "Antrenman sürecinin oluşturulması, izlenmesi ve analizi.",
    },
    testovi: {
      name: "TESTLER",
      desc: "Oyuncu test sürecinin oluşturulması, izlenmesi ve analizi.",
    },
    natjecanje: {
      name: "YARIŞMA",
      desc: "Yarışma sürecinin planlanması, izlenmesi ve analizi.",
    },
    utakmica: {
      name: "MAÇ",
      desc: "Maçların hazırlanması, canlı yönetimi ve analizi.",
    },
    skauting: {
      name: "SCOUTLUK",
      desc: "Oyuncuların ve takımların izlenmesi, analizi ve değerlendirilmesi.",
    },
    statistika: {
      name: "İSTATİSTİKLER",
      desc: "Gelişmiş istatistik analizleri ve yapay zeka desteği.",
    },
    medicina: {
      name: "TIBBİ",
      desc: "Sağlık izlemesi ve oyuncu rehabilitasyon süreçlerinin yönetimi.",
    },
    nutricionizam: {
      name: "DİYET",
      desc: "Beslenme planları ve sporcuların beslenme izleme.",
    },
    oprema: {
      name: "EKİPMAN",
      desc: "Envanter, kullanım planları ve ekipman stoğu yönetimi.",
    },
    infrastruktura: {
      name: "ALTYAPI",
      desc: "Spor sahaları ve tesislerin kullanım planlaması ve yönetimi.",
    },
    komunikacija: {
      name: "İLETİŞİM",
      desc: "Katılım bildirimleri ve iç/dış iletişim.",
    },
  },
  ar: {
    administracija: {
      name: "الإدارة",
      desc: "إدارة البيانات للاعبين والمدربين والموظفين.",
    },
    plan: {
      name: "التخطيط",
      desc: "التخطيط وتنظيم التدريبات والمباريات والأنشطة الأخرى.",
    },
    takticka_ploca: {
      name: "اللوحة التكتيكية",
      desc: "رسم رقمي للتمارين والمواقف التكتيكية.",
    },
    biblioteka: {
      name: "المكتبة",
      desc: "مجموعة مركزية للتمارين والمحتويات الجاهزة.",
    },
    trening: {
      name: "التدريب",
      desc: "إنشاء، مراقبة وتحليل عملية التدريب.",
    },
    testovi: {
      name: "الاختبارات",
      desc: "إنشاء، مراقبة وتحليل عمليات اختبار اللاعبين.",
    },
    natjecanje: {
      name: "المنافسة",
      desc: "التخطيط، المراقبة وتحليل عملية المنافسة.",
    },
    utakmica: {
      name: "المباراة",
      desc: "التحضير، الإدارة الحية والتحليل للمباريات.",
    },
    skauting: {
      name: "الكشافة",
      desc: "مراقبة، تحليل وتقييم اللاعبين والفرق.",
    },
    statistika: {
      name: "الإحصاءات",
      desc: "تحليلات إحصائية متقدمة ودعم الذكاء الاصطناعي.",
    },
    medicina: {
      name: "الطب",
      desc: "مراقبة الصحة وإدارة عملية إعادة التأهيل للاعبين.",
    },
    nutricionizam: {
      name: "التغذية",
      desc: "خطط النظام الغذائي ومراقبة تغذية الرياضيين.",
    },
    oprema: {
      name: "المعدات",
      desc: "إدارة المخزون، خطط الاستخدام وإدارة المخزونات.",
    },
    infrastruktura: {
      name: "البنية التحتية",
      desc: "التخطيط والإدارة للملاعب والمنشآت الرياضية.",
    },
    komunikacija: {
      name: "الاتصال",
      desc: "إشعارات المشاركة والتواصل الداخلي والخارجي.",
    },
  },
  zh: {
    administracija: {
      name: "管理",
      desc: "玩家、教练和工作人员的数据管理。",
    },
    plan: {
      name: "计划",
      desc: "训练、比赛和其他活动的规划和组织。",
    },
    takticka_ploca: {
      name: "战术板",
      desc: "数字化绘制练习和战术情景。",
    },
    biblioteka: {
      name: "图书馆",
      desc: "集中式练习和现成内容的集合。",
    },
    trening: {
      name: "训练",
      desc: "训练过程的创建、监控和分析。",
    },
    testovi: {
      name: "测试",
      desc: "创建、监控和分析球员测试过程。",
    },
    natjecanje: {
      name: "比赛",
      desc: "比赛过程的规划、监控和分析。",
    },
    utakmica: {
      name: "比赛",
      desc: "比赛的准备、实时管理和分析。",
    },
    skauting: {
      name: "侦察",
      desc: "监控、分析和评估球员和团队。",
    },
    statistika: {
      name: "统计",
      desc: "高级统计分析和人工智能支持。",
    },
    medicina: {
      name: "医学",
      desc: "监控健康和管理球员的康复过程。",
    },
    nutricionizam: {
      name: "营养",
      desc: "饮食计划和运动员饮食的监控。",
    },
    oprema: {
      name: "设备",
      desc: "库存、使用计划和设备管理。",
    },
    infrastruktura: {
      name: "基础设施",
      desc: "体育场地和设施的使用规划和管理。",
    },
    komunikacija: {
      name: "通信",
      desc: "参与通知和内部/外部通信。",
    },
  },
  ja: {
    administracija: {
      name: "管理",
      desc: "選手、コーチ、スタッフのデータ管理。",
    },
    plan: {
      name: "計画",
      desc: "トレーニング、試合、その他の活動の計画と組織。",
    },
    takticka_ploca: {
      name: "戦術ボード",
      desc: "練習と戦術的な状況のデジタル描画。",
    },
    biblioteka: {
      name: "ライブラリ",
      desc: "練習と準備されたコンテンツの集中コレクション。",
    },
    trening: {
      name: "トレーニング",
      desc: "トレーニングプロセスの作成、監視、分析。",
    },
    testovi: {
      name: "テスト",
      desc: "選手のテストプロセスの作成、監視、分析。",
    },
    natjecanje: {
      name: "競技",
      desc: "競技プロセスの計画、監視、分析。",
    },
    utakmica: {
      name: "試合",
      desc: "試合の準備、リアルタイム管理、分析。",
    },
    skauting: {
      name: "スカウティング",
      desc: "選手とチームの監視、分析、評価。",
    },
    statistika: {
      name: "統計",
      desc: "高度な統計分析とAIサポート。",
    },
    medicina: {
      name: "医学",
      desc: "選手の健康管理とリハビリプロセスの管理。",
    },
    nutricionizam: {
      name: "栄養",
      desc: "食事プランとアスリートの食事の監視。",
    },
    oprema: {
      name: "機器",
      desc: "在庫、使用計画、機器の管理。",
    },
    infrastruktura: {
      name: "インフラ",
      desc: "スポーツ施設とフィールドの使用計画と管理。",
    },
    komunikacija: {
      name: "コミュニケーション",
      desc: "参加通知と内部/外部のコミュニケーション。",
    },
  },
  ro: {
    administracija: {
      name: "ADMINISTRARE",
      desc: "Gestionarea datelor pentru jucători, antrenori și personal.",
    },
    plan: {
      name: "PLANIFICARE",
      desc: "Planificarea și organizarea antrenamentelor, meciurilor și altor activități.",
    },
    takticka_ploca: {
      name: "TABLĂ TACTICĂ",
      desc: "Desenarea digitală a exercițiilor și situațiilor tactice.",
    },
    biblioteka: {
      name: "BIBLIOTECĂ",
      desc: "Colecție centralizată de exerciții și materiale gata de utilizat.",
    },
    trening: {
      name: "ANRENAMENT",
      desc: "Crearea, monitorizarea și analiza procesului de antrenament.",
    },
    testovi: {
      name: "TESTE",
      desc: "Crearea, monitorizarea și analiza procesului de testare a jucătorilor.",
    },
    natjecanje: {
      name: "COMPETIȚIE",
      desc: "Planificarea, monitorizarea și analiza procesului competițional.",
    },
    utakmica: {
      name: "MECI",
      desc: "Pregătirea, gestionarea în timp real și analiza meciurilor.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Monitorizarea, analiza și evaluarea jucătorilor și echipelor.",
    },
    statistika: {
      name: "STATISTICI",
      desc: "Analize statistice avansate și suport AI.",
    },
    medicina: {
      name: "MEDICINĂ",
      desc: "Monitorizarea sănătății și gestionarea procesului de reabilitare a jucătorilor.",
    },
    nutricionizam: {
      name: "NUTRIȚIE",
      desc: "Planuri dietetice și monitorizarea nutriției sportivilor.",
    },
    oprema: {
      name: "ECHIPAMENT",
      desc: "Inventar, planificarea utilizării și gestionarea stocurilor de echipamente.",
    },
    infrastruktura: {
      name: "INFRASTRUCTURĂ",
      desc: "Planificarea utilizării și gestionarea terenurilor și facilităților sportive.",
    },
    komunikacija: {
      name: "COMUNICARE",
      desc: "Notificări de angajament și comunicare internă și externă.",
    },
  },
  ru: {
    administracija: {
      name: "АДМИНИСТРАЦИЯ",
      desc: "Управление данными игроков, тренеров и персонала.",
    },
    plan: {
      name: "ПЛАНИРОВАНИЕ",
      desc: "Планирование и организация тренировок, матчей и других мероприятий.",
    },
    takticka_ploca: {
      name: "ТАКТИЧЕСКАЯ ДОСКА",
      desc: "Цифровое рисование упражнений и тактических ситуаций.",
    },
    biblioteka: {
      name: "БИБЛИОТЕКА",
      desc: "Централизованная коллекция упражнений и готовых материалов.",
    },
    trening: {
      name: "ТРЕНИРОВКА",
      desc: "Создание, отслеживание и анализ тренировочного процесса.",
    },
    testovi: {
      name: "ТЕСТЫ",
      desc: "Создание, отслеживание и анализ процесса тестирования игроков.",
    },
    natjecanje: {
      name: "СОРЕВНОВАНИЕ",
      desc: "Планирование, отслеживание и анализ процесса соревнования.",
    },
    utakmica: {
      name: "МАТЧ",
      desc: "Подготовка, управление в реальном времени и анализ матчей.",
    },
    skauting: {
      name: "СКАУТИНГ",
      desc: "Отслеживание, анализ и оценка игроков и команд.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Продвинутый статистический анализ и поддержка ИИ.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Мониторинг здоровья и управление процессом реабилитации игроков.",
    },
    nutricionizam: {
      name: "ПИТАНИЕ",
      desc: "Планы питания и мониторинг питания спортсменов.",
    },
    oprema: {
      name: "ОБОРУДОВАНИЕ",
      desc: "Инвентаризация, планы использования и управление запасами оборудования.",
    },
    infrastruktura: {
      name: "ИНФРАСТРУКТУРА",
      desc: "Планирование использования и управление спортивными площадками и объектами.",
    },
    komunikacija: {
      name: "КОММУНИКАЦИЯ",
      desc: "Уведомления об участии и внутренняя/внешняя коммуникация.",
    },
  },
  sk: {
    administracija: {
      name: "ADMINISTRÁCIA",
      desc: "Správa dát o hráčoch, tréneroch a personáli.",
    },
    plan: {
      name: "PLÁN",
      desc: "Plánovanie a organizácia tréningov, zápasov a ďalších aktivít.",
    },
    takticka_ploca: {
      name: "TAKTICKÁ TABUĽA",
      desc: "Digitálne kreslenie cvičení a taktických situácií.",
    },
    biblioteka: {
      name: "KNIŽNICA",
      desc: "Centralizovaná zbierka cvičení a hotových materiálov.",
    },
    trening: {
      name: "TRÉNING",
      desc: "Vytváranie, sledovanie a analýza tréningového procesu.",
    },
    testovi: {
      name: "TESTY",
      desc: "Vytváranie, sledovanie a analýza procesov testovania hráčov.",
    },
    natjecanje: {
      name: "SÚŤAŽ",
      desc: "Plánovanie, sledovanie a analýza súťažného procesu.",
    },
    utakmica: {
      name: "ZÁPAS",
      desc: "Príprava, riadenie v reálnom čase a analýza zápasov.",
    },
    skauting: {
      name: "SKAUTING",
      desc: "Sledovanie, analýza a hodnotenie hráčov a tímov.",
    },
    statistika: {
      name: "ŠTATISTIKA",
      desc: "Pokročilá štatistická analýza a podpora AI.",
    },
    medicina: {
      name: "MEDICÍNA",
      desc: "Sledovanie zdravia a riadenie rehabilitačného procesu hráčov.",
    },
    nutricionizam: {
      name: "VÝŽIVA",
      desc: "Plány stravovania a sledovanie stravy športovcov.",
    },
    oprema: {
      name: "VYBAVENIE",
      desc: "Evidencia, plány používania a správa zásob vybavenia.",
    },
    infrastruktura: {
      name: "INFRAŠTRUKTÚRA",
      desc: "Plánovanie používania a správa športových ihrísk a zariadení.",
    },
    komunikacija: {
      name: "KOMUNIKÁCIA",
      desc: "Oznámenia o účasti a interná/externá komunikácia.",
    },
  },
  uk: {
    administracija: {
      name: "АДМІНІСТРАЦІЯ",
      desc: "Управління даними про гравців, тренерів та персонал.",
    },
    plan: {
      name: "ПЛАНУВАННЯ",
      desc: "Планування та організація тренувань, матчів та інших активностей.",
    },
    takticka_ploca: {
      name: "ТАКТИЧНА ДОСКА",
      desc: "Цифрове малювання вправ та тактичних ситуацій.",
    },
    biblioteka: {
      name: "БІБЛІОТЕКА",
      desc: "Централізована колекція вправ та готових матеріалів.",
    },
    trening: {
      name: "ТРЕНУВАННЯ",
      desc: "Створення, моніторинг та аналіз тренувального процесу.",
    },
    testovi: {
      name: "ТЕСТИ",
      desc: "Створення, моніторинг та аналіз процесів тестування гравців.",
    },
    natjecanje: {
      name: "КОНКУРС",
      desc: "Планування, моніторинг та аналіз процесу конкурсу.",
    },
    utakmica: {
      name: "МАТЧ",
      desc: "Підготовка, управління в реальному часі та аналіз матчів.",
    },
    skauting: {
      name: "СКАУТИНГ",
      desc: "Моніторинг, аналіз та оцінка гравців і команд.",
    },
    statistika: {
      name: "СТАТИСТИКА",
      desc: "Розширений статистичний аналіз та підтримка ШІ.",
    },
    medicina: {
      name: "МЕДИЦИНА",
      desc: "Моніторинг здоров'я та управління процесом реабілітації гравців.",
    },
    nutricionizam: {
      name: "ХАРЧУВАННЯ",
      desc: "Плани харчування та моніторинг харчування спортсменів.",
    },
    oprema: {
      name: "ОБЛАДНАННЯ",
      desc: "Інвентар, плани використання та управління запасами обладнання.",
    },
    infrastruktura: {
      name: "ІНФРАСТРУКТУРА",
      desc: "Планування використання та управління спортивними майданчиками та об'єктами.",
    },
    komunikacija: {
      name: "КОМУНІКАЦІЯ",
      desc: "Сповіщення про участь та внутрішня/зовнішня комунікація.",
    },
  },
  sv: {
    administracija: {
      name: "ADMINISTRATION",
      desc: "Hantering av data för spelare, tränare och personal.",
    },
    plan: {
      name: "PLANERING",
      desc: "Planering och organisation av träningar, matcher och andra aktiviteter.",
    },
    takticka_ploca: {
      name: "TAKTISK TAVLA",
      desc: "Digital ritning av övningar och taktiska situationer.",
    },
    biblioteka: {
      name: "BIBLIOTEK",
      desc: "Centraliserad samling av övningar och färdiga material.",
    },
    trening: {
      name: "TRÄNING",
      desc: "Skapande, övervakning och analys av träningsprocessen.",
    },
    testovi: {
      name: "TESTER",
      desc: "Skapande, övervakning och analys av spelartestningsprocesser.",
    },
    natjecanje: {
      name: "TÄVLING",
      desc: "Planering, övervakning och analys av tävlingsprocessen.",
    },
    utakmica: {
      name: "MATCH",
      desc: "Förberedelse, livehantering och analys av matcher.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Övervakning, analys och utvärdering av spelare och lag.",
    },
    statistika: {
      name: "STATISTIK",
      desc: "Avancerad statistisk analys och AI-stöd.",
    },
    medicina: {
      name: "MEDICIN",
      desc: "Hälsomonitorering och hantering av spelarnas rehabiliteringsprocesser.",
    },
    nutricionizam: {
      name: "NUTRITION",
      desc: "Dietplaner och övervakning av idrottares näring.",
    },
    oprema: {
      name: "UTRUSTNING",
      desc: "Inventering, användningsplaner och hantering av utrustningslager.",
    },
    infrastruktura: {
      name: "INFRASTRUKTUR",
      desc: "Planering och hantering av sportanläggningar och arenor.",
    },
    komunikacija: {
      name: "KOMMUNIKATION",
      desc: "Deltagarnotifikationer och intern/extern kommunikation.",
    },
  },
  ga: {
    administracija: {
      name: "RIARACHÁN",
      desc: "Taifead agus bainistiú sonraí imreoirí, cóitseálaithe agus foirne.",
    },
    plan: {
      name: "PLEAN",
      desc: "Pleanáil agus eagrú traenála, cluichí agus gníomhaíochtaí eile.",
    },
    takticka_ploca: {
      name: "CLÁR OIRBHEARTAÍOCHTA",
      desc: "Líneáil dhigiteach cleachtaí agus cásanna oirbheartaíochta.",
    },
    biblioteka: {
      name: "LEABHARLANN",
      desc: "Bailiúchán lárnach de chleachtaí agus ábhar eile réamhdhéanta.",
    },
    trening: {
      name: "TRAENÁIL",
      desc: "Cruthú, monatóireacht agus anailís ar phróiseas na traenála.",
    },
    testovi: {
      name: "TÁSTÁIL",
      desc: "Cruthú, monatóireacht agus anailís ar thástáil na n-imreoirí.",
    },
    natjecanje: {
      name: "COMÓRTAS",
      desc: "Pleanáil, monatóireacht agus anailís ar an bpróiseas comórtais.",
    },
    utakmica: {
      name: "CLUICHE",
      desc: "Ullmhúchán, bainistiú beo agus anailís ar chluichí.",
    },
    skauting: {
      name: "SCÓITÉIREACHT",
      desc: "Monatóireacht, anailís agus meastóireacht ar imreoirí agus foirne.",
    },
    statistika: {
      name: "STAITISTICÍ",
      desc: "Anailísí staidrimh ardleibhéil agus tacaíocht AI.",
    },
    medicina: {
      name: "LEIGHEAS",
      desc: "Monatóireacht ar shláinte agus bainistiú téarnaimh imreoirí.",
    },
    nutricionizam: {
      name: "COTHÚ",
      desc: "Pleananna cothaithe agus monatóireacht ar aiste bia lúthchleasaithe.",
    },
    oprema: {
      name: "TREALAMH",
      desc: "Taifead, pleananna úsáide agus bainistiú stórais trealaimh.",
    },
    infrastruktura: {
      name: "BONNEAGAR",
      desc: "Pleanáil agus bainistiú ar pháirceanna agus áiseanna spóirt.",
    },
    komunikacija: {
      name: "CUMARSÁID",
      desc: "Fógraí gníomhaíochta agus cumarsáid inmheánach agus seachtrach.",
    },
  },
  ca: {
    administracija: {
      name: "ADMINISTRACIÓ",
      desc: "Registre i gestió de dades de jugadors, entrenadors i personal.",
    },
    plan: {
      name: "PLÀ",
      desc: "Planificació i organització d’entrenaments, partits i activitats.",
    },
    takticka_ploca: {
      name: "TAULELL TÀCTIC",
      desc: "Dibuix digital d’exercicis i situacions tàctiques.",
    },
    biblioteka: {
      name: "BIBLIOTECA",
      desc: "Col·lecció centralitzada d’exercicis i altres continguts preparats.",
    },
    trening: {
      name: "ENTRENAMENT",
      desc: "Creació, seguiment i anàlisi del procés d’entrenament.",
    },
    testovi: {
      name: "TESTOS",
      desc: "Creació, seguiment i anàlisi del procés de proves dels jugadors.",
    },
    natjecanje: {
      name: "COMPETICIÓ",
      desc: "Planificació, seguiment i anàlisi del procés competitiu.",
    },
    utakmica: {
      name: "PARTIT",
      desc: "Preparació, gestió en temps real i anàlisi dels partits.",
    },
    skauting: {
      name: "SCOUTING",
      desc: "Seguiment, anàlisi i avaluació de jugadors i equips propis i rivals.",
    },
    statistika: {
      name: "ESTADÍSTICA",
      desc: "Anàlisi estadística avançada i suport amb IA.",
    },
    medicina: {
      name: "MEDICINA",
      desc: "Seguiment de la salut i gestió de la recuperació dels jugadors.",
    },
    nutricionizam: {
      name: "NUTRICIÓ",
      desc: "Plans d’alimentació i seguiment de la dieta dels esportistes.",
    },
    oprema: {
      name: "EQUIPAMENT",
      desc: "Registre, ús previst i gestió de l’estoc d’equipament.",
    },
    infrastruktura: {
      name: "INFRAESTRUCTURA",
      desc: "Plans d’ús i gestió d’instal·lacions i camps esportius.",
    },
    komunikacija: {
      name: "COMUNICACIÓ",
      desc: "Avisos d’activitat i comunicació interna i externa.",
    },
  },
};

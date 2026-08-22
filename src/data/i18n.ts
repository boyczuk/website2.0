export type Locale = 'en' | 'fr' | 'es' | 'ko' | 'zh';

export interface LocaleMeta {
    code: Locale;
    label: string;
    short: string;
}

export const LOCALES: LocaleMeta[] = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'ko', label: '한국어', short: 'KO' },
    { code: 'zh', label: '简体中文', short: 'ZH' },
];

export interface UiStrings {
    eyebrowIdentity: string;
    role: string;
    location: string;
    blurb: string;
    judoLabel: string;
    downloadResume: string;
    programArchiveHeading: string;
    breachProtocolTab: string;
    daemonsWord: string;
    eyebrowDecrypted: string;
    executeLabel: string;
    comingSoonLabel: string;
    serviceRecordHeading: string;
    employmentLogTab: string;
    stableWord: string;
    evadedWord: string;
    uplinkActiveLabel: string;
    footerConnection: string;
    footerUplink: string;
    bootLines: string[];
}

export interface ProjectOverride {
    desc: string;
}

export interface ExperienceOverride {
    role: string;
    desc: string;
}

export interface Translation {
    ui: UiStrings;
    projects: Record<number, ProjectOverride>;
    experience: Record<number, ExperienceOverride>;
}

export const translations: Record<Locale, Translation> = {
    en: {
        ui: {
            eyebrowIdentity: '// IDENTITY CONFIRMED',
            role: 'Software Developer',
            location: 'Toronto, Ontario',
            blurb: "I love building things! Professionally, I've developed web apps and software using TypeScript, Python, React, PostgreSQL, AWS, and Firebase. Currently, I'm heavily focused on backend development like API design, databases, and system architecture. Especially in the domain of payment processing.",
            judoLabel: 'BJJ',
            downloadResume: '▸ DOWNLOAD_RESUME.pdf',
            programArchiveHeading: '// PROGRAM_ARCHIVE',
            breachProtocolTab: 'BREACH PROTOCOL',
            daemonsWord: 'DAEMONS',
            eyebrowDecrypted: '// DECRYPTED FILE',
            executeLabel: 'EXECUTE',
            comingSoonLabel: 'COMING SOON',
            serviceRecordHeading: '// SERVICE_RECORD',
            employmentLogTab: 'EMPLOYMENT LOG',
            stableWord: 'STABLE',
            evadedWord: 'EVADED',
            uplinkActiveLabel: 'UPLINK ACTIVE',
            footerConnection: 'CONNECTION MAINTAINED',
            footerUplink: 'UPLINK:',
            bootLines: [
                'ESTABLISHING UPLINK...',
                'BYPASSING ICE...',
                'DECRYPTING PERSONA.SYS...',
                'NETWATCH TRACE: EVADED',
                'CONNECTING...',
            ],
        },
        projects: {
            1: { desc: "Built a real-time messaging web app that I can slowly expand into a full social media platform. Currently the main functional feature is real time messaging, and messaging persistence. Currently in the process of implementing security precautions and adding a posting system." },
            2: { desc: 'Top down 2D strategy crime game coded in Unity2D. Think Rimworld but for organized crime. In this game you create, hire and organize your new organized crime group/mafia/cartel and fight for territory in the city of Senago. Implemented modern A* pathfinding algorithms to ensure responsive and intelligent NPCs.' },
            3: { desc: 'Developed a custom site for a healthy energy drink startup with the target audience being neurodivergent gamers. Helped design the site alongside graphic designers and other artists.' },
            4: { desc: "Wrote the software behind Proxima Command's Starship Simulator in person escape room. Two teams of 8 players face off using physical consoles controlled using Arduinos and my software." },
            5: { desc: 'Machine Learning model for detecting UAVs versus other aerial objects in a stochastic environment. Collected 14,000+ images, and 650 videos from open sourced annotated datasets to use as training data.' },
        },
        experience: {
            1: { role: 'Software Engineer', desc: 'Built full-stack payment and banking infrastructure alongside customer-facing frontend features, and shipped logistics tools used daily by mechanics and technicians in the field.' },
            2: { role: 'Software Developer (Contract)', desc: 'Programmed a Python-based automation tool to generate presentations based on market research reports.' },
            3: { role: 'Software Developer', desc: 'Developed Python software for an 8-player arcade starship simulator, integrating physical controls via Arduino and PySerial. Optimized input processing, reducing latency by 30ms, and implemented a multithreading system to enhance system responsiveness.' },
            4: { role: 'Junior Developer', desc: 'Built a custom animated web app for a startup using TypeScript and React, reducing bounce rates by 30%. Improved performance through CDN asset hosting and ensured full mobile compatibility using Tailwind CSS.' },
            5: { role: 'Computer Science', desc: "Earned a Bachelor of Computing with a 3.7 GPA, specializing in Artificial Intelligence. My capstone project was focused on drone detection using Machine Learning (YOLOv5 and OpenCV). Dean's Honour List (2022, 2023, 2024)." },
        },
    },
    fr: {
        ui: {
            eyebrowIdentity: '// IDENTITÉ CONFIRMÉE',
            role: 'Développeur Logiciel',
            location: 'Toronto, Ontario',
            blurb: "J'adore créer des choses ! Professionnellement, j'ai développé des applications web et des logiciels avec TypeScript, Python, React, PostgreSQL, AWS et Firebase. Actuellement, je me concentre pour devenir un virtuose de TypeScript.",
            judoLabel: 'BJJ',
            downloadResume: '▸ TÉLÉCHARGER_CV.pdf',
            programArchiveHeading: '// ARCHIVE_PROGRAMMES',
            breachProtocolTab: "PROTOCOLE D'INTRUSION",
            daemonsWord: 'DÉMONS',
            eyebrowDecrypted: '// FICHIER DÉCRYPTÉ',
            executeLabel: 'EXÉCUTER',
            comingSoonLabel: 'BIENTÔT DISPONIBLE',
            serviceRecordHeading: '// DOSSIER_SERVICE',
            employmentLogTab: "JOURNAL D'EMPLOI",
            stableWord: 'STABLE',
            evadedWord: 'ÉVITÉ',
            uplinkActiveLabel: 'LIAISON ACTIVE',
            footerConnection: 'CONNEXION MAINTENUE',
            footerUplink: 'LIAISON :',
            bootLines: [
                'ÉTABLISSEMENT DE LA LIAISON...',
                'CONTOURNEMENT DE LA GLACE...',
                'DÉCRYPTAGE DE PERSONA.SYS...',
                'TRACE NETWATCH : ÉVITÉE',
                'CONNEXION EN COURS...',
            ],
        },
        projects: {
            1: { desc: "Création d'une application web de messagerie en temps réel que je développe progressivement en une plateforme sociale complète. La fonctionnalité principale actuelle est la messagerie instantanée avec persistance des messages. Je travaille actuellement à l'ajout de mesures de sécurité et d'un système de publication." },
            2: { desc: "Jeu de stratégie 2D vue du dessus codé sous Unity2D. Pensez à Rimworld, mais pour le crime organisé. Dans ce jeu, vous créez, recrutez et organisez votre groupe criminel/mafia/cartel et vous battez pour le territoire de la ville de Senago. J'ai implémenté des algorithmes de pathfinding A* modernes pour des PNJ réactifs et intelligents." },
            3: { desc: "Développement d'un site sur mesure pour une startup de boissons énergisantes saines destinée aux joueurs neurodivergents. J'ai aidé à concevoir le site aux côtés de graphistes et d'autres artistes." },
            4: { desc: "Écriture du logiciel derrière le simulateur de vaisseau spatial de Proxima Command, un escape game en personne. Deux équipes de 8 joueurs s'affrontent à l'aide de consoles physiques contrôlées par des Arduino et mon logiciel." },
            5: { desc: "Modèle d'apprentissage automatique pour détecter les drones parmi d'autres objets aériens dans un environnement stochastique. J'ai rassemblé plus de 14 000 images et 650 vidéos issues de jeux de données annotés en libre accès pour l'entraînement." },
        },
        experience: {
            1: { role: 'Ingénieur Logiciel', desc: "Développement full-stack d'une infrastructure de paiement et bancaire, de fonctionnalités frontend destinées aux clients, ainsi que d'outils logistiques utilisés quotidiennement par les mécaniciens et techniciens sur le terrain." },
            2: { role: 'Développeur Logiciel (Contrat)', desc: "Programmation d'un outil d'automatisation en Python pour générer des présentations à partir de rapports d'études de marché." },
            3: { role: 'Développeur Logiciel', desc: "Développement d'un logiciel Python pour un simulateur de vaisseau spatial d'arcade à 8 joueurs, intégrant des contrôles physiques via Arduino et PySerial. Optimisation du traitement des entrées, réduisant la latence de 30 ms, et mise en place d'un système multithread pour améliorer la réactivité." },
            4: { role: 'Développeur Junior', desc: "Création d'une application web animée sur mesure pour une startup avec TypeScript et React, réduisant le taux de rebond de 30 %. Amélioration des performances grâce à l'hébergement CDN et garantie d'une compatibilité mobile complète avec Tailwind CSS." },
            5: { role: 'Informatique', desc: "Baccalauréat en informatique obtenu avec une moyenne de 3,7, spécialisation en intelligence artificielle. Mon projet de fin d'études portait sur la détection de drones par apprentissage automatique (YOLOv5 et OpenCV). Tableau d'honneur du doyen (2022, 2023, 2024)." },
        },
    },
    es: {
        ui: {
            eyebrowIdentity: '// IDENTIDAD CONFIRMADA',
            role: 'Desarrollador de Software',
            location: 'Toronto, Ontario',
            blurb: '¡Me encanta crear cosas! Profesionalmente, he desarrollado aplicaciones web y software con TypeScript, Python, React, PostgreSQL, AWS y Firebase. Actualmente me estoy enfocando en convertirme en un experto de TypeScript.',
            judoLabel: 'BJJ',
            downloadResume: '▸ DESCARGAR_CV.pdf',
            programArchiveHeading: '// ARCHIVO_PROGRAMAS',
            breachProtocolTab: 'PROTOCOLO DE INTRUSIÓN',
            daemonsWord: 'DEMONIOS',
            eyebrowDecrypted: '// ARCHIVO DESCIFRADO',
            executeLabel: 'EJECUTAR',
            comingSoonLabel: 'PRÓXIMAMENTE',
            serviceRecordHeading: '// REGISTRO_SERVICIO',
            employmentLogTab: 'REGISTRO LABORAL',
            stableWord: 'ESTABLE',
            evadedWord: 'EVADIDO',
            uplinkActiveLabel: 'ENLACE ACTIVO',
            footerConnection: 'CONEXIÓN MANTENIDA',
            footerUplink: 'ENLACE:',
            bootLines: [
                'ESTABLECIENDO ENLACE...',
                'EVADIENDO EL HIELO...',
                'DESCIFRANDO PERSONA.SYS...',
                'RASTREO NETWATCH: EVADIDO',
                'CONECTANDO...',
            ],
        },
        projects: {
            1: { desc: 'Desarrollé una aplicación web de mensajería en tiempo real que planeo expandir gradualmente hasta convertirla en una plataforma social completa. Actualmente, la función principal es la mensajería en tiempo real con persistencia de mensajes. Estoy implementando medidas de seguridad y un sistema de publicaciones.' },
            2: { desc: 'Juego de estrategia 2D con vista cenital hecho en Unity2D. Piensa en Rimworld, pero para el crimen organizado. En este juego creas, contratas y organizas tu nuevo grupo criminal/mafia/cártel y luchas por el territorio en la ciudad de Senago. Implementé algoritmos modernos de pathfinding A* para lograr NPCs receptivos e inteligentes.' },
            3: { desc: 'Desarrollé un sitio a medida para una startup de bebidas energéticas saludables dirigida a gamers neurodivergentes. Ayudé a diseñar el sitio junto a diseñadores gráficos y otros artistas.' },
            4: { desc: 'Escribí el software detrás del Simulador de Nave Estelar de Proxima Command, un escape room presencial. Dos equipos de 8 jugadores compiten usando consolas físicas controladas por Arduinos y mi software.' },
            5: { desc: 'Modelo de aprendizaje automático para detectar drones frente a otros objetos aéreos en un entorno estocástico. Recopilé más de 14,000 imágenes y 650 videos de conjuntos de datos anotados de código abierto para usarlos como datos de entrenamiento.' },
        },
        experience: {
            1: { role: 'Ingeniero de Software', desc: 'Desarrollo full-stack de infraestructura de pagos y banca, funciones de frontend orientadas al cliente, y herramientas logísticas utilizadas a diario por mecánicos y técnicos en el campo.' },
            2: { role: 'Desarrollador de Software (Contrato)', desc: 'Programé una herramienta de automatización en Python para generar presentaciones a partir de informes de investigación de mercado.' },
            3: { role: 'Desarrollador de Software', desc: 'Desarrollé software en Python para un simulador de nave estelar arcade de 8 jugadores, integrando controles físicos mediante Arduino y PySerial. Optimicé el procesamiento de entradas, reduciendo la latencia en 30 ms, e implementé un sistema multihilo para mejorar la capacidad de respuesta.' },
            4: { role: 'Desarrollador Junior', desc: 'Creé una aplicación web animada a medida para una startup usando TypeScript y React, reduciendo la tasa de rebote en un 30%. Mejoré el rendimiento mediante alojamiento de recursos en CDN y garanticé compatibilidad móvil completa con Tailwind CSS.' },
            5: { role: 'Ciencias de la Computación', desc: 'Obtuve una Licenciatura en Computación con un promedio de 3.7, especializándome en Inteligencia Artificial. Mi proyecto final se centró en la detección de drones mediante aprendizaje automático (YOLOv5 y OpenCV). Lista de Honor del Decano (2022, 2023, 2024).' },
        },
    },
    ko: {
        ui: {
            eyebrowIdentity: '// 신원 확인됨',
            role: '소프트웨어 개발자',
            location: '토론토, 온타리오',
            blurb: '저는 무언가를 만드는 것을 좋아합니다! 전문적으로 TypeScript, Python, React, PostgreSQL, AWS, Firebase를 사용해 웹 애플리케이션과 소프트웨어를 개발해 왔습니다. 현재는 TypeScript의 달인이 되는 데 집중하고 있습니다.',
            judoLabel: '주짓수',
            downloadResume: '▸ 이력서_다운로드.pdf',
            programArchiveHeading: '// 프로그램_아카이브',
            breachProtocolTab: '침입 프로토콜',
            daemonsWord: '데몬',
            eyebrowDecrypted: '// 복호화된 파일',
            executeLabel: '실행',
            comingSoonLabel: '출시 예정',
            serviceRecordHeading: '// 경력_기록',
            employmentLogTab: '고용 기록',
            stableWord: '안정',
            evadedWord: '회피됨',
            uplinkActiveLabel: '업링크 활성',
            footerConnection: '연결 유지 중',
            footerUplink: '업링크:',
            bootLines: [
                '업링크 연결 중...',
                '방화벽 우회 중...',
                'PERSONA.SYS 복호화 중...',
                '넷워치 추적: 회피됨',
                '접속 중...',
            ],
        },
        projects: {
            1: { desc: '실시간 메시징 웹 앱을 개발했으며, 이를 점차 완전한 소셜 미디어 플랫폼으로 확장하고 있습니다. 현재 주요 기능은 실시간 메시징과 메시지 영속성입니다. 현재 보안 조치를 구현하고 게시 시스템을 추가하는 작업을 진행 중입니다.' },
            2: { desc: 'Unity2D로 제작한 탑다운 2D 전략 범죄 게임입니다. 조직범죄 버전의 림월드라고 생각하면 됩니다. 이 게임에서는 새로운 범죄 조직/마피아/카르텔을 만들고 고용하며 조직하여 세나고 도시의 영역을 두고 싸웁니다. 반응성이 뛰어나고 지능적인 NPC를 위해 최신 A* 경로 탐색 알고리즘을 구현했습니다.' },
            3: { desc: '신경다양성을 가진 게이머를 타깃으로 하는 건강 에너지 음료 스타트업을 위한 맞춤형 사이트를 개발했습니다. 그래픽 디자이너 및 다른 아티스트들과 함께 사이트 디자인을 도왔습니다.' },
            4: { desc: '직접 참여하는 방탈출 게임인 Proxima Command의 우주선 시뮬레이터 소프트웨어를 작성했습니다. 8명으로 구성된 두 팀이 아두이노와 제 소프트웨어로 제어되는 물리적 콘솔을 사용해 대결합니다.' },
            5: { desc: '확률적 환경에서 UAV(무인기)와 다른 비행 물체를 구별하는 머신러닝 모델입니다. 학습 데이터로 사용하기 위해 오픈소스로 공개된 주석 데이터셋에서 14,000장 이상의 이미지와 650개의 영상을 수집했습니다.' },
        },
        experience: {
            1: { role: '소프트웨어 엔지니어', desc: '결제 및 뱅킹 인프라를 풀스택으로 구축하고 고객 대상 프론트엔드 기능을 개발했으며, 현장의 정비사와 기술자들이 매일 사용하는 물류 도구도 제작했습니다.' },
            2: { role: '소프트웨어 개발자 (계약직)', desc: '시장 조사 보고서를 기반으로 프레젠테이션을 생성하는 Python 기반 자동화 도구를 프로그래밍했습니다.' },
            3: { role: '소프트웨어 개발자', desc: '아두이노와 PySerial을 통해 물리적 제어를 통합한 8인용 아케이드 우주선 시뮬레이터용 Python 소프트웨어를 개발했습니다. 입력 처리를 최적화하여 지연 시간을 30ms 줄였고, 시스템 응답성을 높이기 위해 멀티스레딩 시스템을 구현했습니다.' },
            4: { role: '주니어 개발자', desc: 'TypeScript와 React를 사용해 스타트업을 위한 맞춤형 애니메이션 웹 앱을 제작하여 이탈률을 30% 줄였습니다. CDN 자산 호스팅을 통해 성능을 개선했고 Tailwind CSS로 완전한 모바일 호환성을 확보했습니다.' },
            5: { role: '컴퓨터 공학', desc: '3.7 GPA로 컴퓨팅 학사 학위를 취득했으며 인공지능을 전공했습니다. 졸업 프로젝트는 머신러닝(YOLOv5 및 OpenCV)을 이용한 드론 탐지에 초점을 맞췄습니다. 학장 우등생 명단 (2022, 2023, 2024).' },
        },
    },
    zh: {
        ui: {
            eyebrowIdentity: '// 身份已确认',
            role: '软件开发工程师',
            location: '多伦多，安大略省',
            blurb: '我热爱创造！在职业方面，我使用 TypeScript、Python、React、PostgreSQL、AWS 和 Firebase 开发过网页应用和软件。目前，我专注于成为 TypeScript 高手。',
            judoLabel: '柔术',
            downloadResume: '▸ 下载_简历.pdf',
            programArchiveHeading: '// 项目_档案',
            breachProtocolTab: '入侵协议',
            daemonsWord: '守护进程',
            eyebrowDecrypted: '// 已解密文件',
            executeLabel: '执行',
            comingSoonLabel: '即将推出',
            serviceRecordHeading: '// 履历_记录',
            employmentLogTab: '任职记录',
            stableWord: '稳定',
            evadedWord: '已规避',
            uplinkActiveLabel: '上行链路已激活',
            footerConnection: '连接已保持',
            footerUplink: '上行链路：',
            bootLines: [
                '正在建立上行链路...',
                '正在绕过冰墙防御...',
                '正在解密 PERSONA.SYS...',
                '网络监视追踪：已规避',
                '正在接入...',
            ],
        },
        projects: {
            1: { desc: '开发了一款实时消息网页应用，计划逐步将其扩展为完整的社交媒体平台。目前主要功能是实时消息传递和消息持久化存储。目前正在实施安全防护措施并添加发布系统。' },
            2: { desc: '使用 Unity2D 制作的俯视角 2D 策略犯罪游戏，可以理解为《Rimworld》的黑帮版本。在游戏中，你将建立、招募并管理你的犯罪团伙/黑手党/卡特尔，并在塞纳戈市争夺地盘。实现了现代 A* 寻路算法，让 NPC 反应灵敏且具备智能。' },
            3: { desc: '为一家面向神经多样性玩家的健康能量饮料初创公司开发了定制网站，并与平面设计师及其他艺术家合作完成网站设计。' },
            4: { desc: '为 Proxima Command 的线下密室逃脱星舰模拟器编写了软件。两支各 8 人的队伍使用由 Arduino 和我的软件控制的实体控制台进行对战。' },
            5: { desc: '一个用于在随机环境中检测无人机与其他飞行物体的机器学习模型。从开源标注数据集中收集了 14,000 多张图像和 650 段视频作为训练数据。' },
        },
        experience: {
            1: { role: '软件工程师', desc: '全栈构建了支付与银行基础设施及面向客户的前端功能，并开发了技工和技术人员日常使用的物流工具。' },
            2: { role: '软件开发工程师（合同）', desc: '编写了一个基于 Python 的自动化工具，用于根据市场调研报告生成演示文稿。' },
            3: { role: '软件开发工程师', desc: '为 8 人街机星舰模拟器开发了 Python 软件，通过 Arduino 和 PySerial 集成了实体控制装置。优化了输入处理，将延迟降低了 30 毫秒，并实现了多线程系统以提升系统响应速度。' },
            4: { role: '初级开发工程师', desc: '使用 TypeScript 和 React 为一家初创公司打造了定制动画网页应用，将跳出率降低了 30%。通过 CDN 资源托管提升了性能，并使用 Tailwind CSS 确保了完整的移动端兼容性。' },
            5: { role: '计算机科学', desc: '以 3.7 的 GPA 获得计算机科学学士学位，专攻人工智能。毕业设计项目专注于利用机器学习（YOLOv5 和 OpenCV）进行无人机检测。院长荣誉名单（2022、2023、2024）。' },
        },
    },
};

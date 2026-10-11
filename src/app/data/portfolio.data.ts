/**
 * Toutes les informations du portfolio sont ici.
 * Pour mettre à jour le site, modifiez ce fichier : les composants s'adaptent automatiquement.
 */

export type Category = 'web' | 'mobile' | 'auto';

export interface Project {
  name: string;
  category: Category;
  domain: string;
  stackSummary: string;
  description: string;
  stack: string[];
}

export interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

export interface TimelineEntry {
  when: string;
  title: string;
  org: string;
  current?: boolean;
  points?: string[];
}

export interface Certification {
  title: string;
  provider: string;
  detail: string;
  url: string;
  logo: 'freecodecamp' | 'linkedin';
}

export const PROFILE = {
  name: 'Abdenour Tararbit',
  role: 'Développeur full-stack, spécialisé front-end',
  intro:
    "Ingénieur en informatique à Alger. Je conçois des interfaces web et mobiles pour des applications métier en production : télépaiement, files d'attente, supervision terrain et gestion de laboratoire.",
  /** Pour afficher votre photo : placez-la dans le dossier `public/` (ex. public/photo.jpg) puis écrivez 'photo.jpg'. */
  photo: '' as string,
  initials: 'AT',
  email: 'tararbitabdenour1996@gmail.com',
  phone: '0562 68 03 09',
  phoneHref: 'tel:+213562680309',
  linkedin: 'https://www.linkedin.com/in/abdenourtararbit',
  linkedinLabel: 'linkedin.com/in/abdenourtararbit',
  location: 'Alger et Tizi Ouzou, Algérie',
  languages: 'Kabyle (langue maternelle), arabe, français, anglais',
  facts: {
    job: 'Développeur full-stack à la SEAAL, depuis février 2025',
    degree: 'Master en conduite de projets informatiques',
    stack: ['Angular', 'Flutter', 'Node.js', 'Oracle'],
  },
};

export const PROJECTS: Project[] = [
  {
    name: 'Fatourati', category: 'web', domain: "Télépaiement des factures d'eau", stackSummary: 'Angular, Node.js, Oracle',
    description: "Portail de consultation et de paiement en ligne des factures d'eau pour les abonnés de la SEAAL : panier de factures, lecteur de QR code, reçus PDF et connexion à la passerelle de paiement interbancaire SATIM (cartes CIB et Edahabia).",
    stack: ['Angular', 'TypeScript', 'Node.js', 'Oracle', 'SATIM', 'GitLab CI/CD'],
  },
  {
    name: 'Wakalati', category: 'web', domain: 'Agence virtuelle des abonnés', stackSummary: 'Angular, Node.js, ArcGIS',
    description: "Application web progressive bilingue français/arabe (affichage de droite à gauche) : gestion des contrats, factures et réclamations, localisation des agences et signalement de fuites sur carte, lecture des index de compteur par OCR et assistance en direct.",
    stack: ['Angular 17', 'RxJS', 'Leaflet', 'ArcGIS', 'Tesseract.js', 'Socket.IO', 'Node.js'],
  },
  {
    name: 'Ticketing', category: 'web', domain: "Gestion des files d'attente en agence", stackSummary: 'Angular, Socket.IO, Python',
    description: "Console d'administration et interfaces guichets pour piloter les files d'attente de plusieurs agences : tableaux de bord de fréquentation, synchronisation en temps réel avec les écrans d'appel, borne tactile en Python qui continue de fonctionner hors connexion.",
    stack: ['Angular 18', 'Chart.js', 'Socket.IO', 'Node.js', 'Python', 'Oracle', 'LDAP'],
  },
  {
    name: 'LIMS', category: 'web', domain: "Gestion d'un laboratoire d'analyses de l'eau", stackSummary: 'Angular, Node.js, Oracle',
    description: "Suivi complet des prélèvements et des analyses : enregistrement des échantillons, étiquettes à codes-barres, validation des résultats en plusieurs niveaux, tableaux de bord de conformité et bulletins d'analyse exportés en PDF et Excel.",
    stack: ['Angular 18', 'ECharts', 'Node.js', 'Oracle', 'LDAP', 'JWT', 'Robot Framework'],
  },
  {
    name: 'Tahseen', category: 'web', domain: "Management de la qualité et plans d'actions", stackSummary: 'Angular, Node.js, MySQL',
    description: "Plateforme de suivi des non-conformités et des actions correctives : workflow de traitement, droits d'accès par rôle, tableaux de bord d'indicateurs et exports Excel, avec une suite de tests automatisés de bout en bout.",
    stack: ['Angular 18', 'RxJS', 'Chart.js', 'Node.js', 'MySQL', 'Robot Framework'],
  },
  {
    name: 'TPR', category: 'mobile', domain: 'Relevé des compteurs sur le terrain', stackSummary: 'Flutter, Angular, Node.js',
    description: "Application mobile pour les agents releveurs, utilisable sans réseau : base locale chiffrée, lecture des index par OCR, scan de codes QR et géolocalisation. Une console Angular permet de superviser les agents et les tournées.",
    stack: ['Flutter', 'Dart', 'Angular 19', 'Node.js', 'Oracle', 'SQLCipher'],
  },
  {
    name: 'GlucoPote', category: 'mobile', domain: "Suivi du diabète de type 1 chez l'enfant (projet personnel)", stackSummary: 'Flutter, Riverpod, Gemini',
    description: "Application mobile pour les enfants et leurs parents : reconnaissance des repas par IA, estimation des glucides, calcul des doses d'insuline, journal avec graphiques, rapports PDF pour le médecin, données conservées sur l'appareil et accès parents protégé par biométrie.",
    stack: ['Flutter', 'Dart', 'Riverpod', 'Clean Architecture', 'Gemini API', 'fl_chart'],
  },
  {
    name: 'Tatbiq Terrain', category: 'web', domain: "Suivi des branchements d'eau potable", stackSummary: 'JavaScript, Node.js, SQLite',
    description: "Application de saisie guidée pour les chantiers de raccordement, avec un moteur qui compare les ressources affectées aux standards du cahier des charges. Livrée sous forme d'exécutable Windows autonome, utilisable sans installation.",
    stack: ['JavaScript', 'HTML/CSS', 'Node.js', 'SQLite'],
  },
  {
    name: 'GED', category: 'auto', domain: 'Archivage automatisé des pièces comptables', stackSummary: 'Python, Alfresco, Docker',
    description: 'Chaîne de numérisation qui redresse les scans, reconnaît les références par OCR, renomme les fichiers selon les conventions comptables et les classe automatiquement dans Alfresco.',
    stack: ['Python', 'Tesseract', 'Alfresco', 'Node.js', 'Docker'],
  },
  {
    name: 'Mailing', category: 'web', domain: "Envoi d'e-mails en masse", stackSummary: 'Angular, Node.js',
    description: "Outil d'envoi de campagnes d'information aux clients : import Excel des destinataires, modèles de messages dynamiques et suivi des envois.",
    stack: ['Angular', 'Node.js', 'TypeScript', 'Nodemailer'],
  },
];

export const SKILLS: SkillGroup[] = [
  { label: 'Interfaces web', icon: 'layout', items: ['Angular', 'React', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Tailwind CSS', 'Chart.js', 'ECharts'] },
  { label: 'Mobile', icon: 'phone-app', items: ['Flutter', 'Dart'] },
  { label: 'Back-end', icon: 'server', items: ['Node.js', 'Express', 'Python', 'PHP', 'Socket.IO'] },
  { label: 'Bases de données', icon: 'db', items: ['Oracle', 'MySQL', 'MongoDB', 'SQLite'] },
  { label: 'Sécurité', icon: 'shield', items: ['LDAP / Active Directory', 'JWT', 'Rôles et permissions (RBAC)'] },
  { label: 'Tests et qualité', icon: 'flask', items: ['Tests unitaires', "Tests d'intégration", 'Selenium', 'Robot Framework'] },
  { label: 'Outils et déploiement', icon: 'branch', items: ['Git', 'GitLab CI/CD', 'Docker', 'Nginx'] },
  { label: 'Gestion de projet', icon: 'tasks', items: ['Agile Scrum', 'IceScrum', 'OpenProject'] },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    when: 'Depuis février 2025', title: 'Développeur full-stack', current: true,
    org: "SEAAL, Société des Eaux et de l'Assainissement d'Alger, Kouba",
    points: [
      "Développement d'interfaces web et mobiles et d'APIs pour des applications métier, de l'analyse du besoin à la mise en production.",
      "Maintenance corrective et évolutive d'applications en production.",
      "Intégration continue avec GitLab et travail en méthodologie Agile Scrum.",
    ],
  },
  { when: 'Octobre 2024 à janvier 2025', title: 'Informaticien, service après-vente', org: 'Elite Solution, El-Harrach',
    points: ['Diagnostic et résolution de problèmes logiciels et systèmes, support technique auprès des clients.'] },
  { when: 'Mai à juillet 2024', title: 'Chargé marketing', org: 'Guepex Delivery, Dar El Beida',
    points: ['Gestion des réseaux sociaux, création de contenus visuels et suivi de campagnes de marketing digital.'] },
  { when: 'Depuis novembre 2023', title: 'Responsable de communication', org: 'World Campus, Tizi Ouzou',
    points: ['Gestion des réservations de billets et des démarches de visa, accompagnement des clients.'] },
];

export const EDUCATION: TimelineEntry[] = [
  { when: 'Décembre 2025', title: 'Assurance qualité logiciel', org: "SEAAL, Centre de Formation Management et Métiers de l'Eau" },
  { when: 'Juillet 2025', title: 'Agile Scrum', org: "SEAAL, Centre de Formation Management et Métiers de l'Eau" },
  { when: 'Septembre 2023', title: 'Master en conduite de projets informatiques', org: 'Université Mouloud Mammeri, Tizi Ouzou' },
  { when: 'Juillet 2021', title: 'Licence en systèmes informatiques', org: 'Université Mouloud Mammeri, Tizi Ouzou' },
];

const FCC = 'https://www.freecodecamp.org/certification/fcce454d517-27df-42aa-85d7-76bcb1d4faaa/';

export const CERTIFICATIONS: Certification[] = [
  { title: 'Responsive Web Design', provider: 'freeCodeCamp', detail: 'Février 2023', logo: 'freecodecamp', url: FCC + 'responsive-web-design' },
  { title: 'Legacy JavaScript Algorithms and Data Structures', provider: 'freeCodeCamp', detail: 'Novembre 2024', logo: 'freecodecamp', url: FCC + 'javascript-algorithms-and-data-structures' },
  { title: 'Front End Development Libraries', provider: 'freeCodeCamp', detail: 'Novembre 2024', logo: 'freecodecamp', url: FCC + 'front-end-development-libraries' },
  { title: 'Les fondements de la gestion de projet', provider: 'LinkedIn Learning', detail: "Certificat d'accomplissement", logo: 'linkedin',
    url: 'https://www.linkedin.com/learning/certificates/b7da7dddb195e3a27c9fddbf766a007dce14b2cecfaf36652c25b5720122633b' },
  { title: 'Les fondements de la programmation : tests logiciels et assurance qualité (QA)', provider: 'LinkedIn Learning', detail: "Certificat d'accomplissement", logo: 'linkedin',
    url: 'https://www.linkedin.com/learning/certificates/f8bb9905130de9492fa2e8f17611e90eb747a4c8c01333caf1ab67183945d060' },
];

export const NAV_SECTIONS = [
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'formation', label: 'Formation' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

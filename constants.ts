import { Actor, AxisType, Region, Commune } from './types';

export const ACTORS: Actor[] = [
  // --- Tataouine / Remada (Energy) ---
  {
    id: 'etap-eni-omv',
    name: 'Consortium Pétrolier (ETAP, ENI, OMV, ATOG)',
    sector: 'Énergie / Pétrole',
    description: 'Acteurs historiques avec budgets RSE fléchés (Loi n°35-2018). Transition de la gestion de risque vers la valeur partagée.',
    regions: [Region.SUD_EST],
    communes: [Commune.TATAOUINE, Commune.REMADA],
    axes: [AxisType.IMPACT, AxisType.DIGITAL, AxisType.ECONOMY],
    contribution: 'Financement d\'infrastructures, Bornes interactives, Matériel informatique, Caravanes de santé.',
    contact: 'ETAP RSE (+216 71285097)',
    projectExample: 'Action Pilote A: "Tataouine Connectée" (Guichet Unique Digital)',
    type: 'Private'
  },
  {
    id: 'hasna-petroleum',
    name: 'Hasna Petroleum Services',
    sector: 'Services Pétroliers',
    description: 'Solutions logistiques connectées, sécurité routière.',
    regions: [Region.SUD_EST],
    communes: [Commune.TATAOUINE, Commune.REMADA],
    axes: [AxisType.DIGITAL, AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Formation HSSE, Encouragement entrepreneuriat local.',
    contact: 'contacts@hasnapservices.com',
    type: 'Private'
  },
  {
    id: 'sips',
    name: 'SIPS (Plâtre El Ksour)',
    sector: 'Industrie (Gypse)',
    description: 'Industrie locale cherchant à stabiliser son bassin d\'emploi.',
    regions: [Region.SUD_EST],
    communes: [Commune.TATAOUINE],
    axes: [AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Mécénat de compétences, Sous-traitance locale, Aménagement urbain.',
    contact: 'contact@groupe-hammami.com',
    type: 'Private'
  },
  {
    id: 'fritex',
    name: 'FRITEX',
    sector: 'Industrie',
    description: 'Acteur industriel local.',
    regions: [Region.SUD_EST],
    communes: [Commune.TATAOUINE],
    axes: [AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Equipement salles connectées, soutien associations sportives.',
    contact: 'Mohfritex@gmail.com',
    type: 'Private'
  },

  // --- Gabès / Zarzis / Djerba (Littoral) ---
  {
    id: 'groupe-chimique',
    name: 'Groupe Chimique / ALKIMIA / TIMAB',
    sector: 'Industrie Lourde',
    description: 'En quête de réhabilitation d\'image environnementale.',
    regions: [Region.LITTORAL],
    communes: [Commune.GABES, Commune.GHANNOUCHE],
    axes: [AxisType.IMPACT, AxisType.DIGITAL],
    contribution: 'Capteurs pollution (IoT), Dépollution, Espaces verts (Smart Environment).',
    contact: '+216 75 273 883',
    projectExample: 'Action Pilote C: "Gabès Smart Environment"',
    type: 'Public'
  },
  {
    id: 'mare-alb',
    name: 'MARE ALB (Groupe Salins)',
    sector: 'Industrie (Sel)',
    description: 'Exploitation ressources naturelles, sensible à l\'attractivité territoriale.',
    regions: [Region.LITTORAL],
    communes: [Commune.ZARZIS],
    axes: [AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Respect charte RSE, Protection biodiversité, Achats responsables.',
    contact: '+216 75 748100 / www.salins.com',
    projectExample: 'Action Pilote B: "Zarzis Blue Economy"',
    type: 'Private'
  },
  {
    id: 'gump',
    name: 'Société GUMP',
    sector: 'Agro (Crabe)',
    description: 'Valorisation des produits de la mer.',
    regions: [Region.LITTORAL],
    communes: [Commune.ZARZIS],
    axes: [AxisType.DIGITAL, AxisType.ECONOMY],
    contribution: 'Traçabilité numérique, Valorisation déchets marins, Soutien pêcheurs.',
    contact: '+216 94 819 969',
    type: 'Private'
  },
  {
    id: 'sotel-sud',
    name: 'SOTEL-SUD',
    sector: 'Télécoms / Tech',
    description: 'Intégrateur local de solutions technologiques.',
    regions: [Region.LITTORAL],
    communes: [Commune.GABES],
    axes: [AxisType.DIGITAL, AxisType.ECONOMY],
    contribution: 'Inclusion numérique, Formation code, Incubation startups locales.',
    contact: 'taoufik.najar@stsgroupe.com',
    type: 'Private'
  },
  {
    id: 'kilani',
    name: 'Groupe KILANI',
    sector: 'Industrie / Santé',
    description: 'Entreprise impliquée dans le PGE Gabès.',
    regions: [Region.LITTORAL],
    communes: [Commune.GABES, Commune.GHANNOUCHE],
    axes: [AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Économie circulaire, gestion déchets industriels.',
    contact: 'http://www.kilanientreprise.com',
    type: 'Private'
  },
  {
    id: 'djerba-tourisme',
    name: 'Fédération Hôtellerie Djerba',
    sector: 'Tourisme',
    description: 'Hôtels et acteurs touristiques.',
    regions: [Region.LITTORAL],
    communes: [Commune.DJERBA],
    axes: [AxisType.DIGITAL, AxisType.IMPACT],
    contribution: 'Applications touristiques, Nettoyage plages, Promotion artisanat.',
    contact: 'contact@djerbatourisme.com',
    type: 'Private'
  },
  {
    id: 'topoliva',
    name: 'Topoliva / Tunisel',
    sector: 'Agroalimentaire / Sel',
    description: 'Valorisation produits terroir.',
    regions: [Region.LITTORAL],
    communes: [Commune.MEDENINE],
    axes: [AxisType.ECONOMY, AxisType.IMPACT],
    contribution: 'Marketing digital territorial, Agriculture durable.',
    contact: 'tunisel@planet.tn',
    type: 'Private'
  },

  // --- Nord-Ouest (Kef / Jendouba) ---
  {
    id: 'sebn',
    name: 'SEBN (Sumitomo)',
    sector: 'Industrie Automobile',
    description: 'Gros employeur (Câblage), besoin de logistique ouvrière efficace.',
    regions: [Region.NORD_OUEST],
    communes: [Commune.JENDOUBA, Commune.SOUK_ESSEBT],
    axes: [AxisType.DIGITAL, AxisType.IMPACT, AxisType.ECONOMY],
    contribution: 'Transport collaboratif (App), Amélioration écoles, Gestion RH digitalisée.',
    contact: '+216 70 013 174 / Sebn.com',
    projectExample: 'Action Pilote D: "Jendouba Citoyenne" (Transport Collaboratif)',
    type: 'International'
  },
  {
    id: 'la-belle-tazrurt',
    name: 'La Belle TAZRURT',
    sector: 'Agro / Cosmétique Bio',
    description: 'Modèle d\'entreprise sociale.',
    regions: [Region.NORD_OUEST],
    communes: [Commune.KEF, Commune.ZAAFRANE],
    axes: [AxisType.ECONOMY, AxisType.IMPACT],
    contribution: 'E-commerce, Branding, Valorisation biodiversité, Empowerment femmes.',
    contact: 'tazrurt.contact@gmail.com',
    projectExample: 'Action Pilote E: "Kef Terroir Digital"',
    type: 'Private'
  },
  {
    id: 'nahlati',
    name: 'Nahlati',
    sector: 'Agro (Miel)',
    description: 'Secteur apicole local.',
    regions: [Region.NORD_OUEST],
    communes: [Commune.KEF],
    axes: [AxisType.DIGITAL, AxisType.IMPACT],
    contribution: 'Digitalisation circuits distribution, Protection abeilles.',
    contact: 'saidasalmeni767@gmail.com',
    type: 'Private'
  },

  // --- National / Transversal ---
  {
    id: 'orange',
    name: 'Orange Tunisie / ODC',
    sector: 'Télécom / Tech',
    description: 'Partenaire stratégique digitalisation et formation.',
    regions: [Region.NATIONAL],
    communes: [Commune.TOUTES],
    axes: [AxisType.DIGITAL, AxisType.ECONOMY],
    contribution: 'Orange Digital Centers (ODC), Formation code, Fablab, Incubation startups.',
    contact: 'formations.orange.tn',
    type: 'International'
  },
  {
    id: 'telnet',
    name: 'Telnet Group',
    sector: 'Ingénierie / Tech',
    description: 'Expertise IoT et Smart City.',
    regions: [Region.NATIONAL],
    communes: [Commune.TOUTES],
    axes: [AxisType.DIGITAL, AxisType.IMPACT],
    contribution: 'Solutions Smart City, Green IT, Cybersécurité.',
    contact: 'groupe-telnet.com',
    type: 'Private'
  },
  {
    id: 'banques',
    name: 'Banques (BIAT, Attijari, STB, UBCI)',
    sector: 'Finance',
    description: 'Acteurs financiers avec politiques RSE structurées.',
    regions: [Region.NATIONAL],
    communes: [Commune.TOUTES],
    axes: [AxisType.ECONOMY, AxisType.IMPACT],
    contribution: 'Lignes de crédit TPE/PME, Inclusion financière, Réhabilitation écoles.',
    contact: 'Directions RSE respectives',
    type: 'Private'
  },
  {
    id: 'cdc',
    name: 'CDC Tunisie',
    sector: 'Finance Publique',
    description: 'Bras financier de l\'état pour le développement.',
    regions: [Region.NATIONAL],
    communes: [Commune.TOUTES],
    axes: [AxisType.ECONOMY, AxisType.IMPACT],
    contribution: 'Cofinancement projets verts, Startups (JoussourInvest).',
    contact: 'www.cdc.tn',
    type: 'Public'
  },
  {
    id: 'pwc',
    name: 'PwC / Cabinets Conseil',
    sector: 'Conseil',
    description: 'Expertise méthodologique et stratégique.',
    regions: [Region.NATIONAL],
    communes: [Commune.TOUTES],
    axes: [AxisType.DIGITAL, AxisType.IMPACT],
    contribution: 'Assistance maîtrise d\'ouvrage, Stratégie numérique, Audits Green IT.',
    contact: 'tunisie.pwc.fr',
    type: 'Private'
  }
];

export const REGION_DETAILS = {
  [Region.SUD_EST]: {
    title: "Zone Sud-Est (Tataouine, Remada, Kébili)",
    focus: "L'Énergie & l'Industrie",
    opportunity: "Forte présence des pétroliers (ETAP, ENI, OMV) et industriels (Gypse). Ces acteurs ont des budgets RSE fléchés mais manquent de projets structurants.",
    priority: "Financement d'infrastructures numériques lourdes et initiatives économiques pour diversifier l'économie hors-hydrocarbures."
  },
  [Region.LITTORAL]: {
    title: "Zone Littorale (Gabès, Médenine, Djerba, Zarzis)",
    focus: "Chimie, Sel & Tourisme",
    opportunity: "Gabès concentre une industrie lourde en quête de réhabilitation d'image (volet environnemental). Zarzis et Djerba disposent d'acteurs liés aux ressources naturelles et au tourisme.",
    priority: "Projets d'impact environnemental (Smart Environment) et digitalisation des services aux citoyens/touristes (Blue Economy)."
  },
  [Region.NORD_OUEST]: {
    title: "Zone Nord-Ouest (Jendouba, Kef)",
    focus: "Agro-industrie & Automobile",
    opportunity: "Présence de géants comme SEBN et initiatives agro-écologiques. Besoin de logistique pour la main d'œuvre.",
    priority: "Digitalisation des processus administratifs (état civil, transports) et initiatives d'économie sociale et solidaire (ESS)."
  },
  [Region.NATIONAL]: {
    title: "National / Transversal",
    focus: "Finance, Tech & Support",
    opportunity: "Acteurs systémiques (Banques, Telcos) et organismes nationaux capables de financer et d'outiller les projets locaux à grande échelle.",
    priority: "Mécénat de compétences technologiques, inclusion financière et appui institutionnel aux initiatives locales."
  }
};
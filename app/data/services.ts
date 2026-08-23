export type Language = "en" | "fr";
export type LocalizedText = { en: string; fr: string };

export type PrintService = {
  slug: string;
  number: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  features: { en: string[]; fr: string[] };
  images: string[];
};

export const services: PrintService[] = [
  {
    slug: "uv-gadgets",
    number: "01",
    title: { en: "UV Gadgets", fr: "Gadgets en UV" },
    shortDescription: {
      en: "Personalised promotional objects with crisp, durable colour.",
      fr: "Des objets promotionnels personnalisés aux couleurs nettes et durables.",
    },
    description: {
      en: "Our UV printing service applies detailed, full-colour graphics directly to a wide variety of promotional objects and rigid materials. It is ideal for useful branded pieces that need to look sharp and stand up to regular handling.",
      fr: "Notre service d’impression UV applique des visuels détaillés en couleur directement sur une grande variété d’objets promotionnels et de supports rigides. C’est la solution idéale pour des objets de marque utiles, nets et résistants à une manipulation régulière.",
    },
    features: {
      en: ["Full-colour direct printing", "Suitable for rigid objects", "Small and volume runs", "Durable, precise finish"],
      fr: ["Impression directe en couleur", "Adaptée aux objets rigides", "Petites et grandes séries", "Finition précise et durable"],
    },
    images: [
      "/images/business-cards-original.jpg",
      "/images/interior-signage.jpg",
      "/images/flyers-original.png",
    ],
  },
  {
    slug: "posters",
    number: "02",
    title: { en: "Posters", fr: "Affiches" },
    shortDescription: {
      en: "Event, campaign and promotional visuals made to command attention.",
      fr: "Des visuels événementiels et promotionnels conçus pour attirer l’attention.",
    },
    description: {
      en: "Xmedia produces clear, colourful posters and display graphics for events, schools, churches, sales campaigns and business announcements. We help you select a size and material suited to where the visual will be displayed.",
      fr: "Xmedia réalise des affiches et visuels colorés pour les événements, écoles, églises, campagnes commerciales et annonces d’entreprise. Nous vous aidons à choisir le format et le support adaptés au lieu d’exposition.",
    },
    features: {
      en: ["Indoor and outdoor formats", "High-impact colour", "Multiple sizes available", "Campaign-ready finishing"],
      fr: ["Formats intérieurs et extérieurs", "Couleurs à fort impact", "Plusieurs dimensions disponibles", "Finitions prêtes pour vos campagnes"],
    },
    images: [
      "/images/interior-signage.jpg",
      "/images/brochures-original.jpg",
      "/images/business-cards-original.jpg",
    ],
  },
  {
    slug: "business-cards",
    number: "03",
    title: { en: "Business Cards", fr: "Carte de visite" },
    shortDescription: {
      en: "Professional cards that keep your name and business remembered.",
      fr: "Des cartes professionnelles qui rendent votre nom et votre entreprise mémorables.",
    },
    description: {
      en: "A business card remains one of the most direct expressions of your professional identity. We produce carefully printed cards that present your contact details clearly and give every introduction a polished, credible finish.",
      fr: "La carte de visite demeure l’un des meilleurs vecteurs de votre image professionnelle. Nous produisons des cartes soigneusement imprimées qui présentent clairement vos coordonnées et donnent à chaque rencontre une finition crédible et soignée.",
    },
    features: {
      en: ["Single or double sided", "Sharp text and rich colour", "Professional paper choices", "Finishing guidance included"],
      fr: ["Recto ou recto-verso", "Textes nets et couleurs riches", "Choix de papiers professionnels", "Conseils de finition inclus"],
    },
    images: [
      "/images/business-cards-original.jpg",
      "/images/flyers-original.png",
      "/images/brochures-original.jpg",
    ],
  },
  {
    slug: "flyers",
    number: "04",
    title: { en: "Flyers", fr: "Flyers" },
    shortDescription: {
      en: "Simple, effective handouts for promotions, launches and announcements.",
      fr: "Des supports simples et efficaces pour promotions, lancements et annonces.",
    },
    description: {
      en: "Flyers are a fast and effective way to announce an event, a promotion or an exceptional offer. We print each project with attention to colour and readability so your message is easy to understand at a glance.",
      fr: "Le flyer demeure un moyen simple et efficace pour annoncer un événement, une promotion ou une vente exceptionnelle. Chaque projet est imprimé avec une attention particulière aux couleurs et à la lisibilité pour que votre message soit compris d’un regard.",
    },
    features: {
      en: ["Multiple paper sizes", "Single or double sided", "Vivid full-colour print", "Suitable for short or large runs"],
      fr: ["Plusieurs formats de papier", "Recto ou recto-verso", "Impression couleur vive", "Petites ou grandes quantités"],
    },
    images: [
      "/images/flyers-original.png",
      "/images/brochures-original.jpg",
      "/images/business-cards-original.jpg",
    ],
  },
  {
    slug: "leaflets",
    number: "05",
    title: { en: "Folded Leaflets", fr: "Dépliants" },
    shortDescription: {
      en: "Well-structured information, organised into a compact printed format.",
      fr: "Une information bien structurée et organisée dans un support imprimé compact.",
    },
    description: {
      en: "When you need more structure than a single flyer, a folded leaflet is the ideal solution. It gives your information a clear order, a strong cover and enough space to explain your products, services or organisation.",
      fr: "Lorsque vous souhaitez mieux structurer vos informations que sur un simple flyer, le dépliant est la solution idéale. Il offre une couverture forte et suffisamment d’espace pour présenter vos produits, services ou votre organisation.",
    },
    features: {
      en: ["Several fold options", "Clear information hierarchy", "Full-colour printing", "Professional paper and finish"],
      fr: ["Plusieurs types de plis", "Hiérarchie d’information claire", "Impression en couleur", "Papier et finition professionnels"],
    },
    images: [
      "/images/brochures-original.jpg",
      "/images/flyers-original.png",
      "/images/business-cards-original.jpg",
    ],
  },
  {
    slug: "embroidery",
    number: "06",
    title: { en: "Embroidery", fr: "Broderie" },
    shortDescription: {
      en: "Clean, durable textile branding for teams, brands and organisations.",
      fr: "Un marquage textile net et durable pour équipes, marques et organisations.",
    },
    description: {
      en: "Xmedia offers embroidery for prototypes, small production runs and larger quantities. Artwork is reviewed before production so logos and lettering remain clear, balanced and appropriate for the selected garment.",
      fr: "Xmedia propose un service de broderie pour les prototypes, les petites séries et les grandes productions. Chaque fichier est examiné avant fabrication afin que les logos et lettrages restent nets, équilibrés et adaptés au textile choisi.",
    },
    features: {
      en: ["Logos and lettering", "Prototype to volume production", "Artwork review included", "Durable thread finish"],
      fr: ["Logos et lettrages", "Du prototype à la grande série", "Vérification du fichier incluse", "Finition durable au fil"],
    },
    images: [
      "/images/custom-apparel.jpg",
      "/images/embroidery-shop.webp",
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

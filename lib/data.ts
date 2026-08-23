import type { Bilingual } from "./translations";

export type Service = {
  title: Bilingual;
  description: Bilingual;
  image: string;
  className: string;
  number: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: { en: "Large format & banners", fr: "Grand format & bannières" },
    description: {
      en: "Posters, event banners and high-impact outdoor visuals.",
      fr: "Affiches, bâches événementielles et visuels extérieurs percutants.",
    },
    image: "/images/large-format-printing.jpg",
    className: "service-card--wide",
  },
  {
    number: "02",
    title: { en: "Business cards", fr: "Cartes de visite" },
    description: {
      en: "A memorable first impression, made to feel as good as it looks.",
      fr: "Une première impression mémorable, belle à voir et agréable au toucher.",
    },
    image: "/images/business-cards-original.jpg",
    className: "service-card--standard",
  },
  {
    number: "03",
    title: { en: "Flyers", fr: "Flyers" },
    description: {
      en: "Crisp, colourful handouts for launches, promotions and events.",
      fr: "Des supports nets et colorés pour lancements, promotions et événements.",
    },
    image: "/images/flyers-original.png",
    className: "service-card--standard",
  },
  {
    number: "04",
    title: { en: "Brochures & leaflets", fr: "Brochures & dépliants" },
    description: {
      en: "Structured stories with beautiful folds and professional finishes.",
      fr: "Des contenus structurés, de beaux plis et des finitions professionnelles.",
    },
    image: "/images/brochures-original.jpg",
    className: "service-card--standard",
  },
  {
    number: "05",
    title: { en: "Custom apparel", fr: "Textile personnalisé" },
    description: {
      en: "Embroidery and garment printing for teams, brands and communities.",
      fr: "Broderie et marquage textile pour équipes, marques et communautés.",
    },
    image: "/images/custom-apparel.jpg",
    className: "service-card--wide",
  },
  {
    number: "06",
    title: { en: "Signs & visual spaces", fr: "Signalétique & espaces" },
    description: {
      en: "Branded interiors, display graphics and directional signage.",
      fr: "Habillage d'espace, supports d'exposition et signalétique directionnelle.",
    },
    image: "/images/interior-signage.jpg",
    className: "service-card--standard",
  },
];

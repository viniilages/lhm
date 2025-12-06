import zurich from "../assets/zurich.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

export type Imovel = {
  id: string;
  name: string;
  location: string;
  status: string;
  description: string;
  image: string;
  type: string;
  priceFrom?: number;
  bedrooms?: number;
  bathrooms?: number;
  areaFrom?: number;
};

export const imoveis: Imovel[] = [
  {
    id: "residencial-zurich",
    name: "Residencial Zurich",
    location: "Ouro Branco, Minas Gerais",
    status: "Em Construção",
    description: "Apartamentos de 3 e 4 suítes com vista panorâmica e lazer completo.",
    image: zurich,
    type: "Apartamento",
    priceFrom: 750000,
    bedrooms: 3,
    bathrooms: 4,
    areaFrom: 120,
  },
  {
    id: "edificio-essence",
    name: "Edifício Essence",
    location: "Jardins, São Paulo",
    status: "Lançamento",
    description: "Unidades de alto padrão com acabamento premium em uma das regiões mais valorizadas de São Paulo.",
    image: project2,
    type: "Apartamento",
    priceFrom: 1250000,
    bedrooms: 2,
    bathrooms: 3,
    areaFrom: 95,
  },
  {
    id: "residencial-splendor",
    name: "Residencial Splendor",
    location: "Itaim Bibi, São Paulo",
    status: "Previsto",
    description: "Complexo residencial com área de lazer completa, conveniência e segurança 24h.",
    image: project3,
    type: "Apartamento",
    priceFrom: 980000,
    bedrooms: 3,
    bathrooms: 3,
    areaFrom: 110,
  },
];

import zurich from "../assets/zurich.png";


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
    description: "O Residencial Zurich é um empreendimento compacto e sofisticado em Ouro Branco, com volumetria bem resolvida e foco em conforto. O projeto conta com 2 subsolos de garagem (8 vagas no total), térreo com 2 apartamentos e 2 vagas, além de dois pavimentos tipo com 2 apartamentos por andar e área de caixa d'água na cobertura. São 624,97 m² de área total construída, distribuídos em 328,84 m² de apartamentos, 151,16 m² de garagem e 144,97 m² de áreas de uso comum, garantindo funcionalidade e excelente aproveitamento dos espaços.",
    image: zurich,
    type: "Apartamento",
    priceFrom: 750000,
    bedrooms: 3,
    bathrooms: 4,
    areaFrom: 328,
  }
];

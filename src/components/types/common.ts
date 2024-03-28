interface Overview {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetData {
  name: string;
  overview: Overview;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  structure:any;
  geology:any;
}


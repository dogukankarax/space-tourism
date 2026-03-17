export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  id: number;
  name: string;
  image: string;
  role: string;
  bio: string;
}

export interface TechnologyImage {
  portrait: string;
  landscape: string;
}

export interface Technology {
  id: number;
  name: string;
  img: TechnologyImage;
  description: string;
}

export interface SpaceData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

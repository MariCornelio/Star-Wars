export interface Character {
  id?: string;
  name: string;
  homeworld: Homeworld;
  species: Species[];
  vehicles: Vehicle[];
  eye_color: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
}

export interface Vehicle {
  name: string;
}

export interface Species {
  name: string;
}

export interface Homeworld {
  name: string;
}

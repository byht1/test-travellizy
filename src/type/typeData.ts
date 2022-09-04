export type ServerData = {
  id: string;
  brand: string;
  photo: string;
  prise: number;
  diagonal: string;
  refresh_rate: string;
  screen_extension: string;
  matrix_type: string;
  relation_parties: string;
  built_speaker: boolean;
};

export type Filters = {
  brand: string[];
  diagonal: string[];
  refresh_rate: string[];
  screen_extension: string[];
  matrix_type: string[];
  relation_parties: string[];
  built_speaker: boolean[];
  prise: {
    min: number;
    max: number;
  };
};

export type Product = {
  id: string;
  brand: string;
  photo: string;
  prise: string;
  screen_extension: string;
};

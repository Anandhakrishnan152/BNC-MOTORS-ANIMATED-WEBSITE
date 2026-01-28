
export interface BikeSpec {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface ColorVariant {
  name: string;
  hex: string;
  image: string;
}

export interface BikeModel {
  id: string;
  name: string;
  tagline: string;
  price: string;
  colorVariants: ColorVariant[];
  specs: BikeSpec[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

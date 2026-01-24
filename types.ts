
export interface BikeSpec {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface BikeModel {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  specs: BikeSpec[];
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

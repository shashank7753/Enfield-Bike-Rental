export interface Motorcycle {
  id: string;
  name: string;
  image: string;
  price: number;
  type: string;
  cc: number;
  available: boolean;
  rating: number;
  owner: {
    name: string;
    rating: number;
  };
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Location {
  lat: number;
  lng: number;
  address: string;
}
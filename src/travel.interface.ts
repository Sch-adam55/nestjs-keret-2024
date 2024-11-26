
export interface TravelDataWithoutId {
  destination: string;
  description: string;
  imgUrl: string;
  price: number;
  discount: number;
}

export interface TravelData extends TravelDataWithoutId {
  id: number;
}

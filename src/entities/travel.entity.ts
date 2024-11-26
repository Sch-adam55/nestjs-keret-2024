import { TravelDataWithoutId } from "src/travel.interface";

export class Travel {
  remove(id: number): boolean {
    throw new Error('Method not implemented.');
  }
  replace(id: number, updateTravelDto: TravelDataWithoutId): import("src/travel.interface").TravelData {
    throw new Error('Method not implemented.');
  }
  getById(id: number): import("src/travel.interface").TravelData {
    throw new Error('Method not implemented.');
  }
  getAll(): import("src/travel.interface").TravelData[] {
    throw new Error('Method not implemented.');
  }
  add(createTravelDto: TravelDataWithoutId): import("../travel.interface").TravelData {
    throw new Error('Method not implemented.');
  }
  id: number;
  destination: string; 
  description: string;  
  imageUrl: string;     
  price: number;        
  discount: number;     
}

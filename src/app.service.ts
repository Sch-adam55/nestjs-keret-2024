
import { Injectable } from '@nestjs/common';
import { TravelData, TravelDataWithoutId } from './travel.interface';
import { Travel } from './entities/travel.entity';

@Injectable()
export class TravelsService {
  private travels: Travel;

  constructor() {
    this.travels = new Travel();
  }

  create(createTravelDto: TravelDataWithoutId): TravelData {
    return this.travels.add(createTravelDto);
  }

  findAll(): TravelData[] {
    return this.travels.getAll();
  }

  findOne(id: number): TravelData | undefined {
    return this.travels.getById(id);
  }

  update(id: number, updateTravelDto: TravelDataWithoutId): TravelData {
    return this.travels.replace(id, updateTravelDto);
  }

  remove(id: number): boolean {
    return this.travels.remove(id);
  }
}


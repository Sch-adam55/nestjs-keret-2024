
import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './create-travel.dto';
import { UpdateTravelDto } from './update-travel.dto';
import { Travel } from './entities/travel.entity';

@Injectable()
export class TravelsService {
  private travels: Travel[] = [];
  private idCounter = 1;

  create(createTravelDto: CreateTravelDto): Travel {
    const newTravel: Travel = {
      id: this.idCounter++,
      ...createTravelDto,
    };
    this.travels.push(newTravel);
    return newTravel;
  }

  findAll(): Travel[] {
    return this.travels;
  }

  findOne(id: number): Travel {
    return this.travels.find(travel => travel.id === id);
  }

  update(id: number, updateTravelDto: UpdateTravelDto): Travel {
    const travel = this.findOne(id);
    if (!travel) {
      return null;
    }
    Object.assign(travel, updateTravelDto);
    return travel;
  }

  remove(id: number): boolean {
    const index = this.travels.findIndex(travel => travel.id === id);
    if (index === -1) {
      return false;
    }
    this.travels.splice(index, 1);
    return true;
  }
}


import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TravelsService } from './app.service';
import { CreateTravelDto } from './create-travel.dto';
import { UpdateTravelDto } from './update-travel.dto';
import { Travel } from './entities/travel.entity';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) {}

  @Get()
  findAll(): Travel[] {
    return this.travelsService.findAll();
  }

  @Get('/travels/:id')
  findOne(@Param('id') id: number): Travel {
    return this.travelsService.findOne(id);
  }

  @Post()
  create(@Body() createTravelDto: CreateTravelDto): Travel {
    return this.travelsService.create(createTravelDto);
  }

  @Patch('/travels:id')
  update(@Param('id') id: number, @Body() updateTravelDto: UpdateTravelDto): Travel {
    return this.travelsService.update(id, updateTravelDto);
  }

  @Delete('/travels:id')
  remove(@Param('id') id: number): boolean {
    return this.travelsService.remove(id);
  }
}







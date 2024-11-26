// src/travels/travels.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { TravelsService } from './app.service';
import { TravelsController } from './app.controller';
import { CreateTravelDto } from './create-travel.dto';

describe('TravelsController', () => {
  let controller: TravelsController;
  let service: TravelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelsController],
      providers: [TravelsService],
    }).compile();

    controller = module.get<TravelsController>(TravelsController);
    service = module.get<TravelsService>(TravelsService);
  });

  it('should create a travel', () => {
    const createTravelDto: CreateTravelDto = {
      destination: 'Budapest, Hungary',
      description: 'A great place to visit with a lot of history.',
      imageUrl: 'http://example.com/budapest.jpg',
      price: 50000,
      discount: 10,
    };

    const result = service.create(createTravelDto);
    expect(result).toHaveProperty('id');
    expect(result.destination).toBe(createTravelDto.destination);
  });

  it('should return all travels', () => {
    expect(controller.findAll()).toBeInstanceOf(Array);
  });

  it('should return one travel by ID', () => {
    const travel = service.create({
      destination: 'Paris, France',
      description: 'City of Lights!',
      imageUrl: 'http://example.com/paris.jpg',
      price: 70000,
      discount: 20,
    });
    expect(controller.findOne(travel.id)).toEqual(travel);
  });
});

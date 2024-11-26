
import { Test, TestingModule } from '@nestjs/testing';
import { TravelsController } from './app.controller';
import { TravelsService } from './app.service';
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
      destination: 'Thailand',
      description: 'A beautiful tropical destination.',
      imgUrl: 'http://example.com/thailand.jpg',
      price: 350_000,
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
      destination: 'Paris',
      description: 'The city of love.',
      imgUrl: 'http://example.com/paris.jpg',
      price: 450_000,
      discount: 15,
    });
    expect(controller.findOne(travel.id)).toEqual(travel);
  });
});

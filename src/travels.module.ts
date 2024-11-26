
import { Module } from '@nestjs/common';
import { TravelsService } from './app.service';
import { TravelsController } from './app.controller';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService],
})
export class TravelsModule {}

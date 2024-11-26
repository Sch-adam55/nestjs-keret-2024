
import { Module } from '@nestjs/common';
import { TravelsModule } from './travels.module';

@Module({
  imports: [TravelsModule],
})
export class AppModule {}

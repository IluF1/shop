import { Module } from '@nestjs/common';
import { CardsServiceService } from './cards-service.service';
import { CardsServiceController } from './cards-service.controller';

@Module({
  controllers: [CardsServiceController],
  providers: [CardsServiceService],
})
export class CardsServiceModule {}

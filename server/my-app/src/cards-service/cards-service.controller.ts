import { Controller } from '@nestjs/common';
import { CardsServiceService } from './cards-service.service';

@Controller('cards-service')
export class CardsServiceController {
  constructor(private readonly cardsServiceService: CardsServiceService) {}
}

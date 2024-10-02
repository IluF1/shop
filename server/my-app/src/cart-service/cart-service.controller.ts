import { Controller } from '@nestjs/common';
import { CartServiceService } from './cart-service.service';

@Controller('cart-service')
export class CartServiceController {
  constructor(private readonly cartServiceService: CartServiceService) {}
}

import { Module } from '@nestjs/common';
import { CartServiceService } from './cart-service.service';
import { CartServiceController } from './cart-service.controller';

@Module({
  controllers: [CartServiceController],
  providers: [CartServiceService],
})
export class CartServiceModule {}

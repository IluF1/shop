import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthServiceModule } from './auth-service/auth-service.module';
import { CardsServiceModule } from './cards-service/cards-service.module';
import { CartServiceModule } from './cart-service/cart-service.module';
import { UserServiceModule } from './user-service/user-service.module';

@Module({
  imports: [AuthServiceModule, CardsServiceModule, CartServiceModule, UserServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

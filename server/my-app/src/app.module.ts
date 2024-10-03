import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { CartModule } from "./cart/cart.module";
import { CardModule } from "./card/card.module";

@Module({
    imports: [UserModule, AuthModule, CartModule, CardModule],
})
export class AppModule {}

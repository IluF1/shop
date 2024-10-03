import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { CartModule } from "./cart/cart.module";
import { CardModule } from "./card/card.module";
import { PrismaModule } from "./prisma.module";

@Module({
    imports: [UserModule, AuthModule, CartModule, CardModule, PrismaModule],
})
export class AppModule {}

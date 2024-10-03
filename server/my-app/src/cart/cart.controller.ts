import { Controller } from "@nestjs/common";
import { CartService } from "./cart.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Корзина")
@Controller("cart")
export class CartController {
    constructor(private readonly cartService: CartService) {}

    
}

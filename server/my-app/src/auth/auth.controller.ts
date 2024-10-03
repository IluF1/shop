import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "src/dto/user.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    async login(@Body() dto: UserDto) {
        return this.authService.login(dto);
    }

    @Post("/registration")
    async registration(@Body() dto: UserDto) {
        return this.authService.registration(dto);
    }
}

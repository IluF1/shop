import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "src/dto/user.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Регистрация и вход")
@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/login")
    @ApiResponse({ status: 200, type: UserDto })
    @ApiResponse({ status: 403, description: "Ошибка входа в аккаунт" })
    async login(@Body() dto: UserDto) {
        return this.authService.login(dto);
    }

    @Post("/registration")
    @ApiResponse({ status: 201, type: UserDto })
    @ApiResponse({ status: 403, description: "Ошибка создания пользователя" })
    async registration(@Body() dto: UserDto) {
        return this.authService.registration(dto);
    } 
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNumber, Length } from "class-validator";

enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
}

export class UserDto {
    @ApiProperty({
        description: "Уникальный id пользователя",
        example: 1,
    })
    @IsNumber()
    readonly id: number;

    @ApiProperty({
        description: "Имя пользователя",
        example: "Илья",
    })
    @IsString({ message: "Должен быть строкой" })
    readonly name: string;

    @ApiProperty({
        description: "Почта пользователя",
        example: "test@test.com",
    })
    @IsString({ message: "Должен быть строкой" })
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        description: "Пароль пользователя",
        example: "IlyaIlyaIlya1231",
        minimum: 16,
        maximum: 100,
    })
    @IsString({ message: "Должен быть строкой" })
    @Length(16, 100)
    readonly password: string;

    @ApiProperty({
        description: "Уникальный логин пользователя",
        example: "ilyakaramba",
    })
    @IsString({ message: "Должен быть строкой" })
    readonly login: string;

    @ApiProperty({
        description: "Роль пользователя",
        example: "USER",
        enum: Role,
    })
    @IsString({ message: "Должен быть строкой" })
    readonly role: Role;
}

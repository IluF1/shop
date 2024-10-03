import { ApiProperty, ApiResponse } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CardDto {
    @ApiProperty({ description: "Уникальный id товара", example: 1 })
    @IsNumber()
    readonly id: number;

    @ApiProperty({ description: "Имя товара", example: "Бананы" })
    @IsString({ message: "Должно быть строкой" })
    readonly name: string;

    @ApiProperty({ description: "Описание товара", example: "Крутые бананы" })
    @IsString({ message: "Должно быть строкой" })
    readonly description: string;

    @ApiProperty({ description: 'Картинка товара', example: 'i.png'})
    @IsString({ message: "Должно быть строкой" })
    readonly mainImage: string

    @ApiProperty({ description: 'Цена товара', example: '100000$'})
    @IsString({ message: "Должно быть строкой" })
    readonly price: string
}

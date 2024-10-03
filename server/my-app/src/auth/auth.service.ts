import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { PrismaService } from "src/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async login(dto: UserDto) {}

    async registration(dto: UserDto) {
        const [findLogin, findEmail] = await Promise.all([
            this.prisma.user.findUnique({
                where: {
                    login: dto.login,
                },
            }),
            this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                },
            }),
        ]);

        if (findLogin) {
            throw new Error(
                "Ошибка, пользователь с таким логином уже существует",
            );
        }
        if (findEmail) {
            throw new Error(
                "Ошибка, пользователь с такой почтой уже существует",
            );
        }

        const hashPassword = await bcrypt.hash(dto.password, 12);

        const createUser = await this.prisma.user.create({
            data: {
                email: dto.email,
                login: dto.login,
                name: dto.name,
                password: hashPassword,
            },
        });

        return createUser;
    }
}

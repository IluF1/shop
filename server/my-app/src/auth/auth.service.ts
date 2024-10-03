import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async login(dto: UserDto) {
        
    }

    async registration(dto: UserDto) {

    }
}

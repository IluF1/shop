import { Controller } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller('auth-service')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}
}

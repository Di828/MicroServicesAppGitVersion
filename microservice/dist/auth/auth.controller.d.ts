import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/regestration.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    registration(registrationDto: RegistrationDto): Promise<{
        token: string;
    }>;
    adminRegistration(registrationDto: RegistrationDto): Promise<{
        token: string;
    }>;
    updateUserById(updateDto: any): Promise<import("../users/user.model").User>;
}

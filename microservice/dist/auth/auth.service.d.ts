import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/regestration.dto';
import { User } from '../users/user.model';
import { UpdateDto } from './dto/update.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    registration(registrationDto: RegistrationDto, isAdmin?: boolean): Promise<{
        token: string;
    }>;
    updateUserById(id: number, updateDto: UpdateDto): Promise<User>;
    private loginExists;
    private emailExists;
    private userOrEmailExist;
    private generateToken;
    private validateUser;
}

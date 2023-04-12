import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    getAllUsers(): Promise<User[]>;
    getUserById(user_id: number): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserByLoginOrEmail(login: string, email: string): Promise<User>;
    getUserByLogin(login: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    addRole(addRoleDto: AddRoleDto): Promise<{
        message: string;
    }>;
    deleteUserById(user_id: number): Promise<void>;
}

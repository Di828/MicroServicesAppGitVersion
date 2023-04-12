import { AddRoleDto } from './dto/add-role.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<import("./user.model").User[]>;
    getUserById(id: number): Promise<import("./user.model").User>;
    addRole(addRoleDto: AddRoleDto): Promise<{
        message: string;
    }>;
    deleteUserById(id: number): Promise<void>;
}

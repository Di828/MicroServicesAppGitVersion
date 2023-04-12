import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    login(createRoleDto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getRoleByValue(value: string): Promise<import("./roles.model").Role>;
}

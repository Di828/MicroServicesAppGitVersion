import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
interface RoleCreationAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttr> {
    role_id: number;
    value: string;
    description: string;
    users: User[];
}
export {};

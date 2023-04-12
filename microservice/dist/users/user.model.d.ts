import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
interface UserCreationAttr {
    login: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttr> {
    user_id: number;
    login: string;
    email: string;
    password: string;
    isActive: boolean;
    roles: Role[];
}
export {};

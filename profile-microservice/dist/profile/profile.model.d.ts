import { Model } from "sequelize-typescript";
interface ProfileCreationAttr {
    login: string;
    firstName: string;
    secondName: string;
    surname: string;
    phone: string;
    age: number;
    country: string;
    city: string;
    adress: string;
}
export declare class Profile extends Model<Profile, ProfileCreationAttr> {
    profile_id: number;
    login: string;
    firstName: string;
    secondName: string;
    surname: string;
    phone: string;
    age: number;
    country: string;
    city: string;
    adress: string;
}
export {};

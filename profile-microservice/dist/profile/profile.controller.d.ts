import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profile.service';
export declare class ProfileController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    getAllProfiles(): Promise<import("./profile.model").Profile[]>;
    getUserById(id: number): Promise<import("./profile.model").Profile>;
    createProfile(createProfileDto: CreateProfileDto): Promise<import("./profile.model").Profile>;
    updateProfile(updateProfileData: any): Promise<import("./profile.model").Profile>;
    deleteProfile(login: string): Promise<void>;
}

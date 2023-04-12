import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';
export declare class ProfilesService {
    private profileRepository;
    constructor(profileRepository: typeof Profile);
    getProfileById(profile_id: number): Promise<Profile>;
    getAllProfiles(): Promise<Profile[]>;
    createProfile(createProfileDto: CreateProfileDto): Promise<Profile>;
    updateProfile(updateProfileDto: any): Promise<Profile>;
    deleteProfile(login: any): Promise<void>;
}

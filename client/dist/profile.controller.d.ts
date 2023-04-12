import { ClientProxy } from '@nestjs/microservices';
export declare class ProfileController {
    private readonly client;
    constructor(client: ClientProxy);
    getAllProfiles(): import("rxjs").Observable<any>;
    getProfileById(id: number): import("rxjs").Observable<any>;
    addProfile(createProfileDto: any): import("rxjs").Observable<any>;
    updateProfile(id: number, updateProfileDto: any): import("rxjs").Observable<any>;
    deleteProfile(login: string): import("rxjs").Observable<any>;
}

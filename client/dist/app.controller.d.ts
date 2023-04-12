import { ClientProxy } from '@nestjs/microservices';
export declare class AppController {
    private readonly client;
    constructor(client: ClientProxy);
    getRoleDescription(value: string): import("rxjs").Observable<any>;
    addRoles(createRoleDto: any): import("rxjs").Observable<any>;
    registration(registrationDto: any): import("rxjs").Observable<any>;
    adminRegistration(registrationDto: any): import("rxjs").Observable<any>;
    login(loginDto: any): import("rxjs").Observable<any>;
    updateUserById(id: number, registrationDto: any): import("rxjs").Observable<any>;
    getAllUsers(): import("rxjs").Observable<any>;
    getUserById(id: number): import("rxjs").Observable<any>;
    addRoleToUser(addRoleDto: any): import("rxjs").Observable<any>;
    deleteUserById(id: number): import("rxjs").Observable<any>;
}

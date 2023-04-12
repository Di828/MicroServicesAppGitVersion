"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_profile_dto_1 = require("./dto/create-profile.dto");
const profile_service_1 = require("./profile.service");
let ProfileController = class ProfileController {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    getAllProfiles() {
        console.log('hello');
        return this.profilesService.getAllProfiles();
    }
    getUserById(id) {
        return this.profilesService.getProfileById(id);
    }
    createProfile(createProfileDto) {
        return this.profilesService.createProfile(createProfileDto);
    }
    updateProfile(updateProfileData) {
        return this.profilesService.updateProfile(updateProfileData);
    }
    deleteProfile(login) {
        return this.profilesService.deleteProfile(login);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('getProfiles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getAllProfiles", null);
__decorate([
    (0, microservices_1.MessagePattern)('getProfileById'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getUserById", null);
__decorate([
    (0, microservices_1.MessagePattern)('createProfile'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "createProfile", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateProfile'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, microservices_1.MessagePattern)('deleteProfile'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteProfile", null);
ProfileController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [profile_service_1.ProfilesService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map
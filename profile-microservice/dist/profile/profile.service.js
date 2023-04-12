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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const profile_model_1 = require("./profile.model");
let ProfilesService = class ProfilesService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async getProfileById(profile_id) {
        const profile = await this.profileRepository.findOne({ where: { profile_id: profile_id } });
        if (!profile) {
            throw new common_1.HttpException('Профайл пользователя не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return profile;
    }
    async getAllProfiles() {
        const profiles = await this.profileRepository.findAll({ include: { all: true } });
        return profiles;
    }
    async createProfile(createProfileDto) {
        return await this.profileRepository.create(createProfileDto);
    }
    async updateProfile(updateProfileDto) {
        const profile = await this.profileRepository.findOne({ where: { login: updateProfileDto.login } });
        if (!profile) {
            throw new common_1.HttpException('Профайла с таким id не существует', common_1.HttpStatus.BAD_REQUEST);
        }
        for (let key in updateProfileDto) {
            profile[key] = updateProfileDto[key];
        }
        profile.save();
        return await this.profileRepository.findOne({ where: { login: updateProfileDto.login } });
    }
    async deleteProfile(login) {
        await this.profileRepository.destroy({ where: { login: login } });
    }
};
ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(profile_model_1.Profile)),
    __metadata("design:paramtypes", [Object])
], ProfilesService);
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profile.service.js.map
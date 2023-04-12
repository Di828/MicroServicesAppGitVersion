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
const decorators_1 = require("@nestjs/common/decorators");
const microservices_1 = require("@nestjs/microservices");
const compose_guard_1 = require("./guards/compose.guard");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const role_auth_decorator_1 = require("./guards/role-auth.decorator");
const role_guard_1 = require("./guards/role.guard");
let ProfileController = class ProfileController {
    constructor(client) {
        this.client = client;
    }
    getAllProfiles() {
        return this.client.send('getProfiles', '');
    }
    getProfileById(id) {
        return this.client.send('getProfileById', id);
    }
    addProfile(createProfileDto) {
        return this.client.send('createProfile', createProfileDto);
    }
    updateProfile(id, updateProfileDto) {
        updateProfileDto.id = id;
        return this.client.send('updateProfile', updateProfileDto);
    }
    deleteProfile(login) {
        return this.client.send('deleteProfile', login);
    }
};
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('profiles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getAllProfiles", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('profile/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "getProfileById", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, decorators_1.Post)('profile'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "addProfile", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.UseGuards)(compose_guard_1.RoleOrAuthor),
    (0, decorators_1.Put)('profile/:user_id'),
    __param(0, (0, decorators_1.Param)('user_id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "updateProfile", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.UseGuards)(compose_guard_1.RoleOrAuthor),
    (0, decorators_1.Delete)('profile/:user_login'),
    __param(0, (0, decorators_1.Param)('user_login')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfileController.prototype, "deleteProfile", null);
ProfileController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, decorators_1.Inject)('PROFILE_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map
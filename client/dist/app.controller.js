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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const microservices_1 = require("@nestjs/microservices");
const compose_guard_1 = require("./guards/compose.guard");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const role_auth_decorator_1 = require("./guards/role-auth.decorator");
const role_guard_1 = require("./guards/role.guard");
let AppController = class AppController {
    constructor(client) {
        this.client = client;
    }
    getRoleDescription(value) {
        return this.client.send('getRoleDescription', value);
    }
    addRoles(createRoleDto) {
        return this.client.send('createRole', createRoleDto);
    }
    registration(registrationDto) {
        return this.client.send('registration', registrationDto);
    }
    adminRegistration(registrationDto) {
        return this.client.send('adminRegistration', registrationDto);
    }
    login(loginDto) {
        return this.client.send('login', loginDto);
    }
    updateUserById(id, registrationDto) {
        let updateDto = registrationDto;
        updateDto.id = id;
        return this.client.send('update', updateDto);
    }
    getAllUsers() {
        return this.client.send('getUsers', '');
    }
    getUserById(id) {
        return this.client.send('getUserById', id);
    }
    addRoleToUser(addRoleDto) {
        return this.client.send('setRole', addRoleDto);
    }
    deleteUserById(id) {
        return this.client.send('deleteUser', id);
    }
};
__decorate([
    (0, common_1.Get)('/roles/:value'),
    __param(0, (0, decorators_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRoleDescription", null);
__decorate([
    (0, decorators_1.Post)('/roles'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addRoles", null);
__decorate([
    (0, decorators_1.Post)('/registration'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "registration", null);
__decorate([
    (0, decorators_1.Post)('/admin/registration'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "adminRegistration", null);
__decorate([
    (0, decorators_1.Post)('/login'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    (0, decorators_1.UseGuards)(compose_guard_1.RoleOrAuthor),
    (0, decorators_1.Put)('update/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateUserById", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllUsers", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUserById", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, decorators_1.Post)('/add-role'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addRoleToUser", null);
__decorate([
    (0, role_auth_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, decorators_1.Delete)('user/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteUserById", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, decorators_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map
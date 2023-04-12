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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto);
        return await this.generateToken(user);
    }
    async registration(registrationDto, isAdmin = false) {
        if (await this.userOrEmailExist(registrationDto)) {
            throw new exceptions_1.HttpException('Логин или емейл уже занят', enums_1.HttpStatus.BAD_REQUEST);
        }
        const salt = 5;
        const hashPassword = await bcrypt.hash(registrationDto.password, salt);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, registrationDto), { password: hashPassword }));
        if (isAdmin) {
            this.userService.addRole({ value: 'ADMIN', userId: user.user_id });
        }
        return await this.generateToken(user);
    }
    async updateUserById(id, updateDto) {
        console.log(id);
        console.log(updateDto);
        const user = await this.userService.getUserById(id);
        if (updateDto.login != user.login && await this.loginExists(updateDto.login)) {
            throw new exceptions_1.HttpException('Логин на который вы хотите сменить ваш текущий уже занят', enums_1.HttpStatus.BAD_REQUEST);
        }
        if (updateDto.email != user.email && await this.emailExists(updateDto.email)) {
            throw new exceptions_1.HttpException('Email на который вы хотите сменить ваш текущий уже занят', enums_1.HttpStatus.BAD_REQUEST);
        }
        for (let key in updateDto) {
            user[key] = updateDto[key];
            if (key == 'password') {
                const salt = 5;
                const hashPassword = await bcrypt.hash(updateDto[key], salt);
                user[key] = hashPassword;
            }
        }
        await user.save();
        return await this.userService.getUserById(id);
    }
    async loginExists(login) {
        const candidate = await this.userService.getUserByLogin(login);
        if (candidate) {
            return true;
        }
        return false;
    }
    async emailExists(email) {
        const candidate = await this.userService.getUserByEmail(email);
        if (candidate) {
            return true;
        }
        return false;
    }
    async userOrEmailExist(registrationDto) {
        const candidate = await this.userService.getUserByLoginOrEmail(registrationDto.login, registrationDto.email);
        if (candidate) {
            return true;
        }
        return false;
    }
    async generateToken(user) {
        const payload = { email: user.email, user_id: user.user_id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async validateUser(loginDto) {
        const user = await this.userService.getUserByLoginOrEmail(loginDto.loginOrEmail, loginDto.loginOrEmail);
        if (!user) {
            throw new exceptions_1.UnauthorizedException('Неверный логин или емейл');
        }
        const passwordEquals = await bcrypt.compare(loginDto.password, user.password);
        if (!passwordEquals) {
            throw new exceptions_1.UnauthorizedException('Неверный пароль');
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
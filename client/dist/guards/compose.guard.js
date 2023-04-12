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
exports.RoleOrAuthor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const role_guard_1 = require("./role.guard");
let RoleOrAuthor = class RoleOrAuthor extends role_guard_1.RolesGuard {
    constructor(jwtService, reflector) {
        super(jwtService, reflector);
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException('Пользователь не авторизован');
            }
            const user = this.jwtService.verify(token);
            if (user.user_id == req.params.id) {
                return true;
            }
            return await super.canActivate(context);
        }
        catch (e) {
            throw new common_1.HttpException('Доступ запрещен', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
RoleOrAuthor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector])
], RoleOrAuthor);
exports.RoleOrAuthor = RoleOrAuthor;
//# sourceMappingURL=compose.guard.js.map
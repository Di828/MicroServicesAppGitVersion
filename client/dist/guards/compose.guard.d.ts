import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { RolesGuard } from "./role.guard";
export declare class RoleOrAuthor extends RolesGuard {
    protected jwtService: JwtService;
    protected reflector: Reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

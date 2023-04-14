import { UsersService } from "../src/users/users.service";
import { Test } from '@nestjs/testing';
import { RolesService } from "../src/roles/roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../src/users/user.model";
import { Role } from "../src/roles/roles.model";
import { UserRoles } from "../src/roles/user-roles-model";

describe('User service', () => {

    let usersService : UsersService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
          controllers: [],
          providers: [UsersService, RolesService],  
          imports: [
            SequelizeModule.forRoot({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '123123',
              database: 'testdb',
              models: [User, Role, UserRoles],
              autoLoadModels: true
            }), 
            SequelizeModule.forFeature([User, Role, UserRoles]), 
        ]
        })     
          .compile();
    
          usersService = moduleRef.get<UsersService>(UsersService);
      });    
    
    let login = Date.now().toString();    
    let createUserDto = {
        login: login,
        email: `${login}@mail.ru`,
        password: 'qweqwe'
    }    

    it('Create user with correct data, expect created user data will be equal to creating user date',async () => {
        let newUser = await usersService.createUser(createUserDto);
        expect(newUser.login).toEqual(createUserDto.login);
        expect(newUser.email).toEqual(createUserDto.email);        
    })

    it('Create user with already existed login or email',async () => {
        try{
            await usersService.createUser(createUserDto);    
            expect(1).toBe(2);
        }
        catch(e){
            expect(e).not.toBe(null);
        }
    })

    let createUserDtoIncorrect = {
        login: "",
        email: ``,
        password: 'qweqwe'
    }
    it('Create user with incorrect login or email, expect error',async () => {
        try{
            await usersService.createUser(createUserDtoIncorrect);    
            expect(1).toBe(2);
        }
        catch(e){
            expect(e).not.toBe(null);
        }
    })
    

    it('Get all users', async () => {
        let result = await usersService.getAllUsers();
        expect(Array.isArray(result)).toBeTruthy();
    })

    it('Get user by id, incorrect id',async () => {
        try{
            await usersService.getUserById(-1);
        }
        catch(e) {
            expect(e).not.toBe(null);
        }
    })
})
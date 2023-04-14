import { AuthService } from '../src/auth/auth.service'
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { UsersService } from '../src/users/users.service';
import * as bcrypt from 'bcryptjs';

describe('Auth service', () => {

    let authService : AuthService;    
    let login = Date.now().toString();
    let mockUserCreatedByMockUserService = {user_id : 1, login : login, password : 'qweqwe', roles : ['USER']};
    let fakeUser = {
        login: login,
        email: `${login}@mail.ru`,
        password: '123123',
        firstName : 'qwe',
        secondName : 'qwe',
        surname : 'qwe',
        phone : '123',
        age : 25,
        country : 'qwe',
        city : 'qwe',
        adress : 'qwe'
    }   

    let loginDto = {
        loginOrEmail : 'correctFake',
        password : 'qweqwe'
    }

    class MockUsersService {
        createUser() {
          return mockUserCreatedByMockUserService;
        }

        async getUserByLoginOrEmail(someDto){            
            if (someDto == 'correctFake')
            {
                const salt = 5; 
                const hashPassword = await bcrypt.hash(mockUserCreatedByMockUserService.password, salt);
                mockUserCreatedByMockUserService.password = hashPassword;
                return mockUserCreatedByMockUserService;
            }
            
            return null;
        }        
      }
    
      beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
          controllers: [],
          providers: [UsersService, AuthService],
          imports: [
            JwtModule.register({
            secret : 'Secret',      
            signOptions : {
              expiresIn : '24h'
            }
          })
        ]
        })
          .overrideProvider(UsersService)
          .useClass(MockUsersService)
          .compile();
    
          authService = moduleRef.get<AuthService>(AuthService);                
      });                 

    it('Registration, should return correct bearer token', async () => {

        let result = await authService.registration(fakeUser); 
        const jwtService = new JwtService({
            secret : 'Secret'
        })
                
        let verifiedJwtToken = jwtService.verify(result.token);

        expect(verifiedJwtToken.roles).toEqual(mockUserCreatedByMockUserService.roles);
        expect(verifiedJwtToken.user_id).toEqual(mockUserCreatedByMockUserService.user_id);
   })

   it('Login with incorrect fake data, should throw error', async () => {            
    try{
        await authService.login({loginOrEmail : 'incorrectFake', password : 'qweqwe'});
    }
    catch(e) {
        expect(e).not.toBe(null);
    }
    })

   it('Login with correct fake data, should return correct bearer token', async () => {        
        let result = await authService.login({loginOrEmail : 'correctFake', password : 'qweqwe'});
        
        const jwtService = new JwtService({
            secret : 'Secret'
        })
        let verifiedJwtToken = jwtService.verify(result.token);

        expect(verifiedJwtToken.roles).toEqual(mockUserCreatedByMockUserService.roles);
        expect(verifiedJwtToken.user_id).toEqual(mockUserCreatedByMockUserService.user_id);
   })
    
})
import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profile.service';

@Controller()
export class ProfileController {
    
    constructor(private profilesService : ProfilesService){}
        
    @MessagePattern('getProfiles')
    getAllProfiles() {   
        console.log('hello')             ;
        return this.profilesService.getAllProfiles();
    }

    @MessagePattern('getProfileById')
    getUserById(@Payload() id : number) {        
        return this.profilesService.getProfileById(id);
    }

    @MessagePattern('createProfile')
    createProfile(@Payload() createProfileDto : CreateProfileDto){        
        return this.profilesService.createProfile(createProfileDto);
    }

    @MessagePattern('updateProfile')
    updateProfile(@Payload() updateProfileData){        
        return this.profilesService.updateProfile(updateProfileData);
    }

    @MessagePattern('deleteProfile')
    deleteProfile(@Payload() login : string){
        return this.profilesService.deleteProfile(login);
    }
    
}

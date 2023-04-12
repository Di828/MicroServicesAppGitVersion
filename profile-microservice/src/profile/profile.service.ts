import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfilesService {

    constructor(@InjectModel(Profile) private profileRepository : typeof Profile){}

    async getProfileById(profile_id : number){
        const profile = await this.profileRepository.findOne({where:{profile_id : profile_id}});
        if (!profile){
            throw new HttpException('Профайл пользователя не найден', HttpStatus.NOT_FOUND);
        }

        return profile;
    }

    async getAllProfiles(){        
        const profiles = await this.profileRepository.findAll({include : {all : true}});               
        return profiles;
    }

    async createProfile(createProfileDto : CreateProfileDto){
        return await this.profileRepository.create(createProfileDto);
    }

    async updateProfile(updateProfileDto){
        const profile = await this.profileRepository.findOne({where : {login : updateProfileDto.login}});        

        if (!profile){
            throw new HttpException('Профайла с таким id не существует', HttpStatus.BAD_REQUEST);
        }        
        
        for (let key in updateProfileDto){
            profile[key] = updateProfileDto[key];                         
            }    
        
        profile.save();
                
        return await this.profileRepository.findOne({where : {login : updateProfileDto.login}});
    }

    async deleteProfile(login){        
            await this.profileRepository.destroy({where : {login : login}});
        }    
}
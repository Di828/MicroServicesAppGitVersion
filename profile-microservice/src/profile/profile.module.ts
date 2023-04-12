import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.model';
import { ProfilesService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfilesService],
  imports : [SequelizeModule.forFeature([Profile])],
  exports : [ ProfilesService ]
})
export class ProfileModule {}

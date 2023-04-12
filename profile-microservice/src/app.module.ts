import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProfileController } from './profile/profile.controller';
import { Profile } from './profile/profile.model';
import { ProfileModule } from './profile/profile.module';
import { ProfilesService } from './profile/profile.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env'
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: 'postgres',
    password: '123123',
    database: process.env.POSTGRES_DB,
    models: [Profile],
    autoLoadModels: true
  }),
  ProfileModule
],
  controllers: [ProfileController],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
//import { ServicesService } from './services/services.service';
//import { ServicesController } from './services/services.controller';
import { ServicesModule } from './services/services.module';
import { UsersModule } from './users/users.module';
import {User} from './users/users.model';
import {Service} from './services/services.model';
import { UserService } from './services/users-services.model';

@Module({
  
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
    envFilePath: `.env`
 }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Service, UserService],
      autoLoadModels: true
  }),
    UsersModule,
    ServicesModule,
   
  ],
})
export class AppModule {}

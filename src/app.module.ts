import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {ConfigModule} from "@nestjs/config";
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
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Service, UserService],
      autoLoadModels: true
  }),
    UsersModule,
    ServicesModule,
   
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Service } from '../services/services.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from 'src/services/users-services.model';
import {ServicesModule} from '../services/services.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Service, UserService]),
    ServicesModule
  ],
  exports: [
    UsersService,
  ]
})

export class UsersModule {}

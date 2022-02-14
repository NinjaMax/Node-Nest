import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import {Service} from '../services/services.model';
import { ServicesService } from './services.service';
import {ServicesController} from './services.controller';
import { UserService } from './users-services.model';

@Module({
    providers:[ServicesService],
    controllers:[ServicesController],
    imports:[
        SequelizeModule.forFeature([User, Service, UserService])
    ],
    exports: [
        ServicesService
    ]
})
export class ServicesModule {}

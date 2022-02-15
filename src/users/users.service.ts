import { InjectModel } from '@nestjs/sequelize';
import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { ServicesService } from 'src/services/services.service';
import { CreateUserDto } from './dto/create-user.dto';
import {GetUserDto} from './dto/get-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private servicesService: ServicesService) {}

    async createUser(dto: CreateUserDto) {
        
       try { 
              const user = await this.userRepository.create(dto);
      
              return user;

        } catch {
            
              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);
        
        }
       
    }

    async subscribeUserService(dto: GetUserDto) {
        
       try {
              const user = await this.userRepository.findByPk(dto.id, {include: {all: true}});
              const services = await this.servicesService.getServiceByTitle(dto.title);
              await user.$add('service', [services.id]);
              user.service.push(services);
              return user;

        } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND); 

         }
        
    }

    async getAllUsers() {
        
      try { 
              const users = await this.userRepository.findAll({include: {all: true}});
              return users;

      } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);

        }
      
    }

    async getUserByEmail(dto: GetUserDto) {
        
      try {
              const user = await this.userRepository.findOne({where: {email: dto.email}, include: {all: true}});
              return user;

      } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);

        }
        
    }

    async getAllUsersServices(dto: GetUserDto) {
        
      try {
              const user = await this.userRepository.findByPk(dto.id, {include: {all: true}});
              return user.service;

      } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);
        
        }
        
    }

}

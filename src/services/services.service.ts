import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Service} from './services.model';
import {CreateServiceDto} from './dto/create-service.dto';
import {GetTermDto} from './dto/get-term.dto';

@Injectable()
export class ServicesService {

    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {}

    async createService(dto: CreateServiceDto) {
        
        try {
              const service = await this.serviceRepository.create(dto);  
              return service;

        } catch {
            
              throw new HttpException('Data is incorrect and must be uniq', HttpStatus.NOT_FOUND);

        }
        
    }

    async getServiceByTitle(title: string) {
        
        try {
              const services = await this.serviceRepository.findOne({where: {title}})
              return services;

        } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);
        
        }
        
    }

    async getAllService() {
        
        try {
              const services = await this.serviceRepository.findAll({include: {all: true}});
              return services;

        } catch {

              throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);

        }
        
    }

    async getAllTerms(dto: GetTermDto) {
        
        try {
              const services = await this.serviceRepository.findAll({include: {all: true}});
        
               function sortByPopulate(arr) {

                 arr.sort((a, b) => b.subscribers.length > a.subscribers.length ? 1 : -1 )
               }

              sortByPopulate(services);

                const servicesTerm = services.map(item => {

                    if(item.title.toUpperCase().includes(dto.term.toUpperCase())) {
                        
                        return item.title;
                    } 

                });

               const serviceTermFilter = servicesTerm.filter(item => item != null)
        
               return serviceTermFilter;

        } catch {

               throw new HttpException('Data is incorrect or Not Found', HttpStatus.NOT_FOUND);
        
        }
        
    }


}

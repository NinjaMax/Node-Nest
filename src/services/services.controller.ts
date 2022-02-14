import { Controller, Post, Body, Get } from '@nestjs/common';
import {ServicesService} from './services.service'
import {CreateServiceDto} from './dto/create-service.dto'
import {GetTermDto} from './dto/get-term.dto';

@Controller('services')
export class ServicesController {
    constructor(private servicesService: ServicesService) {}

   
    @Post()
    create(@Body() serviceDto: CreateServiceDto) {
        return this.servicesService.createService(serviceDto);
    }


    @Get()
    getAll() {
        return this.servicesService.getAllService();
    }

    @Get('/term')
    getAllterm(@Body() dto: GetTermDto) {
        return this.servicesService.getAllTerms(dto);
    }


}

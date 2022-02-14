import { Controller, Get, Post, Body } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {GetUserDto} from './dto/get-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

   
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Get('/email')
    getByEmail(@Body() dto: GetUserDto) {
        return this.usersService.getUserByEmail(dto);
    }

    @Get('/service')
    getAllServices(@Body() dto: GetUserDto) {
        return this.usersService.getAllUsersServices(dto);
    }

    @Post('/subscribe')
    addSubscribe(@Body() dto: GetUserDto) {
        return this.usersService.subscribeUserService(dto);
    }

}

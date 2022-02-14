import { Column, DataType, Model, Table, BelongsToMany} from "sequelize-typescript";
import {Service} from '../services/services.model';
import {UserService} from '../services/users-services.model';

interface UserCreationAttrs {
    email: string;
    name: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
   
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
   
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
   
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @BelongsToMany(() => Service, () => UserService)
    service: Service[];

  
}
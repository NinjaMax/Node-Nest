import {BelongsToMany, Column, ForeignKey, DataType, Model, Table} from "sequelize-typescript";
import {User} from '../users/users.model';
import {UserService} from '../services/users-services.model';

interface ServiceCreationAttrs {
    title: string;
    description: string;
 
}

@Table({tableName: 'services'})
export class Service extends Model<Service, ServiceCreationAttrs> {
   
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
   
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;
   
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany( () => User, () => UserService)
    subscribers: User[];

}
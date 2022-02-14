import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Service} from "./services.model";


@Table({tableName: 'user_services', createdAt: false, updatedAt: false})
export class UserService extends Model<UserService> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Service)
    @Column({type: DataType.INTEGER})
    serviceId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

}
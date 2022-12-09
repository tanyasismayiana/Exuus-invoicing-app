import { Model, Sequelize, DataTypes } from 'sequelize';

export default class User extends Model {
    public id?: number;
    public username!: string;
    public email?: Date;
    public password?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export const UserMap = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            username: {
                type: DataTypes.STRING(255),
                field: 'user_name'
            },
            email: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at'
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at'
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    );
    User.sync();
};

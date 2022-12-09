import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Client extends Model {
    public id?: number;
    public number!: string;
    public name!: string;
    public deleted!: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export const ClientMap = (sequelize: Sequelize) => {
    Client.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            number: {
                type: DataTypes.STRING(255)
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            deleted: {
                type: DataTypes.BOOLEAN,
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
            tableName: 'clients'
        }
    );
    Client.sync();
};

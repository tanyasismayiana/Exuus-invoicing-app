import { Model, Sequelize, DataTypes, NOW } from 'sequelize';

export default class Item extends Model {
    public id?: number;
    public number!: string;
    public name!: string;
    public cost!: number;
    public deleted!: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export const ItemMap = (sequelize: Sequelize) => {
    Item.init(
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
            cost: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            deleted: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            },
            notes:{
                type: DataTypes.TEXT,
                allowNull:true
            },
            createdAt: {
                type: DataTypes.DATE,
                field: 'created_at',
                defaultValue: NOW
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
                defaultValue: NOW
            }
        },
        {
            sequelize,
            tableName: 'items'
        }
    );
    Item.sync();
};

import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Invoice extends Model {
    public id?: number;
    public number!: string;
    public clientId?: Date;
    public itemId?: string;
    public amount?: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export const InvoiceMap = (sequelize: Sequelize) => {
    Invoice.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            number: {
                type: DataTypes.STRING(255)
            },
            clientId: {
                type: DataTypes.INTEGER,
                field: "client_id"
            },
            itemId: {
                type: DataTypes.INTEGER,
                field: "item_id"
            },
            amount: {
                type: DataTypes.DOUBLE
            },
            paymentStatus: {
                type: DataTypes.ENUM,
                field: "payment_status",
                values: ['pending', 'paid', 'upaid']
            },
            notes: {
                type: DataTypes.TEXT
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
            tableName: 'invoices'
        }
    );
    Invoice.sync();
};

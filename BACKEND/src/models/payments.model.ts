import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Payment extends Model {
    public id?: number;
    public number!: string;
    public amount!: number;
    public invoiceId!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export const PaymentMap = (sequelize: Sequelize) => {
    Payment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            number: {
                type: DataTypes.STRING(255)
            },
            amount: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            invoiceId: {
                type: DataTypes.INTEGER,
                field: 'invoice_id'
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
            tableName: 'payments'
        }
    );
    Payment.sync();
};

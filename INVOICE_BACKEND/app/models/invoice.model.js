module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define(
      "invoices",
      {
        id: {
          type: DataTypes.INTEGER
        },
        number: {
          type: DataTypes.STRING,
        },
        client_id: {
          type: DataTypes.INTEGER,
        },
        item_id: {
          type: DataTypes.STRING,
        },
        amount: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        payment_status: {
          type: DataTypes.STRING
        },
        notes: {
          type: DataTypes.STRING
        }
      },
      { tableName: "invoices", timestamps: true }
    );
    return Invoice
    }
    


    
import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { Product, Customer } from './index';  // Ensure Product and Customer are imported

class Cart extends Model {
  declare id: number;
  declare customerId: number;
  declare productId: number;
  declare quantity: number;

  // Declare Product as an optional association property
  declare Product?: Product | null;
}

Cart.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize,
  modelName: 'Cart'
});

// Define associations
Cart.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(Cart, { foreignKey: 'productId' });

export { Cart };

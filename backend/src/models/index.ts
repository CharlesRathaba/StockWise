
import { Model, DataTypes, Sequelize } from 'sequelize';

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'postgres',
  logging: false
});

// Customer Model
class Customer extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare address: string;
  declare contact: string;
  declare registrationDate: Date;
}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: DataTypes.TEXT,
  contact: DataTypes.STRING,
  registrationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Customer'
});

// Admin Model
class Admin extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare role: 'SUPER_ADMIN' | 'ADMIN' | 'MODERATOR';
}

Admin.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.ENUM('SUPER_ADMIN', 'ADMIN', 'MODERATOR'),
    defaultValue: 'ADMIN'
  }
}, {
  sequelize,
  modelName: 'Admin'
});

// Supplier Model
class Supplier extends Model {
  declare id: number;
  declare supplierName: string;
  declare companyEmail: string;
  declare supplierAddress: string;
  declare supplierContact: string;
  declare approvalStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
  declare registrationDate: Date;
}

Supplier.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  supplierName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  companyEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  supplierAddress: DataTypes.TEXT,
  supplierContact: DataTypes.STRING,
  approvalStatus: {
    type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED'),
    defaultValue: 'PENDING'
  },
  registrationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Supplier'
});

// Product Model
class Product extends Model {
  declare id: number;
  declare supplierId: number;
  declare productName: string;
  declare description: string;
  declare price: number;
  declare stockQuantity: number;
  declare category: string;
  declare dateAdded: Date;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  supplierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Supplier,
      key: 'id'
    }
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  category: DataTypes.STRING,
  dateAdded: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Product'
});

// Cart Model
class Cart extends Model {
  declare id: number;
  declare customerId: number;
  declare productId: number;
  declare quantity: number;
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

// Order Model
class Order extends Model {
  declare id: number;
  declare customerId: number;
  declare orderDate: Date;
  declare totalAmount: number;
  declare paymentStatus: 'PENDING' | 'COMPLETED' | 'FAILED';
  declare deliveryStatus: 'PROCESSING' | 'SHIPPED' | 'DELIVERED';
}

Order.init({
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
  orderDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.ENUM('PENDING', 'COMPLETED', 'FAILED'),
    defaultValue: 'PENDING'
  },
  deliveryStatus: {
    type: DataTypes.ENUM('PROCESSING', 'SHIPPED', 'DELIVERED'),
    defaultValue: 'PROCESSING'
  }
}, {
  sequelize,
  modelName: 'Order'
});

// OrderItem Model
class OrderItem extends Model {
  declare id: number;
  declare orderId: number;
  declare productId: number;
  declare quantity: number;
  declare priceAtPurchase: number;
}

OrderItem.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
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
    allowNull: false
  },
  priceAtPurchase: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'OrderItem'
});

// Set up associations
Product.belongsTo(Supplier);
Supplier.hasMany(Product);

Cart.belongsTo(Customer);
Cart.belongsTo(Product);
Customer.hasMany(Cart);
Product.hasMany(Cart);

Order.belongsTo(Customer);
Customer.hasMany(Order);

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);
Order.hasMany(OrderItem);
Product.hasMany(OrderItem);

Cart.belongsTo(Product);
Product.hasMany(Cart);

export {
  Customer,
  Admin,
  Supplier,
  Product,
  Cart,
  Order,
  OrderItem,
  sequelize
};
import { Transaction } from 'sequelize';
import { Cart, Order, OrderItem, Product, sequelize } from '../models';

export class OrderService {
  async createOrder(customerId: number): Promise<Order> {
    return sequelize.transaction(async (t: Transaction) => {
      const cartItems = await Cart.findAll({
        where: { customerId },
        include: [{ model: Product }],
        transaction: t
      });

      if (cartItems.length === 0) {
        throw new Error('Cart is empty');
      }

      const totalAmount = cartItems.reduce((sum, item) => {
        if (!item.Product) throw new Error('Product not found');
        return sum + (item.Product.price * item.quantity);
      }, 0);

      const order = await Order.create({
        customerId,
        totalAmount,
        paymentStatus: 'PENDING',
        deliveryStatus: 'PROCESSING'
      }, { transaction: t });

      await Promise.all(cartItems.map(async (item) => {
        const product = await Product.findByPk(item.productId, { transaction: t });
        if (!product || product.stockQuantity < item.quantity) {
          throw new Error(`Insufficient stock for product: ${product?.productName}`);
        }

        await OrderItem.create({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          priceAtPurchase: product.price
        }, { transaction: t });

        await product.update({
          stockQuantity: product.stockQuantity - item.quantity
        }, { transaction: t });
      }));

      await Cart.destroy({
        where: { customerId },
        transaction: t
      });

      return order;
    });
  }
}
import { Transaction } from 'sequelize';
import { Cart, Product, sequelize } from '../models';

export class CartService {
  async addToCart(customerId: number, productId: number, quantity: number) {
    return sequelize.transaction(async (t: Transaction) => {
      const product = await Product.findByPk(productId, { transaction: t });

      if (!product) {
        throw new Error('Product not found');
      }

      if (product.stockQuantity < quantity) {
        throw new Error('Insufficient stock');
      }

      let cartItem = await Cart.findOne({
        where: { customerId, productId },
        transaction: t
      });

      if (cartItem) {
        await cartItem.update({
          quantity: cartItem.quantity + quantity
        }, { transaction: t });
      } else {
        cartItem = await Cart.create({
          customerId,
          productId,
          quantity
        }, { transaction: t });
      }

      return cartItem;
    });
  }
}

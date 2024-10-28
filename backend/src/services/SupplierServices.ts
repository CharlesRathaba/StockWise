import { Transaction } from 'sequelize';
import { Supplier, SupplierApprovalLog, Product, sequelize } from '../models';

export class SupplierService {
  async approveSupplier(supplierId: number, adminId: number) {
    return sequelize.transaction(async (t: Transaction) => {
      const supplier = await Supplier.findByPk(supplierId, { transaction: t });

      if (!supplier) {
        throw new Error('Supplier not found');
      }

      if (supplier.approvalStatus !== 'PENDING') {
        throw new Error('Supplier is not in pending status');
      }

      await supplier.update({
        approvalStatus: 'APPROVED'
      }, { transaction: t });

      await SupplierApprovalLog.create({
        supplierId,
        adminId,
        action: 'APPROVED',
        timestamp: new Date()
      }, { transaction: t });

      return supplier;
    });
  }

  async addProduct(supplierId: number, productData: Partial<Product>) {
    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      throw new Error('Supplier not found');
    }

    if (supplier.approvalStatus !== 'APPROVED') {
      throw new Error('Supplier is not approved');
    }

    return Product.create({
      ...productData,
      supplierId
    });
  }
}

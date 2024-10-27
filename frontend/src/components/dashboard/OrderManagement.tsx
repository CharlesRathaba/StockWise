import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

// Order Management Component
const OrderManagement = () => {
  const sampleOrders = [
    {
      id: "ORD-001",
      customer: "Jane Cooper",
      date: "2024-02-15",
      total: 1299.99,
      status: "Processing",
      items: 5
    },
    // Add more sample orders as needed
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Export
          </button>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            New Order
          </button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Orders", value: "1,234", icon: Package, color: "text-blue-600" },
          { label: "Pending", value: "56", icon: Clock, color: "text-yellow-600" },
          { label: "Completed", value: "1,123", icon: CheckCircle, color: "text-green-600" },
          { label: "Cancelled", value: "55", icon: XCircle, color: "text-red-600" }
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className={`p-2 rounded-full bg-opacity-10 ${stat.color.replace('text', 'bg')}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Order ID</th>
              <th className="border border-gray-200 p-2">Customer</th>
              <th className="border border-gray-200 p-2">Date</th>
              <th className="border border-gray-200 p-2">Total</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2">Items</th>
            </tr>
          </thead>
          <tbody>
            {sampleOrders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-200 p-2">{order.id}</td>
                <td className="border border-gray-200 p-2">{order.customer}</td>
                <td className="border border-gray-200 p-2">{order.date}</td>
                <td className="border border-gray-200 p-2">R{order.total}</td>
                <td className="border border-gray-200 p-2">{order.status}</td>
                <td className="border border-gray-200 p-2">{order.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;

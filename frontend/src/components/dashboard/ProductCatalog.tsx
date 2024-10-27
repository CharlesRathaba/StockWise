import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown } from 'lucide-react';

// Product Catalog Component
const ProductCatalog = () => {
  const [viewMode, setViewMode] = useState('grid');

  const sampleProducts = [
    {
      id: 1,
      name: "Premium Rice 5kg",
      category: "Grains",
      price: 89.99,
      stock: 150,
      supplier: "Global Foods SA",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Organic Quinoa 500g",
      category: "Grains",
      price: 59.99,
      stock: 100,
      supplier: "Healthy Harvest",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Whole Wheat Flour 2kg",
      category: "Baking",
      price: 49.99,
      stock: 200,
      supplier: "Baker's Delight",
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Fresh Spinach 250g",
      category: "Vegetables",
      price: 24.99,
      stock: 80,
      supplier: "Green Valley Farms",
      image: "/api/placeholder/200/200"
    },
    // Add more sample products as needed
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Product Catalog</h1>
        <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 w-full rounded-lg border-gray-300 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <ChevronDown className="h-5 w-5 mr-2" />
            Sort
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">R{product.price}</span>
                <span className="text-sm text-gray-500">{product.stock} in stock</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
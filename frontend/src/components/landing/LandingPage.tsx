import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Store, TrendingUp, Truck, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';


// Define types for our modal props
type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  userType: 'Customer' | 'Supplier' | null;
};

// Simple Modal Component for Login/Signup
const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, userType }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleCustomerLogin = () => {
    onClose();
    navigate('customer-login'); // Navigate to the login form
  };

  const handleSupplierLogin = () => {
    // Handle supplier login differently if needed
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{userType} Portal</h2>
        <div className="space-y-4">
          <button 
            className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            onClick={userType === 'Customer' ? handleCustomerLogin : handleSupplierLogin}
          >
            Login
          </button>
          <button 
            className="w-full p-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50"
            onClick={onClose}
          >
            Sign Up
          </button>
          <button 
            className="w-full text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

type Product = {
  id: number;
  name: string;
  price: string;
  type: 'Frequently Bought' | 'Special';
};

// Product Carousel Component
const ProductCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products: Product[] = [
    { id: 1, name: 'Rice 10kg', price: 'R180', type: 'Frequently Bought' },
    { id: 2, name: 'Cooking Oil 5L', price: 'R140', type: 'Special' },
    { id: 3, name: 'Sugar 25kg', price: 'R350', type: 'Frequently Bought' },
    { id: 4, name: 'Flour 12.5kg', price: 'R160', type: 'Special' }
  ];

  const displayProducts = products.slice(currentSlide * 3, (currentSlide * 3) + 3);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          disabled={currentSlide === 0}
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={() => setCurrentSlide(prev => Math.min(Math.floor((products.length - 1) / 3), prev + 1))}
          className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          disabled={currentSlide >= Math.floor((products.length - 1) / 3)}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {displayProducts.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="bg-gray-200 w-full h-48 rounded-lg mb-4"></div>
            <span className={`px-2 py-1 rounded text-sm mb-2 inline-block ${
              product.type === 'Special' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {product.type}
            </span>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-teal-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define the props type
type LandingPageProps = {
  onLogin?: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onLogin })=> {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    userType: 'Customer' | 'Supplier' | null;
  }>({
    isOpen: false,
    userType: null
  });

  const openModal = (userType: 'Customer' | 'Supplier') => {
    setModalConfig({ isOpen: true, userType });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, userType: null });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">StockWise SA</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column - Text */}
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                    Township Stock at
                    <span className="text-teal-600"> Wholesale Prices</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                    Access wholesale prices, reliable delivery, and business growth tools - all in one platform designed for township entrepreneurs.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => openModal('Customer')}
                      className="flex items-center justify-center px-8 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
                    >
                      For Customers
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => openModal('Supplier')}
                      className="flex items-center justify-center px-8 py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      For Suppliers
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Right Column - Image Placeholder */}
                <div className="mt-12 relative lg:mt-0">
                  <div className="bg-gray-200 rounded-lg aspect-video w-full"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <ProductCarousel />
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Store className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wholesale Prices</h3>
              <p className="text-gray-600">Access bulk pricing without minimum orders</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Truck className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Direct Delivery</h3>
              <p className="text-gray-600">Fast delivery to your location</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Growth</h3>
              <p className="text-gray-600">Tools to scale your business</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ShieldCheck className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Safe payments and verified sellers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 StockWise SA. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        onLogin={onLogin}
        userType={modalConfig.userType}
      />
    </div>
  );
};

export default LandingPage;
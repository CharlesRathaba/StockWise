import React from 'react';
import { ArrowRight, Store, TrendingUp, Truck, ShieldCheck } from 'lucide-react';

// Define the props type for the LandingPage component
interface LandingPageProps {
  onLogin: () => void; // Define the type of onLogin as a function
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-teal-600">StockWise SA</span>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={onLogin} className="text-gray-700 hover:text-teal-600 font-medium">
                Login
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                Register Business
              </button>
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
                    Wholesale Stock at
                    <span className="text-teal-600"> Township Prices</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                    Access wholesale prices, reliable delivery, and business growth tools - all in one platform designed for township entrepreneurs.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center px-8 py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700">
                      Start Your Business
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-blue-50">
                      Learn More
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

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <Store className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wholesale Prices</h3>
              <p className="text-gray-600">Access bulk pricing without minimum order requirements</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <Truck className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Direct Delivery</h3>
              <p className="text-gray-600">Reliable delivery right to your business location</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Growth</h3>
              <p className="text-gray-600">FNB banking solutions and business support</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <ShieldCheck className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Safe payments and verified suppliers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
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
    </div>
  );
};

export default LandingPage;
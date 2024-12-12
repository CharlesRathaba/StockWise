import React, { useState } from 'react';
import { ArrowRight, Store, TrendingUp, Truck, ShieldCheck, Menu } from 'lucide-react';

const stockwiseLogo = '/stockwise-logo.png'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <img src={stockwiseLogo} alt="StockWise Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-blue-600">StockWise</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium hidden md:block">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
                Register Business
              </button>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <button className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Login
              </button>
              <button className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Register Business
              </button>
            </div>
          )}
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
                    <span className="text-blue-600"> Township Prices</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                    Access wholesale prices, reliable delivery, and business growth tools - all in one platform designed for township entrepreneurs.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                      Start Your Business
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="flex items-center justify-center px-8 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Column - Image Placeholder */}
                <div className="mt-12 relative lg:mt-0">
                  <img src="/warehouse.jpg" alt="Warehouse" className="rounded-lg w-full" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Cost Savings Example */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cost Savings Example */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Savings for Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-blue-600">Individual Buying</h3>
                <p className="text-4xl font-bold my-4">R100</p>
                <p className="text-gray-600">Per unit when buying alone</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-600">
                <h3 className="text-lg font-semibold text-blue-600">Group Buying</h3>
                <p className="text-4xl font-bold my-4">R65</p>
                <p className="text-gray-600">Per unit with StockWise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-blue-600">Your Savings</h3>
                <p className="text-4xl font-bold my-4 text-green-600">35%</p>
                <p className="text-gray-600">Average savings per order</p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"Since joining StockWise, I've saved 40% on my store's inventory costs. The community buying power really works!"</p>
              <div className="mt-4">
                <p className="font-semibold">Sarah Nkosi</p>
                <p className="text-sm text-gray-500">Spaza Shop Owner, Soweto</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic">"The delivery service and bulk pricing have transformed my business. I can now compete with larger stores."</p>
              <div className="mt-4">
                <p className="font-semibold">John Dube</p>
                <p className="text-sm text-gray-500">Mini Market Owner, Alexandra</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/27XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <Store className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wholesale Prices</h3>
              <p className="text-gray-600">Access bulk pricing without minimum order requirements</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <Truck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Direct Delivery</h3>
              <p className="text-gray-600">Reliable delivery right to your business location</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Growth</h3>
              <p className="text-gray-600">FNB banking solutions and business support</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Safe payments and verified suppliers</p>
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
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
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
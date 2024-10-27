import React, {useState} from 'react';
import LandingPage from './components/landing/LandingPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import LoginForm from './components/auth/LoginForm';
import OrderManagement from './components/dashboard/OrderManagement';
import ProductCatalog from './components/dashboard/ProductCatalog';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login actions here, then set `isLoggedIn` to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on login status */}
      {!isLoggedIn ? (
        <LandingPage onLogin={handleLogin} />
      ) : (
        <DashboardLayout>
          {/* Include other components that should be shown when logged in */}
          <ProductCatalog />
          <OrderManagement />
        </DashboardLayout>
      )}
    </div>
  );
}

export default App;

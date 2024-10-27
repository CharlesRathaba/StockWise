import LandingPage from '@/components/landing/LandingPage';

const Home = () => {
  // Define the onLogin function
  const handleLogin = () => {
    console.log("Login button clicked");
    // Implement your login logic here
  };

  return <LandingPage onLogin={handleLogin} />; // Pass the onLogin prop
};

export default Home;


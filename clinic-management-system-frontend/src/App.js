import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Appointments from './components/Appointments';
import MedicalRecords from './components/MedicalRecords';
import Notifications from './components/Notifications';
import AuthBox from './components/AuthBox';
import Home from './components/Home'; 
import Logout from './components/Logout';
import Footer from './components/Footer';

function App() {
  const [showAuthBox, setShowAuthBox] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // Manage the current view
  const [showLogout, setShowLogout] = useState(false);

  // Handle login button click
  const handleLoginClick = () => {
    setShowAuthBox(true);
    setCurrentView(null); // Hide other components when login is shown
  };

  // Handle closing AuthBox
  const handleAuthBoxClose = () => {
    setShowAuthBox(false);
    setCurrentView('home'); // Return to home or any default view
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setShowAuthBox(false);
    setCurrentView('home'); // Redirect to home or any desired view after login
  };

  // Handle navigation clicks
  const handleNavClick = (view) => {
    if (view === 'home' && !showAuthBox) {
      setCurrentView('home');
    } else if (!showAuthBox) {
      setCurrentView(view);
    }
  };

  // Handle logout button click
  const handleLogoutClick = () => {
    setShowLogout(true);
  };

  // Handle closing Logout component
  const handleLogoutClose = () => {
    setShowLogout(false);
    setCurrentView('home'); // Return to home or any default view
  };

  // Render current component based on state
  const renderComponent = () => {
    if (showAuthBox) {
      return <AuthBox onClose={handleAuthBoxClose} onLoginSuccess={handleLoginSuccess} />;
    }

    switch (currentView) {
      case 'appointments':
        return <Appointments />;
      case 'medicalRecords':
        return <MedicalRecords />;
      case 'notifications':
        return <Notifications />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {!showAuthBox && <Navbar onLoginClick={handleLoginClick} onNavClick={handleNavClick} onLogoutClick={handleLogoutClick}/>}
      <div className="dashboard">
        {renderComponent()}
      </div>
      
      {showLogout && <Logout onClose={handleLogoutClose} />}
      <Footer /> {/* Add the Footer component */}
      
    </div>
  );
}

export default App;

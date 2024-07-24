import React, { useState } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import PatientForm from './PatientForm';
import BookForm from './DoctorForm'; // Update import to BookForm
import '../styles/AuthBox.css';
import patientImage from './Screenshot 2024-07-18 083000.png';
import doctorImage from './Screenshot 2024-07-18 083038.png';

const AuthBox = ({ onClose }) => {
  const [authType, setAuthType] = useState(null);
  const [createAccount, setCreateAccount] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleCreateAccount = () => {
    setCreateAccount(true);
  };

  const handleGoBack = () => {
    setCreateAccount(false);
    setAuthType(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = authType === 'doctor'
        ? 'http://localhost:5000/api/auth/doctors/login'
        : 'http://localhost:5000/api/auth/patients/login';
  
      const response = await axios.post(url, {
        emailAddress: loginDetails.email,
        password: loginDetails.password
      });
  
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      setLoginError('');
      onClose(true); // Notify successful login
    } catch (error) {
      console.log('Error response:', error.response);
      setLoginError(error.response?.data.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        {!createAccount && (
          <>
            <h2>Choose Account Type</h2>
            <div className="options">
              <div className={`option ${authType === 'patient' ? 'selected' : ''}`} onClick={() => { setAuthType('patient'); setCreateAccount(false); }}>
                <img src={patientImage} alt="Patient" />
                <span>Patient</span>
              </div>
              <div className={`option ${authType === 'doctor' ? 'selected' : ''}`} onClick={() => { setAuthType('doctor'); setCreateAccount(false); }}>
                <img src={doctorImage} alt="Doctor" />
                <span>Doctor</span>
              </div>
            </div>
          </>
        )}

        {authType && !createAccount && (
          <form className="login-form" onSubmit={handleLogin}>
            <h2 className="login-heading">
              {authType === 'doctor' ? 'Welcome back, Doctor!' : 'Welcome!'}
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={loginDetails.email}
              onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
              required
              maxLength={15}
            />
            {loginError && <span className="error">{loginError}</span>}
            <button type="submit">Login</button>
            <div className="form-footer">
              <p>No account? <span className="create-account" onClick={handleCreateAccount}> Create an account</span></p>
            </div>
          </form>
        )}

        {createAccount && (
          <>
            <CSSTransition
              in={authType === 'patient'}
              timeout={300}
              classNames="form"
              unmountOnExit
            >
              <PatientForm goBack={handleGoBack} />
            </CSSTransition>
            <CSSTransition
              in={authType === 'doctor'}
              timeout={300}
              classNames="form"
              unmountOnExit
            >
              <BookForm goBack={handleGoBack} /> {/* Update to BookForm */}
            </CSSTransition>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthBox;

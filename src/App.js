import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import ResetPassword from './components/pages/ResetPassword'
import ProfilePage from './components/pages/ProfilePage';

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={ <LandingPage/> } />
                  <Route path="/login" element={ <LoginPage/> } />
                  <Route path="/register" element={ <RegisterPage/> } />
                  <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                  <Route path="/home" element={ <HomePage/> } />
                  <Route path="/reset-password" element = {<ResetPassword></ResetPassword>}/>
                  <Route path="/profile" element = {<ProfilePage></ProfilePage>} />
                  {/* <Route path="/HomeP></Route> */}
              </Routes>
              {/* <Footer /> */}
          </div>
      </Router>
  );
}

export default App;

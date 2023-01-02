import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import HomePage from './pages/HomePage'
import ResetPassword from './pages/ResetPassword'
import ProfilePage from './pages/ProfilePage';
import Answer from './pages/Answer'
import Compose from './pages/Compose'
import Protected from './Protected';
import Search from './pages/Search';

function App() {
  return (
      <Router>
          <div>
          <ToastContainer position='top-center'/>

              <Routes>
                  <Route exact path="/" element={ <LandingPage/> } />
                  <Route path="/login" element={ <LoginPage/> } />
                  <Route path="/register" element={ <RegisterPage/> } />
                  <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                  <Route path="/home" element={ <HomePage/> } />
                  <Route path="/reset-password" element = {<ResetPassword></ResetPassword>}/>
                  <Route path="/profile" element = {<ProfilePage></ProfilePage>} />
                  <Route path="/answer/:id" element = {<Answer/>}/>
                  <Route path="/compose" element = {<Compose/>} />
                  <Route path="/search" element={<Search/>} />
                  {/* <Route path="/HomeP></Route> */}
              </Routes>
              {/* <Footer /> */}
          </div>
      </Router>
  );
}

export default App;

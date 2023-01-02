import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Developers from '../Components/Developers'
import Footer from '../Components/Footer'

import '../App.css'
import BackgroundImage from '../assets/images/bg.png'

export default function LandingPage() {
    return (<>
        <Navbar/>
    <Hero/>

    <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
                {/* <Link to="/home">
                    <button className="primary-button" id="reg_btn"><span>Home </span></button>
                </Link> */}
            </div>
        </header>
        
    <Developers/>
    <Footer/>
    </>

    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
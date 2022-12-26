import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate = useNavigate();
        useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate("/")
        }

    },[])
    
    
    const handleClick = async() => {
        try{
            const refreshTokenObject = JSON.parse(localStorage.getItem('user-info'));
            const refreshToken = {refresh_token:refreshTokenObject.data.refresh_token};
            await fetch("/auth/logout",{
                method:'POST',
                body:JSON.stringify(refreshToken),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })
            localStorage.clear();
            navigate("/")
        }
        
            catch(err) {
                // console.log("you are not logged in");
                window.alert("you are not logged in")
            }
    }

    return (

        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button" onClick={handleClick}>Log out</button>
            </Link>
        </div>

    )
}
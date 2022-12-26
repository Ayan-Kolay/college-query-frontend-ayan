import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../App.css'    

export default function SignInPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/home")
        }
    },[])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const handleClick = async(e) => {
        e.preventDefault();
        const item = {email,password}
        const response = await fetch("/auth/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        if(response.status !== 200 || !response) {
            window.alert("Login Faliure")
        }
        else {
            const data = await response.json()
            localStorage.setItem("user-info",JSON.stringify(data));
            navigate("/home")
        }
    }
    return (

    <div className="text-center m-5-auto">

            
            <h2>Sign in to us</h2>
            <form method='POST'>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={e=>setPassword(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={(e)=>handleClick(e)}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>

    )
}
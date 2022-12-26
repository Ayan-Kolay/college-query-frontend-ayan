import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'
export default function ForgetPasswordPage() {

    const [email,setEmail] = useState("")
    const navigate = useNavigate();


    const handleClick = async (e) => {
        e.preventDefault();
        const data = {email}
        // console.log(data);
        const resp = await fetch("/auth/password/request",{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        if(resp.status==-204) {
            window.alert("email sent")
        }
        else {
            window.alert("error occured")
        }

    }


    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form method='POST'>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={(e)=>handleClick(e)}>Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
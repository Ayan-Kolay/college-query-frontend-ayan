import { queryAllByAltText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"


export default function ResetPassword() {

    const handleSubmit = async(e) => {
        const data = {
            // token:query.params.reset_token,
            password:e.target.password.value
        }
        const response = await fetch("http://localhost:8055/auth/password/reset",{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })
            console.log(response);
    }
    
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <p>
                    <label id="reset_pass_lbl">New Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Change Password</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

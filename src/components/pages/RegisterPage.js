import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {



    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [first_name,setFirst_name] =useState("")
    const [last_name,setLast_name] = useState("")
    const [avatar,setAvatar] = useState("")
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        const item = {email,password,first_name,last_name,avatar}

            const response = await fetch("/users",{
                method:'POST',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            })
            if(response.status !== 204 || !response) {
                window.alert("Registration fail")
                console.log("Registration Done");
            }
            else {
                console.log("Successfull");
                navigate("/login");
            }
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form method='POST'>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" onChange={e => setFirst_name(e.target.value)} required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" onChange={e => setLast_name(e.target.value)} required />
                </p>
                <p>
                    <label>Profile Picture Url</label><br/>
                    <input type="text" name="avatar" onChange={e => setAvatar(e.target.value)}  />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" onChange={e=>setPassword(e.target.value)} name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit"  onClick={(e)=>handleClick(e)} >Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
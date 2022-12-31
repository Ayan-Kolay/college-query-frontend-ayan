import React, {useEffect,useState} from "react";
import "./Profile.css";


const ProfilePage = () => {

    const [firstname,setFirstname] =useState("")
    const [lastname,setLastname] = useState("")
    const [avatar,setAvatar] = useState("")

    useEffect(()=>{
        const fetchData = async() => {

            const getInfo = localStorage.getItem("user-info")
            if(getInfo){
                const infoObj = JSON.parse(getInfo);
                const token = infoObj.data.access_token;
                // console.log(token);
                const profileInfo = await fetch(`/users/me?fields=first_name,last_name,avatar`,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                // console.log(profileInfo);
                
                const userData = await profileInfo.json()
                // console.log(userData);
                setFirstname(userData.data.first_name)
                setLastname(userData.data.last_name)
                setAvatar(userData.data.avatar)
            }
        }
        fetchData();
        // console.log(firstname);
    }

    ,[])
    const handleClick = async(e) => {
        e.preventDefault();
        const getInfo = localStorage.getItem("user-info")
        if(getInfo){
            const infoObj = JSON.parse(getInfo);
            const token = infoObj.data.access_token;
            const item = {first_name:firstname,last_name:lastname}
            // console.log(item);
            const update = await fetch("/users/me",{
                method:'PATCH',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            
            if(update.status === 200) {
                window.alert("successfully updated")
            }
            else {
                window.alert("error occured")
            }
        }
        // console.log(updatedData);
    }



  return (
    <div className="ProfilePage">
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
       <form method='POST'>
                <a className="profile-image">
                    <img alt="profile-image" name="avatar" style={imageStyle} ></img>
                </a>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="firstname" onChange={e => setFirstname(e.target.value)} value={firstname || " "} required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lastname" value={lastname || " "} onChange={e => setLastname(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit"  onClick={(e)=>handleClick(e)} >Update</button>
                </p>
               </form>
    </div>
  );
};
export default ProfilePage;

const imageStyle = {
    width:"100px",
    height:"50px"
}

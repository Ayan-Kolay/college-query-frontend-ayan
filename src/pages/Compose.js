import React ,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import getUserName from "../services/getUserName"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Compose = () =>{



    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const navigate = useNavigate();
    const handleClick = async(e) => {
      e.preventDefault();
        const getInfo = localStorage.getItem("user-info");
        if (getInfo) {
            const infoObj = JSON.parse(getInfo);
            const token = infoObj.data.access_token;
          const resp = await getUserName(token);
          const userName = `${resp.data.first_name} ${resp.data.last_name}`
          // console.log(userName);
            const response = await fetch("/items/question",{
                method:"POST",
                body:JSON.stringify({
                    question:title,
                    questionDescription:description,
                    name:userName
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            // console.log(response);
            if(response.status==200) {
                // window.alert("Posted Sucessfully")
                toast("Posted Successfully", {type:'success'})
                navigate(-1)
              }
              else{
                toast("Error Occured", {type:'error'})
                // window.alert("Error Occured")
            }
        }
    }

    return(
        <div className="min-h-screen pt-32 bg-gradient-to-br from-amber-400 to-amber-200">
<div className="container mx-auto">
  <div className="flex flex-col lg:flex-row w-9/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-bl from-teal-500 to-teal-200">
      <h1 className="text-white text-3xl mb-4">Post Your Query Here</h1>
      <div>
        <p className="text-black lg:leading-8 lg:mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-white font-semibold">Learn more</a></p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 py-8 lg:py-16 px-12">
      <h2  className="text-2xl lg:text-3xl mb-4"></h2>
      <p className="mb-4 font-semibold">
        Your Question Will be Answered by the Community Asap
      </p>
      <form action="#">
        <div className="">
          <input  onChange={e => setTitle(e.target.value)} type="text" placeholder="Question Title" className="border border-gray-400 py-1 px-2 my-2 w-full"/>
          <textarea style={{resize:"none"}} rows="10" cols="10" onChange={e => setDescription(e.target.value)} type="textarea" placeholder="Question Description" className="border border-gray-400 py-1 px-2 my-2 w-full h-24"/>
        </div>
        <div className="mt-5">
          <button   onClick={e=>handleClick(e)}  className="w-full bg-teal-700 py-3 text-center text-white hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out">Publish</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
 
    )
}


export default Compose;
import { useParams,useLocation, json } from "react-router-dom";
import React, { useState,useEffect } from "react";
import moment from "moment";
import NavbarLoggedIn from "./NavbarLoggedIn";
import getUserName from "../services/getUserName";

const Answer = () => {

    // console.log(data);
    const [answer,setAnswer] = useState("")

    const location = useLocation();
    const data = location.state.data
    const [item,setItem] = useState([]);
    // const a = JSON.parse(data)
    useEffect(() => {
        const getInfo = localStorage.getItem("user-info");
        if (getInfo) {
          const infoObj = JSON.parse(getInfo);
          const token = infoObj.data.access_token;
        
          fetch(`/items/answer?filter[question_id][_eq]=${data.id}`, {
            method: "GET",
            body: JSON.stringify(),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((result) => {
            //   console.log(result);
              return result.json();
            })
            .then((result) => {
            //   console.log(result);
              setItem(result.data);
            })
            .catch((err) => {
              console.log(err);
            //   handleClick();
            });
        }
      }, []);

    const PostAnswer = async(e) => {
        const getInfo = localStorage.getItem("user-info");
        if (getInfo) {
            const infoObj = JSON.parse(getInfo);
            const token = infoObj.data.access_token;
        
            const resp = await getUserName(token);
            const userName = `${resp.data.first_name} ${resp.data.last_name}`
            const response = await fetch("/items/answer",{
                method:'POST',
                body:JSON.stringify({
                    question_id:data.id,
                    answer:answer,
                    status:"published",
                    name:userName
                }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            // console.log(response);
        }
    }


    return(
        <div>
            <NavbarLoggedIn></NavbarLoggedIn>
            <div className="question">
                <div className="px-5 py-3 border-b-2">
                    {/* <div></div> */}

                    <div className="text-xl font-[800]">{data.name}</div>
                    <div className="text-slate-600 text-sm">{moment(data.date_created).fromNow()}</div>
                    <div className="text-xl font-[600]">{data.question}</div>
                    <div className="text-slate-600 text-sm"> {data.questionDescription}</div>
                    {/* <div className="interarction ">
                    <i className="text-xl font-[600] mx-1 cursor-pointer" onClick={e => {Upvote(e)}}>Upvote</i>
                    <i className="text-xl font-[600] mx-4 cursor-pointer" onClick={e => {Answers(data)}}>Answers</i>
                    </div> */}

                </div>
            </div>
            <div className="PostAnswerSection justify-center border-2 border-black">
                    <input  onChange={e => setAnswer(e.target.value)} type="text" placeholder="post your answer" className="w-4/5 px-5"/>
                    <button onClick={e => PostAnswer(e)} className="inline w-1/6 my-2 w-full bg-teal-700 py-3 text-center text-white hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out">Post</button>
            </div>
            <div className="AllAnswers">
                <h2 className="text-xl font-[600]">Here is All the Answers</h2>
                <div className="mt-10">
                    {item && 
                        item.map((item,index) => {
                            // console.log(item);
                            return(

                                <div className="px-5 py-3 border-b-2">
                                    <div className="text-xl font-[800]">{item.name}</div>
                                    <div className="text-slate-600 text-sm">{moment(item.date_created).fromNow()}</div>
                                    <div className="text-slate-800 text-sm">{item.answer}</div>
                                    <div className="text-slate-600 text-sm"> {item.questionDescription}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                
        </div>
    )
}

export default Answer
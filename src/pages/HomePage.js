/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import moment from "moment";
import {Link, useNavigate } from "react-router-dom";
import NavbarLoggedIn from "./NavbarLoggedIn";
// import { Navbar } from "../Components/Navbar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function HomePage() {
  
  const [like,setLike] = useState([])
  const [isLiked,setIsLiked] = useState();
  const navigate = useNavigate();
  const Upvote = async (item) => {

    //upvote functionality

  }

  const Answers =  (item) => {
    // console.log(questionId);
    navigate(`/answer/${item.id}`,{state:{data:item}})


  }

  const handleClick = async () => {
    try {
      const refreshTokenObject = JSON.parse(localStorage.getItem("user-info"));
      const refreshToken = {
        refresh_token: refreshTokenObject.data.refresh_token,
      };
      await fetch("/auth/logout", {
        method: "POST",
        body: JSON.stringify(refreshToken),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      // console.log("you are not logged in");
      window.alert("you are not logged in");
    }
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    const getInfo = localStorage.getItem("user-info");
    if (getInfo) {
      const infoObj = JSON.parse(getInfo);
      const token = infoObj.data.access_token;

      fetch("/items/question", {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((result) => {
          // console.log(result);
          return result.json();
        })
        .then((result) => {
          // console.log(result);
          setdata(result.data);
        })
        .catch((err) => {
          console.log(err);
          handleClick();
        });
    }
  }, []);

  // console.log(data);


  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="text-left">
      <NavbarLoggedIn></NavbarLoggedIn>
       
       <div className="mt-10">
        {data &&
          data.map((item, index) => {
            // console.log(item);
            return (
              <div className="px-5 py-3 border-b-2">
                <div></div>

                <div className="text-xl font-[800]">{item.name}</div>
                <div className="text-slate-600 text-sm">{moment(item.date_created).fromNow()}</div>
                <div className="text-xl font-[600]">{item.question}</div>
                <div className="text-slate-600 text-sm"> {item.questionDescription}</div>
                <div className="interarction ">
                <i className="text-xl font-[600] mx-1 cursor-pointer" onClick={e => {Upvote(item)}}>Upvote</i>
                <i className="text-xl font-[600] mx-4 cursor-pointer" onClick={e => {Answers(item)}}>Answers</i>
                </div>
              </div>
            );
          })}
      </div> 
    </div>
  );
}

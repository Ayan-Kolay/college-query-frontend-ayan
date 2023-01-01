import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import NavbarLoggedIn from "./NavbarLoggedIn";
import moment from "moment";

const Search = () => {
    const navigate = useNavigate();
    
    
    const [searchParams] = useSearchParams();
    const [data,setData] = useState([])
    const query = searchParams.get("search");
    const Upvote = async (item) => {
    
  }

    const Answers =  (item) => {
      // console.log(questionId);
      navigate(`/answer/${item.id}`,{state:{data:item}})
  
  
    }
    // const data = location.state.data;



    useEffect(() => {
        const getInfo = localStorage.getItem("user-info");
        if (getInfo) {
          const infoObj = JSON.parse(getInfo);
          const token = infoObj.data.access_token;
    
          fetch(`/items/question?search=${query}`, {
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
              setData(result.data);
            })
            .catch((err) => {
              console.log(err);
            //   handleClick();
            // navigate("/")

            });
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

export default Search;
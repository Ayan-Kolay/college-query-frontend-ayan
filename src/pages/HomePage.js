/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
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
          console.log(result);
          return result.json();
        })
        .then((result) => {
          console.log(result);
          setdata(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log(data);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

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
      navigate("/");
    } catch (err) {
      // console.log("you are not logged in");
      window.alert("you are not logged in");
    }
  };

  return (
    <div className="text-left">
      <Link to="/">
        <button className="primary-button" onClick={handleClick}>
          Log out
        </button>
      </Link>
      <div className="mt-10">
        {data.map((item, index) => {
          return (
            <>
              <div className="px-5 py-3 border-b-2">{item.question}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

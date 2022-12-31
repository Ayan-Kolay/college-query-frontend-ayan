import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function SignInPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const item = { email, password };
    const response = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status !== 200 || !response) {
      window.alert("Login Faliure");
    } else {
      const data = await response.json();
      localStorage.setItem("user-info", JSON.stringify(data));
      navigate("/home");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-400 to-amber-200">
      <div className="container mx-auto">
        <div className="flex justify-center absolute align-middle top-1/4 min-[320px]:left-12 sm:left-20 flex-col lg:flex-row w-9/12 lg:w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-gradient-to-bl from-teal-500 to-teal-200">
            <h1 className="text-white text-3xl mb-4">Welcome</h1>
            <div>
              <p className="text-black lg:leading-8 lg:mx-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-white font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-8 lg:py-16 px-12">
            <h2 className="text-2xl lg:text-3xl mb-4">Login</h2>
            <p className="mb-4">Login to your account.</p>
            <form action="#" className="w-full">
              <div className="mt-4 lg:mt-5">
                <input
                  placeholder="enter email"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 py-1 px-2 w-full"
                  required
                />
              </div>
              <div className="mt-4 lg:mt-5">
                <input
                  placeholder="enter password"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-400 py-1 px-2 w-full"
                  required
                />
              </div>

              <Link to="/forget-password">
                <label className="right-label">Forget password?</label>
              </Link>
              <div className="mt-5">
                <button
                  onClick={(e) => handleClick(e)}
                  className="w-full bg-teal-700 py-3 text-center text-white hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-amber-400 to-amber-200 rounded-bl-[2.5rem]">
      <div className="text-center ">
        <h2 className="pt-8 text-2xl lg:text-3xl font-medium text-teal-900">
          Lorem ipsum dolor
        </h2>
      </div>
      <div className="text-center px-20 pt-10 pb-20 leading-8 lg:text-xl text-white lg:leading-8 lg:mx-24">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum totam
          dolore quos hic est similique? Quaerat excepturi molestiae neque
          quibusdam dignissimos, architecto consectetur a, atque soluta aliquid
          accusantium error exercitationem totam ad blanditiis vel dolorum iure
          in, ipsum dolorem tempora! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quam, sapiente?
        </p>
      </div>
      <div className="flex justify-center mx-4 pb-14">
        <Button name="Login" />
        <Button name="Sign Up" />
      </div>
    </div>
  );
};

export default Hero;

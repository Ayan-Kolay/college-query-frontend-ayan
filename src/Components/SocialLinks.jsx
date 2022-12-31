import React from "react";

const SocialLinks = ({ Icons }) => {
  return (
    <div className="text-center pt-20">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-teal-100 mx-1.5 text-xl hover:text-black hover:bg-amber-50
          duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialLinks;

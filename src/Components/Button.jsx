import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className="inline-block mx-2 px-6 py-2.5 bg-teal-900 text-white font-medium lg:font-semibold text-xs lg:text-sm leading-tight rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;

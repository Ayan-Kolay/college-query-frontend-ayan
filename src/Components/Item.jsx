import React from "react";

const Item = ({ Links, Title }) => {
  return (
    <ul>
      <h1 className="py-4 font-medium">{Title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-neutral-600 hover:text-neutral-400 duration-300
          text-sm cursor-pointer leading-8"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;

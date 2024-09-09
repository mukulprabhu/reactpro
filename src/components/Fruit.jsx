import React from "react";

export const Fruit = ({ name, price, emoji }) => {
  return (
    <li key={name}>
      {emoji} {name} ${price}
    </li>
  );
};

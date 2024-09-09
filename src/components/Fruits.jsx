import { useReducer, useState } from "react";
import { Fruit } from "./Fruit";

const ifruits = [
  { name: "Mango", price: 10, emoji: "🥭" },
  { name: "Apple", price: 7, emoji: "🍎" },
  { name: "Banana", price: 5, emoji: "🍌" },
  { name: "Orange", price: 2, emoji: "🍊" },
  { name: "Pineapple", price: 7, emoji: "🍍" },
];

const fruitReducer = (stateFruits, event) => {
  switch (event.type) {
    case "ADD":
      stateFruits = [...stateFruits, event.value];
      break;
    case "DELETE":
      stateFruits = stateFruits.filter((f) => f.name !== event.value);
      break;
    default:
      break;
  }

  return stateFruits;
};

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const [fruits, dispatch] = useReducer(fruitReducer, ifruits);
  const [fruitName, setFruitName] = useState("");

  const handleAddClick = () => {
    dispatch({
      type: "ADD",
      value: { name: "Coco", price: 15, emoji: "🍵" },
    });
  };

  return (
    <div>
      <ul>
        {fruits.map((f) => (
          <Fruit key={f.name} name={f.name} price={f.price} emoji={f.emoji} />
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setFruitName(e.target.value)}
        value={fruitName}
      />
      <button
        onClick={() =>
          dispatch({
            type: "DELETE",
            value: fruitName,
          })
        }
      >
        Delete Fruit
      </button>
      <button onClick={handleAddClick}>Add Cococ</button>
    </div>
  );
}

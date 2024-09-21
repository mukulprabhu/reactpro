import React from "react";
import styles from "./fooditem.module.css";

const FoodItem = ({ foodItem, setFoodId }) => {
  return (
    <div
      className={styles.foodItemContainer}
      onClick={() => setFoodId(foodItem.id)}
    >
      <img className={styles.itemimage} src={foodItem.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
    </div>
  );
};

export default FoodItem;

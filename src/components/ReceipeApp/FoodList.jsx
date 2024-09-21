import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div className={styles.foodList}>
      {foodData.map((foodItem) => (
        <div key={foodItem.id} className={styles.foodItem}>
          <FoodItem foodItem={foodItem} setFoodId={setFoodId} />
        </div>
      ))}
    </div>
  );
};

export default FoodList;

import { useCallback, useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes`;
  const key = `information?apiKey=`;
  const apiKey = "e831f1a11eee482d8cb9014d1e8dffdf";

  const [foodDetails, setFoodDetails] = useState({});

  async function GetReceipe() {
    console.log(foodId);
    const res = await fetch(`${URL}/${foodId}/${key}${apiKey}`);
    const data = await res.json();

    console.log(data);
    setFoodDetails(data);
  }

  useEffect(() => {
    if (foodId) GetReceipe();
  }, [foodId]);

  return (
    <div>
      Food Id: {foodId} {foodDetails.summary}
    </div>
  );
};

export default FoodDetails;

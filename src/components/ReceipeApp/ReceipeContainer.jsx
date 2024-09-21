import FoodList from "./FoodList";
import Search from "./Search";
import React, { useState } from "react";

import "./ReceipeContainer.css";
import Nav from "./Nav";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import FoodDetails from "./FoodDetails";

function ReceipeContainer() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState();
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default ReceipeContainer;

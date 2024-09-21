import Fruits from "./Fruits";

const FruitsContainer = () => {
  const person = {
    name: "Rob",
    message: "Hi There !",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      <Fruits />
    </div>
  );
};

export default FruitsContainer;

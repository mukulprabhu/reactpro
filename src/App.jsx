import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
function App() {
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
}

export default App;

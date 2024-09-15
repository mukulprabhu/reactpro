import Fruits from "./components/Fruits";
import MessageBox from "./components/MessageBox";
function App() {
  const person = {
    name: "Rob",
    message: "Hi There !",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      <MessageBox />
      <Fruits />
    </div>
  );
}

export default App;

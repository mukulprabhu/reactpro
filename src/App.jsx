import FruitsContainer from "./components/FruitsApp/FruitsContainer";
import Home from "./components/RoutesApp/Home";
import NavBar from "./components/RoutesApp/NavBar";
import NotFound from "./components/RoutesApp/NotFound";
import ReceipeContainer from "./components/ReceipeApp/ReceipeContainer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/RoutesApp/Login";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Fruits" element={<FruitsContainer/>} />
          <Route path="/Receipe" element={<ReceipeContainer/>} />
          <Route path="/Login" element={<Login setIsAuthenticated={ setIsAuthenticated }/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

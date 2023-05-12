import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Character from "./components/pages/Character";
import CharacterList from "./components/pages/CharacterList";
import Home from "./components/pages/Home";
import HousesList from "./components/pages/HousesList";
import "./main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route exact path="/houses" element={<HousesList />} />
      </Routes>
    </div>
  );
}

export default App;

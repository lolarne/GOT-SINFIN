import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar.jsx";
import "./main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Home />} />
        <Route exact path="/books" element={<Home />} />
        <Route exact path="/houses" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

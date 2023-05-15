import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Book from "./components/pages/Book.jsx";
import BooksList from "./components/pages/BooksList.jsx";
import Character from "./components/pages/Character";
import CharacterList from "./components/pages/CharacterList";
import Home from "./components/pages/Home";
import House from "./components/pages/House.jsx";
import HousesList from "./components/pages/HousesList.jsx";
import "./main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route exact path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route exact path="/houses" element={<HousesList />} />
        <Route path="/houses/:id" element={<House />} />
      </Routes>
    </div>
  );
}

export default App;

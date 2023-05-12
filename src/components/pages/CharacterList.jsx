import React, { useState } from "react";
import List from "../List";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const CharacterList = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState({});

  const research = async () => {
    try {
      const res = await axios.get(
        `https://www.anapioficeandfire.com/api/characters?name=${keyword}`
      );
      if (res.data) {
        setSearchResult(res.data);
      } else {
        setSearchResult("No character found or maybe forgotten...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // console.log({DATA: searchResult})

  return (
    <div className="page">
      <h1>Characters</h1>
      <form>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      <div onClick={() => research()}>envoyer</div>
      {searchResult.length && <p>name: {searchResult[0].name}</p>}
      <List root="characters" pageNbr={page} pageSize="20" />
      <Pagination count={107} page={page} onChange={handleChange} />
    </div>
  );
};

export default CharacterList;

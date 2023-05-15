import Pagination from "@mui/material/Pagination";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../List";
import { urlToLink } from "../hooks.jsx";

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

      if (res.data[0]) {
        setSearchResult(res.data[0]);
      } else {
        setSearchResult({ name: "No character found or maybe forgotten..." });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page center">
      <h1>CHARACTERS</h1>
      <div className="searchBar">
        <form>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <button onClick={() => research()}>Search</button>
      </div>
      {keyword.length && searchResult.url ? (
        <Link to={urlToLink(searchResult.url, "characters")} className="button">
          <p>
            {searchResult.name.length ? searchResult.name : "Unknown"} from{" "}
            {searchResult.culture.length ? searchResult.culture : "somewhere"}
          </p>
        </Link>
      ) : (
        searchResult.name
      )}
      <List
        root="characters"
        pageNbr={page}
        pageSize="20"
        dataToDisplay={["name", "culture"]}
      />
      <Pagination count={107} page={page} onChange={handleChange} />
    </div>
  );
};

export default CharacterList;

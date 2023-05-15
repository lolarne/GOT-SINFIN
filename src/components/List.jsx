import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DisplayKey, urlToLink } from "./hooks.jsx";

/**
 * List component
 * @param {string} root - "characters" OR "books" OR "houses"
 * @param {number} pageNbr
 * @param {number} pageSize - max: 50
 * @param {array[string]} dataToDisplay - key name of the data to display
 * @returns
 */

const List = ({ root, pageNbr, pageSize, dataToDisplay }) => {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/${root}?page=${pageNbr}&pageSize=${pageSize}`
          );
          if (res.data) {
            setList(res.data);
            setLoaded(false);
          }
        }
      } catch (err) {
        return console.log(err);
      }
    })();
  }, [loaded, root, pageNbr, pageSize]);

  return (
    <div className="list">
      <ul>
        <li id="header">
          {dataToDisplay.length &&
            dataToDisplay.map((title, titleKey) => (
              <p key={titleKey}>{title.toUpperCase()}</p>
            ))}
        </li>
        {list.map((item, itemKey) => (
          <Link to={urlToLink(item.url, root)} key={itemKey}>
            <li>
              <DisplayKey obj={item} keys={dataToDisplay} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default List;

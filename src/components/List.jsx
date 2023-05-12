import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = ({ root, pageNbr, pageSize }) => {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  let link = `https://www.anapioficeandfire.com/api/${root}/`;
  let linkLength = link.length;

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/${root}?page=${pageNbr}&pageSize=${pageSize}`
          );
          console.log({ RES: res.data });
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
        <li>
          <p>NAME</p>
          <p>CULTURE</p>
        </li>
        {list.map((item) => (
          <Link to={`/characters/${item.url.slice(linkLength)}`}>
            <li>
              <p>{item.name ? item.name : "Unknown"}</p>
              <p>{item.culture ? item.culture : "Unknown"}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default List;

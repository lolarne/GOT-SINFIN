import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlToLink } from "../hooks.jsx";

function House() {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [house, setHouse] = useState({
    name: "",
    region: "",
    coatOfArms: "",
    words: "",
    titles: [""],
    seats: [""],
    currentLord: "",
    founded: "",
    founder: "",
    diedOut: "",
  });

  useEffect(() => {
    (async () => {
      try {
        if (!loaded && id) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/houses/${id}`
          );
          if (res.data) {
            setHouse(res.data);
            setLoaded(false);
          }
        }
      } catch (err) {
        return console.log(err);
      }
    })();
  }, [loaded, id]);

  return (
    <div>
      <h1>{house.name.length ? house.name : "Unamed house"}</h1>
      {house.coatOfArms.length && (
        <p>Description of the coat of arms: {house.coatOfArms}</p>
      )}
      <p>
        Current Lord:{" "}
        {house.currentLord.length ? (
          <Link to={urlToLink(house.currentLord, "characters")}>
            See who it is
          </Link>
        ) : (
          "No one, you should apply for this job!"
        )}
      </p>
      <p>
        This house was founded{" "}
        {house.founded.length
          ? house.founded
          : "on a mystery day, a long time ago,"}{" "}
        by{" "}
        {house.founder.length ? (
          <>
            someone we know{" "}
            <Link to={urlToLink(house.founder, "characters")}>
              (learn more)
            </Link>
          </>
        ) : (
          "an anonymous person, maybe The John Doe"
        )}{" "}
        on the region of{" "}
        {house.region.length ? house.region : "...actually we do not know"}.
        {house.diedOut.length
          ? `Despite its successes, the house died out ${house.diedOut}.`
          : ""}
      </p>
      <p>
        Famous for:
        <ul>
          <li>
            Its words: "
            {house.words.length
              ? house.words
              : "Hello world! (Sorry we do not have this information)"}
            "
          </li>
          <li>
            Its titles:{" "}
            {house.titles[0].length
              ? house.titles.map((title, titleKey) => <> {title};</>)
              : "well... at least they exist!"}
          </li>
          <li>
            Its seats:{" "}
            {house.seats[0].length
              ? house.seats.map((seat, seatKey) => <> {seat};</>)
              : "chairs, stools, etc."}
          </li>
        </ul>
      </p>
    </div>
  );
}

export default House;

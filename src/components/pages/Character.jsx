import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlToLink } from "../hooks.jsx";

const Character = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [profile, setProfile] = useState({
    url: "",
    name: "",
    gender: "",
    culture: "",
    born: "",
    died: "",
    titles: [],
    aliases: [],
    father: "",
    mother: "",
    spouse: "",
    allegiances: [],
    books: [],
    povBooks: [],
    tvSeries: [],
    playedBy: [],
  });

  useEffect(() => {
    (async () => {
      try {
        if (!loaded && id) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/characters/${id}`
          );
          if (res.data) {
            console.log({ RES: res.data });

            setProfile(res.data);
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
      <div className="profile-card">
        <h1>{profile.name ? profile.name : "Who knows"}</h1>
        <p>
          {profile.titles &&
            profile.titles.length > 1 &&
            profile.titles.map((item) => (
              <i>
                <p>{item}</p>
              </i>
            ))}
        </p>
        <p>Culture: {profile.culture ? profile.culture : "No idea"}</p>
        <p>
          Date of birth: {profile.born ? profile.born : "Still a mystery..."}
        </p>
        {profile.died.length ? <p>Death: {profile.died}</p> : ""}
      </div>

      <div className="profile-description">
        <p className="">
          This character is born on{" "}
          {profile.born
            ? profile.born
            : "a date we don't know because no one thought of it, anyway,"}{" "}
          {profile.mother.length ? (
            <>
              we know the{" "}
              <Link to={urlToLink(profile.mother, "characters")}>mother</Link>
            </>
          ) : (
            "if you know the mother, that is great because we don't"
          )}{" "}
          and{" "}
          {profile.father.length ? (
            <>
              we do know the{" "}
              <Link to={urlToLink(profile.father, "characters")}>father</Link>
            </>
          ) : (
            "... actually, we don't know father"
          )}
          , this family is from{" "}
          {profile.culture
            ? profile.culture
            : "a place on the map, it has to be somewhere"}
          .
        </p>
        <p>
          You can find this amazing character on the following book-s:{" "}
          {profile.books.length
            ? profile.books.map((book, bookKey) => (
                <Link to={urlToLink(book, "books")} key={bookKey}>
                  livre {bookKey}
                </Link>
              ))
            : "wait who is this character?"}
        </p>
        <p>
          You can find this character on the TV show{" "}
          {profile.tvSeries.length
            ? `(${profile.tvSeries.map((season, seasonKey) => ` ${season}`)})${
                profile.playedBy.length
                  ? `, played by ${profile.playedBy.map(
                      (actor, actorKey) => actor
                    )}.`
                  : "."
              }`
            : `wait, no one wants to play ${
                profile.name.length
                  ? profile.name
                  : "this character without a name!"
              }`}
        </p>
      </div>
    </div>
  );
};

export default Character;

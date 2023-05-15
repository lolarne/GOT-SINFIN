import axios from "axios";
import ReactEcharts from "echarts-for-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [dead, setDead] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (!loaded) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/books?pageSize=50`
          );

          const getDead = await axios.get(
            `https://www.anapioficeandfire.com/api/characters?isAlive=false&page=1&pageSize=50`
          );

          if (res.data && getDead.data.length) {
            setBooks(res.data);
            setDead(getDead.data);

            setLoaded(false);
          }
        }
      } catch (err) {
        return console.log(err);
      }
    })();
  }, [loaded]);

  const statBooks = () => {
    let authorList = [];

    if (books.length) {
      books.forEach((books) => {
        let result = { value: 0, name: books.name };
        if (books.authors[0].length) {
          books.authors.forEach((author) => {
            result.value = result.value + 1;
          });
          authorList.push(result);
        }
      });
      if (authorList.length) {
        return authorList;
      }
    }
  };

  const statCharacters = () => {
    let genders = { male: 0, female: 0, none: 0 };

    dead.forEach((character) => {
      if (character.gender) {
        character.gender === "Male"
          ? (genders.male = genders.male + 1)
          : character.gender === "Female"
          ? (genders.female = genders.female + 1)
          : (genders.none = genders.none + 1);
      }
    });

    return [
      { value: genders.male, name: "male" },
      { value: genders.female, name: "female" },
      { value: genders.none, name: "unknown" },
    ];
  };

  if (books.length && dead) {
    const option = {
      title: {
        text: "Number of author per book",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: statBooks(),
        },
      ],
    };

    const option2 = {
      title: {
        text: "Gender of 50 dead character",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: statCharacters(),
        },
      ],
    };

    return (
      <div>
        <ReactEcharts option={option} />
        <ReactEcharts option={option2} />
      </div>
    );
  }
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [book, setBook] = useState({
    name: "",
    isbn: "",
    authors: [""],
    numberOfPages: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        if (!loaded && id) {
          const res = await axios.get(
            `https://www.anapioficeandfire.com/api/books/${id}`
          );
          if (res.data) {
            setBook(res.data);
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
      <h1>{book.name.length ? book.name : "No title"}</h1>
      {book.isbn.length ? <p>ISBN: {book.isbn}</p> : ""}
      <p>
        Author:{" "}
        {book.authors.length
          ? book.authors.map((author) => ` ${author},`)
          : "No one"}
      </p>
      <p>
        Number of pages:{" "}
        {book.numberOfPages.length ? (
          <p>{book.numberOfPages}</p>
        ) : (
          "No idea, too tired to count..."
        )}
      </p>
    </div>
  );
}

export default Book;

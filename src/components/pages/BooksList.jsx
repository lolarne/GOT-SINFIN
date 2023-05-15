import React from "react";
import List from "../List";

const BooksList = () => {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div className="page">
      <h1>BOOKS</h1>
      <List
        root="books"
        pageNbr="1"
        pageSize={pageSize}
        dataToDisplay={["name", "isbn"]}
      />
      <button onClick={() => setPageSize(pageSize + 5)}>See more</button>
    </div>
  );
};

export default BooksList;

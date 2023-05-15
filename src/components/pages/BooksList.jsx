import React from "react";
import List from "../List";

const BooksList = () => {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div>
      <List
        root="books"
        pageNbr="1"
        pageSize={pageSize}
        dataToDisplay={["name", "isbn"]}
      />
      <button onClick={() => setPageSize(pageSize + 5)}>Voir plus</button>
    </div>
  );
};

export default BooksList;

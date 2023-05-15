import Pagination from "@mui/material/Pagination";
import React from "react";
import List from "../List";

function HousesList() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="page">
      <h1>HOUSES</h1>
      <List
        root="houses"
        pageNbr={page}
        pageSize="20"
        dataToDisplay={["name", "region"]}
      />
      <Pagination count={23} page={page} onChange={handleChange} />
    </div>
  );
}

export default HousesList;

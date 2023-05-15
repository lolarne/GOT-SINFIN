import React from "react";
import List from "../List";
import Pagination from "@mui/material/Pagination";

function HousesList() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

  return (
    <div>
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

import React from "react";

function Pagination({ totalPost, post, setCurPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / post); i++) {
    pages.push(i);
  }
  return (
    <div style={{ display: "flex", width: "auto", margin: "auto" }}>
      {pages.map((ele) => {
        return (
          <button
            onClick={() => setCurPage(ele)}
            color="white"
            mt="20px"
            bgColor="red "
            ml="5px"
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;

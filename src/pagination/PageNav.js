import React from "react";

const PageNav = ({ currentPage, setCurPage, totalNoOfPages }) => {
  return (
    <div>
      <button
        onClick={() => setCurPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      Page {currentPage} of {totalNoOfPages()}
      <button
        onClick={() => setCurPage(currentPage + 1)}
        disabled={currentPage === totalNoOfPages()}
      >
        Next
      </button>
    </div>
  );
};

export default PageNav;

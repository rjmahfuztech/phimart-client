import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="text-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            setCurrentPage(i + 1);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`px-3 py-1 rounded-md text-lg bg-gray-200 cursor-pointer ${
            currentPage == i + 1 && "bg-secondary text-white"
          } mx-1 my-6`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

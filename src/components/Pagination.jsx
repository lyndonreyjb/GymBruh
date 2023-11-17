import { useState } from "react";
const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${
            currentPage === i
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } px-3 py-2 rounded mx-1`}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className="flex justify-center mt-4">{renderPagination()}</div>;
};

export default Pagination;

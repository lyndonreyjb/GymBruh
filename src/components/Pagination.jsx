import { useState } from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  pageSize = 3,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = [];
    const halfPageSize = Math.floor(pageSize / 2);
    let pageToShow = currentPage - halfPageSize;

    if (pageToShow + pageSize > totalPages) {
      pageToShow = totalPages - pageSize + 1;
    }
    pageToShow = Math.max(1, pageToShow);

    for (let i = 1; i <= Math.min(totalPages, pageSize); i++) {
      const page = pageToShow + i - 1;
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(page)}
          className={`${
            currentPage === page
              ? "bg-primary text-white h-12 w-12"
              : "bg-gray-200 hover:bg-gray-300 h-12 w-12"
          } px-3 py-2 rounded mx-1`}>
          {page}
        </button>
      );
    }

    if (pageToShow + pageSize <= totalPages) {
      pages.push(
        <div key="ellipsis" className="text-2xl">
          ...
        </div>
      );
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`${
            currentPage === totalPages
              ? "bg-primary text-white h-12 w-12"
              : "bg-gray-200 hover:bg-gray-300 h-12 w-12"
          } px-3 py-2 rounded mx-1`}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="join mt-5">
      <button
        className="join-item btn btn-primary text-white"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        «
      </button>
      {renderPagination()}
      <button
        className="join-item btn btn-primary text-white"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>
        »
      </button>
    </div>
  );
};

export default Pagination;

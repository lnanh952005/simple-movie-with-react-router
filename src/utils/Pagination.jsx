import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import style from "../assets/styles/pagination.module.scss";

const PaginatedItems = ({ itemsPerPage , total_results }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const pageCount = Math.ceil(total_results / itemsPerPage);

  const handlePageClick = (event) => {

    setNextPage(event.selected + 1);
    const newOffset = (event.selected * itemsPerPage) % total_results;
    setNextPage(event.selected + 1);
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className={style.paginate}>
      <ReactPaginate
        className="flex justify-center items-center gap-10 "
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        forcePage={nextPage - 1}
        activeClassName="text-pink-900"
        nextClassName="border-2 rounded-lg px-4 py-1 cursor-pointer"
        previousClassName="border-2 rounded-lg px-4 py-1 cursor-pointer"
        pageClassName="px-4 py-1 cursor-pointer"
      />
    </div>
  );
};

export default PaginatedItems;



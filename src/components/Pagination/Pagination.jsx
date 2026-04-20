import React, { useState, useEffect } from "react";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowLeftGray from "../../assets/icons/arrow-left-gray.svg";
import ArrowRightGray from "../../assets/icons/arrow-right-gray.svg";
import { PAGINATION_STYLES } from "../../constants";
import styles from "./Pagination.module.scss";

export const Pagination = ({ totalPages, currentPage, changeCurrentPage }) => {
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const tempPagination = [];
    for (let i = 0; i < totalPages; i++) {
      tempPagination.push(i + 1);
    }
    setPagination(tempPagination);
  }, [totalPages]);

  const handlePrev = () => {
    if (currentPage > 1) {
      changeCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      changeCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>

      <button onClick={handlePrev} disabled={currentPage === 1} alt="">
        <img src={currentPage === 1 ? ArrowLeftGray : ArrowLeft} alt="" />
      </button>

      {pagination.map((page) => (
        <div
          key={page.index}
          className={
            currentPage === page
              ? PAGINATION_STYLES.CURRENT
              : PAGINATION_STYLES.INACTIVE
          }
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </div>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages} alt="">
        <img
          src={currentPage === totalPages ? ArrowRightGray : ArrowRight}
          alt=""
        />
      </button>
      
    </div>
  );
};

'use client';
import React, { FC } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange:(value:any)=>void;
};


const Pagination:FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 text-sm rounded-md ${
            i === currentPage
              ? 'bg-gray-100 text-black'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center mt-10 pt-5 border-t border-slate-100">
      <button
        className="px-2 py-[2px] text-gray-700 border border-slate-200 rounded-md hover:bg-slate-50 flex items-center space-x-1"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <IoMdArrowBack className='text-lg'/>
       <span className='text-sm'>Previous</span>
      </button>

      <div className="flex space-x-2">{renderPageNumbers()}</div>

      <button
        className="px-4 py-[2px] text-gray-700 border border-slate-200 rounded-md hover:bg-slate-50 flex items-center space-x-1"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span className='text-sm'>Next</span>
        <IoMdArrowForward className='text-lg'/>
      </button>
    </div>
  );
};

export default Pagination;

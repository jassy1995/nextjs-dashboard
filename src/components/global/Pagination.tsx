'use client';
import React, { FC } from 'react';
import {Pagination, Button} from "@nextui-org/react";

type PaginationComProps = {
    currentPage: number;
    totalPages: number;
    onPageChange:(value:any)=>void;
};


const PaginationCom:FC<PaginationComProps> = ({ currentPage, totalPages, onPageChange }) => {
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

  return (
      <div className="flex justify-between items-center mt-10 pt-5">
          <Button
              className='text-white font-medium bg-black disabled:opacity-75 disabled:cursor-not-allowed'
              size="sm"
              variant="flat"
              onPress={handlePrevious}
              disabled={currentPage === 1}
          >
              Previous
          </Button>
          <Pagination color="default" page={currentPage} total={totalPages} onChange={onPageChange}/>
              <Button
                  size="sm"
                  className='text-white font-medium bg-black disabled:opacity-75 disabled:cursor-not-allowed'
                  variant="flat"
                  onPress={handleNext}
                  disabled={currentPage === totalPages}
              >
                  Next
              </Button>
      </div>
  );
};

export default PaginationCom;

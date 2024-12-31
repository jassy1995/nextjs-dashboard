'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styles from '@/util/style';
import FilterSidebar from '@/components/global/FilterSidebar';
import ItemCard from '@/components/global/ItemCard';
import allProducts from '@/lib/products';
import Pagination from '@/components/global/Pagination';
import Footer from '@/components/Footer';
import { MdOutlineFilterList } from 'react-icons/md';
import useWindowSize from '@/hooks/useWindowSize';
import Dialog from '@/components/global/Dialog';
import SizeCard from '@/components/global/SizeCard';

function ProductCategory() {
  const { slug }: any = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(allProducts);
  const [isOpen, setIsOpen] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const { width } = useWindowSize();

  const productsPerPage = 9;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const mdView = 1060;

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpenSize = (product: any) => {
    setSelectedProduct(product);
    setIsSize(true);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const startIndex = (newPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    setProducts(allProducts.slice(startIndex, endIndex));
  };

  return (
    <>
      <div
        className={`flex flex-col space-y-4 pt-7 pb-6 bg-white ${styles.paddingX}`}
      >
        <p className="capitalize text-slate-700">
          {' '}
          <span className="text-slate-500">home</span> &gt; {slug}{' '}
        </p>
        <div className="flex space-x-0 md:space-x-5">
          <div className="md:w-1/4 hidden md:block">
            {' '}
            <FilterSidebar
              toggle={() => null}
              onClose={() => null}
              isOpen={isOpen}
            />
          </div>
          <div className="w-full md:w-3/4 flex flex-col">
            <div className="flex justify-between mb-2">
              <div className="flex justify-between items-center w-full">
                <h1 className="font-bold text-black text-lg capitalize">
                  {slug}
                </h1>
                <button
                    className="border-none outline-none bg-transparent flex md:hidden rounded-lg px-2 py-1 justify-center items-center  hover:bg-gray-200"
                    onClick={handleOpen}
                >
                  <MdOutlineFilterList size={22}/>
                  Filter
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {products.map((item: any) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    openSize={() => handleOpenSize(item)}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Dialog
        visible={isOpen && width < mdView}
        className="bottom-0 top-0 right-0 left-0"
      >
        <FilterSidebar
          toggle={() => setIsOpen(!isOpen)}
          onClose={handleClose}
          isOpen={isOpen}
        />
      </Dialog>
      <Dialog
        visible={isSize}
        className="bottom-0 top-0 right-0 left-0"
      >
        <SizeCard close={() => setIsSize(false)} product={selectedProduct} />
      </Dialog>
    </>
  );
}

export default ProductCategory;

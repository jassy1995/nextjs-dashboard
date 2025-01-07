'use client';
import React, {useMemo, useState} from 'react';
import { useParams } from 'next/navigation';
import styles from '@/util/style';
import FilterSidebar from '@/components/global/FilterSidebar';
import ItemCard from '@/components/global/ItemCard';
import Pagination from '@/components/global/Pagination';
import Footer from '@/components/Footer';
import { MdOutlineFilterList } from 'react-icons/md';
import useWindowSize from '@/hooks/useWindowSize';
import Dialog from '@/components/global/Dialog';
import SizeCard from '@/components/global/SizeCard';
import {useGlobalStore} from "@/stores/global";
import {useSearchProducts} from "@/api/product";
import SearchProductSkeleton from "@/components/global/skelotons/SearchProductSkeleton";
import NoData from "@/components/global/NoData";

function ProductCategory() {
  const { slug }: any = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [mdView] = useState(1060);
  const cursor = useGlobalStore((state:any) => state.cursor);
  const filterParams = useGlobalStore((state:any) => state.filterParams);
  const setCursor = useGlobalStore((state:any) => state.setCursor);

  const { data = {}, isPending } = useSearchProducts({
    ...filterParams,
    page:currentPage,
    cursor,pageSize:6,
    setCursor
  });

  const { width } = useWindowSize();

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
  };

  const title = useMemo(()=>{
    return slug?.includes('search') ? 'All' : 'Products'
  },[slug])

  return (
    <>
      <div
        className={`flex flex-col space-y-4 pt-7 pb-6 bg-white ${styles.paddingX}`}
      >
        {isPending? (
            <div className="h-5 w-20 bg-gray-200 animate-pulse"/>
        ): (
            <p className="capitalize text-slate-700">
              {' '}
              <span className="text-slate-500">home</span> &gt; {title}{' '}
            </p>
        )}
        <div className="flex space-x-0 md:space-x-5">
          <div className="md:w-1/4 hidden md:block">
            {' '}
            <FilterSidebar
              toggle={() => null}
              onClose={() => null}
              isOpen={isOpen}
            />
          </div>
          <>
          { isPending ? (
              <SearchProductSkeleton/>
              ) : (
                  <div className="w-full md:w-3/4 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div className="flex justify-between items-center w-full">
                        <h1 className="font-bold text-black text-md capitalize">
                          {title}
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
                      {data?.products?.length > 0 ? (
                          <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                              {data.products.map((item: any, i: number) => (
                                  <ItemCard
                                      key={i}
                                      item={item}
                                      openSize={() => handleOpenSize(item)}
                                  />
                              ))}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={data?.pages}
                                onPageChange={handlePageChange}
                            />
                          </>
                      ) : (
                        <NoData text="No record" className='my-20' />
                        )}
                    </div>
                  </div>
          )}
          </>
        </div>
      </div>
      <Footer/>
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
        <SizeCard close={() => setIsSize(false)} product={selectedProduct}/>
          </Dialog>
        </>
        );
        }

        export default ProductCategory;

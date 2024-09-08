'use client';
import React, { useState} from 'react';
import { useParams } from 'next/navigation';
import styles from '@/util/style';
import FilterSidebar from '@/components/global/FilterSidebar';
import Link from 'next/link';
import ItemCard from '@/components/global/ItemCard';
import allProducts from '@/lib/products';
import Pagination from '@/components/global/Pagination';
import Footer from '@/components/Footer';
import { MdOutlineFilterList } from "react-icons/md";
import useWindowSize from '@/hooks/useWindowSize';
import Dialog from '@/components/global/Dialog';


function ProductCategory() {
    const { slug }: any = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts]= useState(allProducts);
    const [isOpen, setIsOpen] = useState(false);

    const { width } = useWindowSize();

    const productsPerPage = 9;
    const totalPages = Math.ceil(allProducts.length/productsPerPage);
    const mdView = 1060;

    const handleOpen=()=>{
      setIsOpen(true)
    }
    const handleClose=()=>{
      setIsOpen(false)
    }

    const handlePageChange = (newPage:number) => {
        setCurrentPage(newPage);
        const startIndex = (newPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
      
        setProducts(allProducts.slice(startIndex, endIndex));
      };


  return (
    <>
    <div className={`flex flex-col space-y-5 pt-10 bg-white ${styles.paddingX}`}>
        <p className='capitalize text-slate-700'> <span className='text-slate-500'>home</span> &gt; {slug} </p>
        <div className='flex space-x-0 md:space-x-5'>
            <div className='md:w-1/4 hidden md:block'> <FilterSidebar toggle={()=>null} onClose={()=> null }  isOpen={isOpen}/></div>
            <div className='w-full md:w-3/4 flex flex-col'>
             <div className='flex justify-between'>
                <div className='flex items-center space-x-3'>
                    <h1 className='font-bold text-black text-xl capitalize'>{slug}</h1>
                    <button className='border-none outline-none bg-transparent block md:hidden' onClick={handleOpen}>
                        <MdOutlineFilterList  size={25}/>
                    </button>
                </div>
                    <p className='text-sm text-gray-500 flex items-center space-x-2'> <span className='hidden ss:block'>Showing</span> <strong>1-10 of 100 </strong><span className='hidden ss:block'>Products</span></p>
             </div>
             <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
                    {
                        products.map((item:any)=>(
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <ItemCard item={item}/>
                            </Link>
                        ))
                    }
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
             </div>
            </div>
        </div>
        <Footer/>
    </div>

    <Dialog visible={isOpen && width < mdView}>
       <FilterSidebar toggle={()=>setIsOpen(!isOpen)} onClose={handleClose} isOpen={isOpen}/> 
    </Dialog>
    </>
  )
}

export default ProductCategory
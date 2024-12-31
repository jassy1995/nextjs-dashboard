'use client';
import { FC } from 'react';
import Slider from './global/Slider';
import products from '@/lib/products';
import ItemGallery from './global/ItemGallery';
import {useGetNewArrivals, useGetTopSelling} from "@/api/product";

const Catalogue: FC = () => {
  const { data:{ product:newArrivals = [] } = {}, isLoading: isNewArrivalLoading } = useGetNewArrivals({limit: 7});
  const { data: { product:topSelling = [] } = {}, isLoading: isTopSellingLoading } = useGetTopSelling({limit: 7});
  return (
    <div className={`w-full bg-white py-12 z-0`}>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-6">
          <h1 className="text-lg sm:text-2xl font-bold uppercase text-center">
            new arrivals
          </h1>
          <Slider items={newArrivals} loading={isNewArrivalLoading } />
        </div>
        <span className="border-b border-slate-100"></span>
        <div className="flex flex-col space-y-6">
          <h1 className="text-lg sm:text-2xl font-bold uppercase text-center">
            top sellings
          </h1>
          <Slider items={topSelling} loading={isTopSellingLoading } />
        </div>
        <div className="flex flex-col space-y-8 bg-[#F0F0F0] rounded-lg px-5 md:px-8 pb-12 pt-10">
          <h1 className="text-lg sm:text-2xl font-bold uppercase text-center">
            browse by dress style
          </h1>
          <ItemGallery />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

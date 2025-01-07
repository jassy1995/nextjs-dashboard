'use client';
import React, { useState, FC } from 'react';
import { MdOutlineFilterList } from 'react-icons/md';
import { formatNaira } from '@/util/global';
import PriceRangeSlider from './PriceRangeSlider';
import RadioButtonGroup from './buttons/RadioButtonGroup';
import { IoIosClose } from 'react-icons/io';
import useWindowSize from "@/hooks/useWindowSize";
import {useGetFilterOptions} from "@/api/product";
import FilterOptionSkeleton from "@/components/global/skelotons/FilterOptionSkeleton";
import StarRatingGroup from "@/components/global/buttons/StarRatingGroup";
import {useGlobalStore} from "@/stores/global";

type FilterSidebarProps = {
  onClose: () => void;
  toggle: () => void;
  isOpen: boolean;
};

const FilterButton = ({handleFilter}:any) => {
  return (
      <div className='mx-5'>
        <button
            onClick={handleFilter}
            className="w-full py-2 bg-black text-white rounded-lg"
        >
          Apply Filter
        </button>
      </div>
  )
}

const FilterSidebar: FC<FilterSidebarProps> = ({onClose, toggle, isOpen}) => {
  const {data: {options = {}} = {}, isLoading} = useGetFilterOptions();
  const [category, setCategory] = useState('any');
  const [style, setStyle] = useState('any');
  const [brand, setBrand] = useState('any');
  const [rating, setRating] = useState('any');
  const [value, setValue] = useState({min:0, max:0});

  const setFilterParam = useGlobalStore((state:any) => state.setFilterParam);

  const {width} = useWindowSize();

  const handleFilter = () => {
    const payload = {
      category: category,
      style: style,
      brand: brand,
      rating: rating,
      price:`${value?.min || options?.price.min}-${value.max || options?.price.max}`,
      query:""
    };
    setFilterParam(payload);
    onClose();
  };

  return (
      <>
          {isLoading ? (
              <FilterOptionSkeleton/>
          ): (
              <div
                  className="max-h-[96%] lg:max-h-[100%] border-t w-full max-w-lg py-4 bg-white rounded-lg shadow-md flex flex-col space-y-3 overflow-y-auto filter-scrollbar">
                <header className="flex justify-between items-center px-6">
                  <h2 className="text-black font-medium">Filters</h2>
                  {isOpen && width < 1060 ? (
                      <IoIosClose
                          onClick={onClose}
                          className="text-xl w-6 h-6 rounded-full font-medium text-white bg-red-500 hover:bg-red-600 cursor-pointer"
                      />
                  ) : (
                      <MdOutlineFilterList
                          onClick={toggle}
                          className="text-xl text-gray-500 w-6 h-6 rounded-full cursor-pointer"
                      />
                  )}
                </header>
                <hr/>
                <FilterButton handleFilter={handleFilter} />
                <hr/>
                <div className="space-y-3 mx-5">
                  <h2 className="text-black text-sm font-medium">Category</h2>
                  <RadioButtonGroup
                      options={['any', ...options?.categories]}
                      selectedValue={category}
                      onChange={setCategory}
                  />
                </div>
                <hr/>
                <div className="space-y-3 mx-5">
                  <h2 className="text-black text-sm font-medium">Brand</h2>
                  <RadioButtonGroup
                      options={['any', ...options?.brand]}
                      selectedValue={brand}
                      onChange={setBrand}
                  />
                </div>
                <hr/>
                <div className="space-y-3 mx-5">
                  <h2 className="text-sm text-black font-medium">Dress Style</h2>
                  <RadioButtonGroup
                      options={['any', ...options?.styles]}
                      selectedValue={style}
                      onChange={setStyle}
                  />
                </div>
                <hr/>
                <div className='mx-5'>
                  <h2 className="text-sm text-black font-medium">Price</h2>
                  <PriceRangeSlider
                      min={options?.price.min}
                      max={options?.price.max}
                      step={5}
                      value={value}
                      onChange={setValue}
                  />
                  <div className="flex justify-between text-sm font-medium mt-2">
                        <span className="text-gray-500">
                          {formatNaira(value?.min || options?.price.min)?.split('.')[0]}
                        </span>
                    <span className="text-gray-500">
                          {formatNaira(value?.max || options?.price.max)?.split('.')[0]}
                        </span>
                  </div>
                </div>
                <hr/>
                <div className="space-y-3 mx-5">
                  <h2 className="text-sm text-black font-medium">Rating</h2>
                  <StarRatingGroup
                      options={['any', '5', '4', '3', '2', '1']}
                      selectedValue={rating}
                      onChange={setRating}
                  />
                </div>
                <FilterButton handleFilter={handleFilter} />
              </div>
          )}
      </>
  );
};

export default FilterSidebar;

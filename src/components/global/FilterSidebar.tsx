'use client';
import React, { useState, FC } from 'react';
import { MdOutlineFilterList } from 'react-icons/md';
import { formatNaira } from '@/util/global';
import PriceRangeSlider from './PriceRangeSlider';
import { sizes, colors, categories, specifications } from '@/lib/product-data';
import RadioButtonGroup from './buttons/RadioButtonGroup';
import { IoIosClose } from 'react-icons/io';
import ProductSize from './ProductSize';
import ProductColor from './ProductColor';

type FilterSidebarProps = {
  onClose: () => void;
  toggle: () => void;
  isOpen: boolean;
};

const FilterSidebar: FC<FilterSidebarProps> = ({ onClose, toggle, isOpen }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState(sizes[0].fullName);
  const [selectedSpecification, setSpecification] = useState(specifications[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [value, setValue] = useState({ min: 20000, max: 10000000 });

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleFilter = () => {
    const payload = {
      color: selectedColor,
      size: selectedSize,
      spec: selectedSpecification,
      category: selectedCategory,
      min_price: value.min,
      max_price: value.max,
    };
    console.log(payload);
    onClose();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-slate-100 flex flex-col space-y-3 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-medium">Filters</h2>
        {isOpen ? (
          <IoIosClose
            onClick={onClose}
            className="text-xl w-7 h-7 rounded-full hover:bg-gray-200 cursor-pointer"
          />
        ) : (
          <MdOutlineFilterList
            onClick={toggle}
            className="text-xl text-gray-500 w-7 h-7 rounded-full cursor-pointer"
          />
        )}
      </div>
      <hr />
      <div className="space-y-3">
        <RadioButtonGroup
          options={specifications}
          selectedValue={selectedSpecification}
          onChange={setSpecification}
        />
      </div>
      <hr />
      <div>
        <h2 className="text-sm text-black font-medium">Price</h2>
        <PriceRangeSlider
          min={20000}
          max={10000000}
          step={5}
          value={value}
          onChange={setValue}
        />
        <div className="flex justify-between text-sm font-medium mt-2">
          <span className="text-gray-500">
            {formatNaira(value.min)?.split('.')[0]}
          </span>
          <span className="text-gray-500">
            {formatNaira(value.max)?.split('.')[0]}
          </span>
        </div>
      </div>
      {/* <hr />
      <div className="space-y-3">
        <h2 className="text-black text-sm font-medium">Colors</h2>
        <ProductColor
          selectedColor={selectedColor}
          handleColorSelect={handleColorSelect}
        />
      </div> */}
      <hr />
      <div className="space-y-3">
        <h2 className="text-black text-sm font-medium">Size</h2>
        <ProductSize
          selectedSize={selectedSize}
          handleSizeSelect={handleSizeSelect}
          className="grid grid-cols-3 gap-4"
        />
      </div>
      <hr />
      <div className="space-y-3">
        <h2 className="text-sm text-black font-medium">Dress Style</h2>
        <RadioButtonGroup
          options={categories}
          selectedValue={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <button
        onClick={handleFilter}
        className="w-full py-2 bg-black text-white rounded-lg"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;

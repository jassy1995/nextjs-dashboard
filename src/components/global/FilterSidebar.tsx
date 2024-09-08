'use client';
import React, { useState, FC } from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { MdOutlineFilterList } from "react-icons/md";
import ColorButton from './buttons/ColorButton';
import { formatNaira } from '@/util/global';
import PriceRangeSlider from './PriceRangeSlider';
import ActionButton from './buttons/ActionButton';
import { sizes, colors, categories, specifications } from "@/lib/product-data"
import RadioButtonGroup from './buttons/RadioButtonGroup';
import { IoIosClose } from "react-icons/io";

type FilterSidebarProps = {
  onClose:()=>void;
  toggle:()=>void;
  isOpen:boolean;
};

const FilterSidebar:FC<FilterSidebarProps> = ({onClose, toggle, isOpen}) => {

  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState(sizes[0].fullName);
  const [selectedSpecification, setSpecification] = useState(specifications[0]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [value, setValue] = useState({ min: 20000, max: 10000000 });
  
  const handleColorSelect = (color:string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size:string) => {
    setSelectedSize(size);
  };

  const handleFilter=()=>{
   const payload = {
      color:selectedColor,
      size:selectedSize,
      spec:selectedSpecification,
      category:selectedCategory,
      min_price:value.min,
      max_price:value.max
   }
   console.log(payload)
   onClose();

  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-slate-100 flex flex-col space-y-3 w-full">
      <div className='flex justify-between items-center'>
        <h2 className="text-black font-medium">Filters</h2>
          { isOpen ? <IoIosClose onClick={onClose} className='text-xl w-7 h-7 rounded-full hover:bg-gray-200 cursor-pointer'/> 
          : <MdOutlineFilterList onClick={toggle} className='text-xl text-gray-500 w-7 h-7 rounded-full cursor-pointer'/>
          }
      </div>
      <hr />
      <div className="space-y-3">
        <RadioButtonGroup 
          options={specifications} 
          selectedValue={selectedSpecification} 
          onChange={setSpecification}/>
      </div>
      <hr />
      <div>
        <h2 className="text-sm text-black font-medium">Price</h2>
        <PriceRangeSlider min={20000} max={10000000} step={5} value={value} onChange={setValue} />
        <div className="flex justify-between text-sm font-medium mt-2">
          <span className='text-gray-500'>{formatNaira(value.min)?.split('.')[0]}</span>
          <span className='text-gray-500'>{formatNaira(value.max)?.split('.')[0]}</span>
        </div>
      </div>
      <hr />
        <div className='space-y-3'>
          <h2 className="text-black text-sm font-medium">Colors</h2>  
          <div className="grid grid-cols-6 gap-x-4 gap-y-3">
            {colors.map((color,i) => (
               <ColorButton key={i} handler={() => handleColorSelect(color.name)} className={`w-6 h-6 rounded-full ${color.value} ${color.name ==='white'? 'border border-slate-200' : ''}`}>
                  {color.name=== selectedColor ? 
                    <IoIosCheckmark className={`w-6 h-6 rounded-full ${selectedColor==='white' ? 'text-black' : 'text-white'}`}/>
                    : null
                  }
               </ColorButton>
            ))}
          </div>
        </div>
        <hr />
        <div className='space-y-3'>
          <h2 className="text-black text-sm font-medium">Size</h2>
          <div className="grid grid-cols-3 gap-4">
            {sizes.map((size,i) => (
               <ActionButton key={i} handler={() => handleSizeSelect(size.fullName)} className={`w-20 h-6 rounded-full text-sm ${size.fullName === selectedSize ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 '}`}>
                  {size.fullName}
               </ActionButton>
            ))}
          </div>
        </div>
        <hr />
        <div className='space-y-3'>
          <h2 className="text-sm text-black font-medium">Dress Style</h2>
          <RadioButtonGroup options={categories} selectedValue={selectedCategory} onChange={setSelectedCategory}/>
        </div>

        <button onClick={handleFilter} className="w-full py-2 bg-black text-white rounded-lg">Apply Filter</button>
      </div>
  );
};

export default FilterSidebar;

import { FC } from 'react';
import { colors } from '@/lib/product-data';
import React from 'react';
import ColorButton from './buttons/ColorButton';
import { IoIosCheckmark } from 'react-icons/io';

type ProductColorProps = {
  selectedColor: string;
  handleColorSelect: (color: string) => void;
};

const ProductColor: FC<ProductColorProps> = ({
  selectedColor,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-x-4 gap-y-3">
      {colors.map((color, i) => (
        <ColorButton
          key={i}
          handler={() => handleColorSelect(color.name)}
          className={`w-6 h-6 rounded-full ${color.value} ${color.name === 'white' ? 'border border-slate-200' : ''}`}
        >
          {color.name === selectedColor ? (
            <IoIosCheckmark
              className={`w-6 h-6 rounded-full ${selectedColor === 'white' ? 'text-black' : 'text-white'}`}
            />
          ) : null}
        </ColorButton>
      ))}
    </div>
  );
};

export default ProductColor;

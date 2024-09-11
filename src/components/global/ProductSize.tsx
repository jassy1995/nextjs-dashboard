import { FC } from 'react';
import ActionButton from './buttons/ActionButton';
import { sizes } from '@/lib/product-data';

type ProductSizeProps = {
  selectedSize: string;
  handleSizeSelect: (size: string) => void;
  className?: string;
};

const ProductSize: FC<ProductSizeProps> = ({
  selectedSize,
  handleSizeSelect,
  className,
}) => {
  return (
    <div className={className}>
      {sizes.map((size, i) => (
        <ActionButton
          key={i}
          handler={() => handleSizeSelect(size.fullName)}
          className={`w-20 h-6 rounded-full text-sm ${size.fullName === selectedSize ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 '}`}
        >
          {size.fullName}
        </ActionButton>
      ))}
    </div>
  );
};

export default ProductSize;

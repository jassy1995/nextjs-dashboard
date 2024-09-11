import Image from 'next/image';
import { FC } from 'react';
import Rating from './Rating';
import { formatNaira, shorttenString } from '@/util/global';
import Link from 'next/link';
import ActionButton from './buttons/ActionButton';

type ItemCardProps = {
  item: any;
  openSize?: () => void;
};

const ItemCard: FC<ItemCardProps> = ({ item, openSize }) => {
  return (
    <div
      className={`bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto border border-slate-50 shadow-md  hover:shadow-lg transition duration-200 h-full ${openSize ? '' : 'my-2'}`}
    >
      <Link href={`/product/${item.id}`} className="cursor-pointer">
        <Image src={item.image} alt={item.name} width={300} height={250} />
      </Link>
      <div className="w-full flex flex-col space-y-1 mt-4">
        <h1 className="font-bold text-md">
          {item.name.length > 20 ? shorttenString(item.name, 20) : item.name}
        </h1>
        <div
          className={`flex flex-col ${openSize ? 'space-y-3 ' : 'space-y-1'}`}
        >
          <Rating rating={item.rating} />
          <div className="flex justify-between items-center">
            <div className="text-gray-900 text-[16px] font-medium">
              {formatNaira(item.price)}
            </div>
            {openSize && (
              <ActionButton
                handler={openSize}
                className="bg-gray-100 text-gray-900 text-sm w-auto font-medium h-[26px] rounded-full hover:bg-slate-800 hover:text-white capitalize"
              >
                Add to cart
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

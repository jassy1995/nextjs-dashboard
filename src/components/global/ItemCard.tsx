import Image from 'next/image';
import { FC } from 'react';
import Rating from './Rating';
import { formatNaira, shorttenString } from '@/util/global';

type ItemCardProps = {
    item: any;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
    return (
        <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] my-2 mx-auto cursor-pointer hover:border border-slate-50  hover:shadow-md transition duration-200 h-full'>
            <Image src={item.image} alt={item.name} width={300} height={250} />
            <div className='w-full flex flex-col space-y-1 mt-4'>
                <h1 className='font-bold text-md'>{item.name.length > 20 ? shorttenString(item.name, 20) : item.name}</h1>
                <Rating rating={item.rating} />
                <div className='text-gray-700 text-sm'>{formatNaira(item.price)}</div>
            </div>

        </div>
    );
};

export default ItemCard;

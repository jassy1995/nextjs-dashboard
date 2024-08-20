import Image from 'next/image';
import { FC } from 'react';
import Rating from './Rating';
import { formatNaira } from '@/util/global';

type ItemCardProps = {
    item: any;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
    return (
        <div className='rounded-lg shadow-sm flex flex-col justify-center items-center space-y-5 w-full h-[350px] sm:h-[400px] bg-white py-4'>
            <Image src={item.image} alt={item.name} width={250} height={180} priority />
            <div className='w-full pl-6 flex flex-col space-y-1'>
                <h1 className='font-bold text-md'>{item.name}</h1>
                <Rating rating={item.rating} />
                <div className='text-gray-700 text-sm'>{formatNaira(item.price)}</div>
            </div>

        </div>
    );
};

export default ItemCard;

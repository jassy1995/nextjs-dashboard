import Image from 'next/image';
import { FC } from 'react';
import Rating from './Rating';
import { formatNaira, shorttenString } from '@/util/global';

type ItemCardProps = {
    item: any;
};

const ItemCard: FC<ItemCardProps> = ({ item }) => {
    return (
        <div className='rounded-lg flex flex-col justify-center items-center space-y-5 w-full h-[410px] py-5 px-2'>
            <Image src={item.image} alt={item.name} width={500} height={500} />
            <div className='w-full flex flex-col space-y-1'>
                <h1 className='font-bold text-md'>{item.name.length > 30 ? shorttenString(item.name, 25) : item.name}</h1>
                <Rating rating={item.rating} />
                <div className='text-gray-700 text-sm'>{formatNaira(item.price)}</div>
            </div>

        </div>
    );
};

export default ItemCard;

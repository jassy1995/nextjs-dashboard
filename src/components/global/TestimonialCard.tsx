import { FC } from 'react';
import Rating from './Rating';
import { IoMdCheckmarkCircle } from "react-icons/io";

type TestimonyCardProps = {
    item: any;
};

const TestimonialCard: FC<TestimonyCardProps> = ({ item }) => {
    return (
        <div className='border border-slate-200  rounded-lg flex flex-col justify-center items-cente space-y-2 w-full p-4'>
            <Rating rating={item.rating} />
            <div className='flex items-center space-x-2 '>
                <h1 className='font-medium text-md'>{item.name}</h1>
                <IoMdCheckmarkCircle className='text-green-500 text-xl' />
            </div>
            <div className='text-gray-500 text-sm'>{item.description}</div>
        </div>
    );
};

export default TestimonialCard;

import { FC } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import {formatDate} from "@/util/global";

type RatingProps = {
    rating: number;
    numReviews?:boolean;
    date?:string;
};

const Rating: FC<RatingProps> = ({ rating, numReviews, date }) => {
    const totalStars = 5;

    const safeRating = isNaN(rating) ? 0 : Math.min(Math.max(rating, 0), totalStars);

    const filledStars = Math.floor(safeRating); // Full stars
    const hasHalfStar = safeRating % 1 !== 0; // Check if there's a half star
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0); // Empty stars

    return (
        <div className="flex justify-between">
            <div className="flex space-x-2">
                {[...Array(Math.max(filledStars, 0))].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 " />
                ))}

                {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {[...Array(Math.max(emptyStars, 0))].map((_, index) => (
                    <FaRegStar key={index} className="text-yellow-500" />
                ))}

                {numReviews ?
                    <span className='text-sm ml-1'>({numReviews} verified ratings)</span>
                    :
                    <span className='text-sm ml-1'>({rating}/5)</span>
                }
            </div>
            {date && <div className='text-sm'>{formatDate(date)}</div>}
        </div>
    );
};

export default Rating;

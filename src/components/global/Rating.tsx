import { FC } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type RatingProps = {
    rating: number;
};

const Rating: FC<RatingProps> = ({ rating }) => {
    const totalStars = 5;

    const safeRating = isNaN(rating) ? 0 : Math.min(Math.max(rating, 0), totalStars);

    const filledStars = Math.floor(safeRating); // Full stars
    const hasHalfStar = safeRating % 1 !== 0; // Check if there's a half star
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0); // Empty stars

    return (
        <div className="flex">
            {[...Array(Math.max(filledStars, 0))].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
            {[...Array(Math.max(emptyStars, 0))].map((_, index) => (
                <FaRegStar key={index} className="text-yellow-500" />
            ))}
        </div>
    );
};

export default Rating;

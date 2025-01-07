import React, { FC } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type StarRatingGroupProps = {
    options: string[];
    selectedValue: string;
    onChange: (value: string) => void;
};

const StarRatingGroup: FC<StarRatingGroupProps> = ({ options, selectedValue, onChange }) => {
    const renderStars = (rating:string) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <FaStar
                    key={index}
                    size={16}
                    className={`${
                        index < +rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-none text-gray-300'
                    }`}
                />
            ));
    };

    return (
        <div className="text-gray-500">
            {options.map((option:string) => (
                <div key={option} className="mb-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="radio"
                            value={option}
                            checked={selectedValue === option}
                            onChange={(e) => onChange(e.target.value)}
                            className="cursor-pointer"
                            style={{accentColor: 'black'}}
                        />
                        <span className="flex items-center space-x-1">
                            {option === 'any' ? (
                                <span className="capitalize text-sm">Any</span>
                            ) : (
                                renderStars(option)
                            )}
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default StarRatingGroup;
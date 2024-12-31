import React, { FC, useState} from 'react';
import { FaStar } from 'react-icons/fa';
import { useUserStore } from '@/stores/user';
import { useCreateReview } from '@/api/review';
import { Spinner } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import {IoIosClose} from "react-icons/io";

type ReviewFormProps = {
    productId: string;
    close: () => void;
};

type FormValues = {
    rating: number;
    comment: string;
};

const ReviewForm: FC<ReviewFormProps> = ({ productId, close }) => {
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            rating: 0,
            comment: '',
        },
    });

    const [successRes, setSuccessRes] = useState('');
    const [errorRes, setErrorRes] = useState('');

    const { user } = useUserStore((state) => state);
    const { mutateAsync: createReview, isPending: loading } = useCreateReview({
        userId: user?._id,
        productId,
    });

    const onSubmit = async (data: FormValues) => {
        const { rating, comment } = data;
        if (successRes || errorRes) handleMessageReset();
        try {
            await createReview({ rating, comment });
            setValue('rating', 0);
            setValue('comment', '');
            setSuccessRes('Thank you for your review!');
            setTimeout(() => {
                setSuccessRes('');
                close();
            }, 3000);
        } catch (e: any) {
            console.error(e);
            setErrorRes('Operation failed!');
        }
    };

    const handleMessageReset = () => {
        if (successRes) setSuccessRes('');
        if (errorRes) setErrorRes('');
    };

    const handleClose = () => {
        if (successRes || errorRes) handleMessageReset();
        close();
    };

    return (
        <div className="w-full max-w-lg pt-4 pb-2 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center border-b px-6 py-4">
                <h1 className='text-slate-900 text-lg font-medium'>Review</h1>
                <IoIosClose
                    onClick={handleClose}
                    className="text-xl w-6 h-6 rounded-full font-medium text-white bg-red-500 hover:bg-red-600 cursor-pointer"
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
                {successRes && (
                     <div className="px-4 py-3 bg-green-100 text-green-900 rounded-md">{successRes}</div>
                )}
                {errorRes && (
                    <div className="px-4 py-3 bg-red-100 text-red-900 rounded-md">{errorRes}</div>
                )}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {errors.rating ? (
                            <span className="text-red-500 text-sm">{errors.rating.message}</span>
                        ) : (
                            <span>Please rate the product</span>
                        )}
                    </label>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{
                            required: 'Please select a rating',
                            validate: (value) => {
                                return value > 0 || 'Rating must be greater than zero';
                            },
                            pattern: {
                                value: /^[1-5]$/,
                                message: 'Rating must be at least 1',
                            },
                        }}
                        render={({field}) => (
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className="p-1 hover:scale-110 transition-transform"
                                        onMouseEnter={() => field.onChange(star)}
                                        onMouseLeave={() => field.onChange(field.value)}
                                        onClick={() => field.onChange(star)}
                                    >
                                        <FaStar
                                            size={22}
                                            className={`${
                                                star <= field.value
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    />
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                        {errors.comment ? (
                            <span className="text-red-500 text-sm">{errors.comment.message}</span>
                        ) : (
                            <span>Your Review</span>
                        )}
                    </label>

                    <Controller
                        name="comment"
                        control={control}
                        rules={{required: 'Please write a comment'}}
                        render={({field}) => (
                            <textarea
                                id="comment"
                                rows={4}
                                className="w-full p-2 border border-gray-300 outline-0 rounded-md focus:border-blue-500"
                                placeholder="Tell us about your experience..."
                                {...field}
                            />
                        )}
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="w-full font-medium py-3 px-4 focus:outline-none focus:shadow-outline bg-black bg-opacity-90 text-white rounded-lg hover:bg-slate-900 flex justify-center items-center space-x-3 disabled:opacity-95 disabled:cursor-not-allowed"
                >
                    {loading && <Spinner size="sm" color="white"/>}
                    <span>Submit Review</span>
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;

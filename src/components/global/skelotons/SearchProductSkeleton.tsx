import React from 'react';

const ProductListSkeleton = () => {
    return (
        <div className="w-full md:w-3/4 flex flex-col">
            <div className="flex justify-between mb-2">
                <div className="flex justify-between items-center w-full">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-20 bg-gray-200 rounded md:hidden animate-pulse" />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
                            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListSkeleton;
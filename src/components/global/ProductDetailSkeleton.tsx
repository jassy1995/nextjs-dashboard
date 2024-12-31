import React, {FC} from 'react';
import styles from "@/util/style";
const ProductDetailSkeleton:FC = () => {
    return (
        <div className={`flex flex-col space-y-10 pt-7 pb-10 bg-white ${styles.paddingX}`}>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-5 md:space-y-0">
                <div className="flex space-x-5 ss:space-x-8">
                    <div className="flex flex-col space-y-6">
                        <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-md"></div>
                        <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-md"></div>
                        <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-md"></div>
                    </div>
                    <div className="w-80 h-72 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 justify-between">
                    <div className="flex flex-col space-y-1">
                        <div className="w-48 h-6 bg-gray-200 animate-pulse rounded"></div>
                        <div className="w-36 h-4 bg-gray-200 animate-pulse rounded"></div>
                        <div className="w-32 h-6 bg-gray-200 animate-pulse rounded"></div>
                        <div className="w-full h-20 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    <hr/>
                    <div className="flex flex-col space-y-3">
                        <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-3 w-full sm:max-w-[500px]">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-20 h-6 bg-gray-200 animate-pulse rounded-full"></div>
                            ))}
                        </div>
                    </div>
                    <hr/>
                    <div className="w-full sm:w-[200px] h-9 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
            </div>
            <hr/>
            <div className="flex flex-col space-y-5">
                <div className="flex items-center justify-between">
                    <div className="w-40 h-6 bg-gray-200 animate-pulse rounded"></div>
                    <div className="w-32 h-7 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-full h-36 bg-gray-200 animate-pulse rounded-md"></div>
                    ))}
                </div>
                <div className="text-center">
                    <div className="w-32 h-7 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
            </div>
            <div>
                <div className="w-full h-6 bg-gray-200 animate-pulse rounded text-center"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-full h-36 bg-gray-200 animate-pulse rounded-md"></div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default ProductDetailSkeleton
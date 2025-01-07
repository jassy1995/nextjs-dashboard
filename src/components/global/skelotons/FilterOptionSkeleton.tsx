import React from 'react';

const FilterOptionSkeleton = () => {
    const pulseClass = "animate-pulse bg-gray-200 rounded";
    return (
        <div className="max-h-[96%] w-full max-w-lg pt-4 pb-2 bg-white rounded-lg shadow-md flex flex-col space-y-3 overflow-y-auto">
            <div className="flex justify-between items-center px-6">
                <div className={`${pulseClass} h-6 w-20`} />
                <div className={`${pulseClass} w-6 h-6 rounded-full`} />
            </div>
            <hr />
            <div className="space-y-3 mx-5">
                <div className={`${pulseClass} h-4 w-16`} />
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={`cat-${i}`} className="flex items-center space-x-2">
                            <div className={`${pulseClass} w-4 h-4 rounded-full`} />
                            <div className={`${pulseClass} h-4 w-24`} />
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="space-y-3 mx-5">
                <div className={`${pulseClass} h-4 w-16`} />
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={`brand-${i}`} className="flex items-center space-x-2">
                            <div className={`${pulseClass} w-4 h-4 rounded-full`} />
                            <div className={`${pulseClass} h-4 w-24`} />
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="mx-5">
                <div className={`${pulseClass} h-4 w-16 mb-4`} />
                <div className={`${pulseClass} h-2 w-full rounded-full mb-4`} />
                <div className="flex justify-between">
                    <div className={`${pulseClass} h-4 w-20`} />
                    <div className={`${pulseClass} h-4 w-20`} />
                </div>
            </div>
            <hr />
            <div className="space-y-3 mx-5">
                <div className={`${pulseClass} h-4 w-16`} />
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={`size-${i}`} className={`${pulseClass} h-8 w-full`} />
                    ))}
                </div>
            </div>

            <hr />

            <div className="space-y-3 mx-5">
                <div className={`${pulseClass} h-4 w-24`} />
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={`style-${i}`} className="flex items-center space-x-2">
                            <div className={`${pulseClass} w-4 h-4 rounded-full`} />
                            <div className={`${pulseClass} h-4 w-24`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-5">
                <div className={`${pulseClass} w-full h-10 rounded-lg`} />
            </div>
        </div>
    );
};

export default FilterOptionSkeleton;
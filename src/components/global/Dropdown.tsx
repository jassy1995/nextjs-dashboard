'use client'
import { FC, useState } from 'react';

type DropdownProps = {
    selected: string;
    isOpen: boolean;
    handleSelect: (item: string) => void;
    handleToggle: () => void;
};

const Dropdown: FC<DropdownProps> = ({ selected, isOpen, handleSelect, handleToggle }) => {

    const [options] = useState(['latest', 'oldest']);

    const handleOption = (item: string) => {
        handleSelect(item);
    };

    return (
        <div className= "relative inline-block text-left" >
            <button onClick={ handleToggle } className = "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"> { selected } </button>
            {isOpen && (
                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role = "menu" aria-rientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <div key= { option }
                                className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick = {() => handleOption(option)}>
                                    {option}
                                </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
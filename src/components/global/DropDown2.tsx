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
        <button onClick={ handleToggle } className = "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" > { selected } </button>
            </div>
    );
}

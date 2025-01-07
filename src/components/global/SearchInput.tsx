'use client'
import React, { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { FaSearch } from 'react-icons/fa';
import {useGlobalStore} from "@/stores/global";

type SearchInputProps = {
    placeholder?: string;
    onSearch: (value: string) => void;
    debounceDelay?: number;
    className?: string;

}

const SearchInput: React.FC<SearchInputProps> = (props) => {
    const { placeholder = 'Search...', onSearch, debounceDelay = 400, className } = props;

    const setFilterParam = useGlobalStore((state:any) => state.setFilterParam);
    const filterParams = useGlobalStore((state:any) => state.filterParams);

    const [value, setValue] = useState(filterParams?.query);
    const debouncedValue = useDebounce(value, debounceDelay);

    useEffect(() => {
        if (debouncedValue) {
            onSearch(debouncedValue);
        }
    }, [debouncedValue, onSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setFilterParam({query:''});
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && value.trim()) {
            onSearch(value.trim());
        }
    };

    return (
        <div className={`w-full  sm:w-1/2 lg:w-1/3 flex items-center border px-3 py-2 shadow-ss ${className}`}>
            <FaSearch className="text-gray-400 mr-2" />
            <input
                type="text"
                className="flex-grow border-none outline-none"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export default SearchInput;

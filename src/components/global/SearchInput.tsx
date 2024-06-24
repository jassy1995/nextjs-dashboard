import React, { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { FaSearch } from 'react-icons/fa';

type SearchInputProps = {
    placeholder?: string;
    onSearch: (value: string) => void;
    debounceDelay?: number;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', onSearch, debounceDelay = 500 }) => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, debounceDelay);

    useEffect(() => {
        if (debouncedValue) {
            onSearch(debouncedValue);
        }
    }, [debouncedValue, onSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className="w-full sm:w-1/3 flex items-center border rounded-full px-3 py-2 shadow-ss">
            <FaSearch className="text-gray-400 mr-2" />
            <input
                type="text"
                className="flex-grow border-none outline-none"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;

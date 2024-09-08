'use client';
import React, { FC } from 'react';

type RadioButtonGroupProps = {
    options: string[];
    selectedValue: string;
    onChange:(value:any)=>void;
};

const RadioButtonGroup:FC<RadioButtonGroupProps> = ({ options, selectedValue, onChange }) => {
  return (
    <div className='text-gray-500'>
      {options.map((option:string) => (
        <div key={option} className="mb-2">
          <label className='flex items-center space-x-2'>
            <input
              type="radio"
              value={option}
              checked={selectedValue === option}
              onChange={(e) => onChange(e.target.value)}
              style={{ accentColor: 'black'}}
              className='cursor-pointer'
            />
           <span className='capitalize text-sm'>{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;

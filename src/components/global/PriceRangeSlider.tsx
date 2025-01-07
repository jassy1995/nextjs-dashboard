'use client';
import React, { FC, useEffect } from 'react';

type PriceRangeSliderProps = {
    min: number;
    max:number;
    step:any;
    value:any;
    onChange:(value:any)=>void;
    fomatOptions?:any;
};

const PriceRangeSlider:FC<PriceRangeSliderProps> = ({ min, max, step, value, onChange }) => {
  const [minValue, setMinValue] = React.useState(min);
  const [maxValue, setMaxValue] = React.useState(max);

  useEffect(() => {
    if (value?.min > 0 && value?.max > 0) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }else{
        setMinValue(min);
        setMaxValue(max);
    }
  }, [value, min, max]);

  const handleMinChange = (e:any) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e:any) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="price-wrapper">
      <div className="price-input-wrapper">
        <input
          className="price-input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="price-input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className="price-control-wrapper">
        <div className="price-control" style={{ left: `${minPos}%` }} />
        <div className="price-rail">
          <div
            className="price-inner-rail" 
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="price-control" style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default PriceRangeSlider;

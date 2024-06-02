import React from 'react';
import './general.css';

const SelectInput = ({
    label,
    options,
    className,
    value,
    setValue
 }) => {

    const handleSelect = (event) => {
        setValue(event.target.value)
    }
    return (
      <div className={`select-input ${className}`}>
        <label>{label}
            <select value={value} onChange={handleSelect}>
              {options.map((option, index) => {
                return <option key={index} value={option.value}>{option.label}</option>
              })}
            </select>
        </label>
      </div>
    );
}

export default SelectInput;

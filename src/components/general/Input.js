import React from 'react';
import './general.css';

const Input = ({
    label,
    type,
    className,
    value,
    setValue
 }) => {

    const handleInput = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className="text-input">
            <p>
                {label}:
            </p>
            <input 
                label={label}
                type={type}
                className={className}
                value={value}
                setValue={setValue}
                onChange={handleInput} 
            />
        </div>
    );
}

export default Input;

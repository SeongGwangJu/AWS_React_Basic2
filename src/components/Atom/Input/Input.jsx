import React from 'react';

function Input({ type, name, isDisabled,
     isAutoFoucs, placeholder, onChange, onKeyUp
     }) {
        
    return (
        <>
            <input type={type}
                name={name}
                disabled={isDisabled}
                autoFocus={isAutoFoucs}
                placeholder={placeholder}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
        </>
    );
}

Input.defaultProps = {
    type: "text",
    isDisabled: false,
    isRequired: false,
    isAutoFoucs: false,
    placeholder: "",
    onChange: null,
    onKeyUp: null

}
export default Input;
import React, { useState, useEffect } from 'react';
export default function KeyPad({
    buttonWidth = 'w-full',
    buttonHeight = 'h-12',
    fontFamily = 'WooridaumR, Arial, sans-serif',
    fontSize = '1rem',
    number = () => {}

}) {
    
        const buttons = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '00', '0', '⌫'
    ];
    const onClickHandler = (e) => {
        const value = e.currentTarget.innerText;
        number(value);
    };
    return (
        <div className="flex">
            <div className={`grid grid-cols-3 ${buttonWidth} bg-white`}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={`keypad-button w-full ${buttonHeight} text-center border`}
                    onClick={onClickHandler}
                >
                    {button}
                </button>
            ))}
            </div>
            <style jsx>{`
                .keypad-button {
                    font-family: ${fontFamily};
                    font-size: ${fontSize};
                    font-weight: normal;
                }
            `}</style>
        </div>
    );
}
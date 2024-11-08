import React, { useState, useEffect } from 'react';
export default function KeyPad({
    buttonWidth = 'w-full',
    buttonHeight = 'h-12',
    fontFamily = 'WooridaumR, Arial, sans-serif',
    fontSize = '1rem',
    number = () => {}
}) {
    const [selected_number, setSelected_Number] = useState(null);
    const [sensor, setSensor] = useState(true);
        const buttons = [
        '1', '2', '3',
        '4', '5', '6',
        '7', '8', '9',
        '00', '0', '⌫'
    ];
    useEffect(() => {
        number(selected_number);
    }, [sensor]);
    const onClick = (e) => {
        const value = e.currentTarget.innerText;
        setSelected_Number(value);
        setSensor(!sensor);
    };
    return (
        <div className="flex">
            <div className={`grid grid-cols-3 ${buttonWidth} bg-white`}>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={`keypad-button w-full ${buttonHeight} text-center border`}
                    onClick={onClick}
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
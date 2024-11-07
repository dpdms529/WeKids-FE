import React, { useEffect, useState } from 'react';
export default function Modal({ isOpen, onClose, children, width = '30%', height = '70vh', translateY = '0%', delete_button = false }) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center z-50" onClick={onClose} >
            <div onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-t-3xl p-6 transform transition-transform duration-500 ease-in-out ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                } absolute bottom-0`}
                style={{ width, height, transform: `translateY(${translateY})` }}
            >
                <div className="flex justify-end items-center mb-4">
                {delete_button && <button onClick={onClose} className="text-gray-500">X</button>}
                
                </div>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
        </div>
    );
}

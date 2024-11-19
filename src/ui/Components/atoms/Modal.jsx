import React, { useEffect, useState } from 'react';
const Modal = ({ 
    isOpen,
    onClose,
    children, 
    width = 'w-[393px]', 
    height = '70vh', 
    translateY = '0%', 
    delete_button = false, 
    border='rounded-t-3xl',
    button_color='text-gray-500',
    button_isLeft = 'true'
}) => {
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
                className={`bg-white ${border}  transform transition-transform duration-500 ease-in-out ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                } absolute bottom-0 ${width}`}
                style={{ height, transform: `translateY(${translateY})` }}
            >
                <div className={`fixed ${button_isLeft ? "top-[19px] left-[19px]" : "top-[19px] right-[19px]"}`}>
                {delete_button && <button onClick={onClose} className = {`${button_color} text-R-14`}>✕</button>}
                
                </div>
                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;

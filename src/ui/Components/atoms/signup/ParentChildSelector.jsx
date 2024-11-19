import React from "react";


export default function ParentChildSelector({
        isSelected = true, 
        children,
        onClick = () => {},  
        width = "w-full", 
        height="h-20", 
        selectedColor = "bg-sky-200" }) {
        
return(
                <div className={`rounded-xl 
                ${isSelected ? `border-black ${selectedColor} shadow-xl` : "border-neutral-400 bg-white"} 
                ${width} 
                ${height} border-2 my-7 cursor-pointer`}>
                        <div onClick={onClick}>
                                {children}      
                        </div>
                </div>
        )

}
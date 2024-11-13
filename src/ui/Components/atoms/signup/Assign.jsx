"use client";

import React, {useState, useEffect} from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Assign ({ text, isChecked, onChange }){
    const [checked, setChecked] = useState(isChecked);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    const handleCheckboxChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange(newChecked);
    };

    const OpenCheckBox = () => {
        setOpen(!isOpen);
    };

    
    return(
        <div className="flex flex-col space-y-2 p-3 items-start">
            <div className="flex flex-row justify-between w-full">
                <input type="checkbox" className="ml-2" checked={checked} 
                    onChange={handleCheckboxChange}/>
                <div className="text-R-14 ml-5 flex-grow">전체 동의</div>
                <ChevronDownIcon className="text-rignt" onClick={OpenCheckBox}/>  
            </div>
            {isOpen && <a className="mx-7">{text} </a>}
        </div>     
                    
    )
            
}
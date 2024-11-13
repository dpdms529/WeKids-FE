"use client";

import React, {useState} from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Assign ({ text }){
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return(
                
                    <div className="flex flex-col space-y-2 p-3 items-start">
                        <div className="flex flex-row justify-between w-full">
                            <input type="checkbox" className="ml-2"/>
                            <div className="text-R-14 ml-5 flex-grow">전체 동의</div>
                            <ChevronDownIcon className="text-rignt" onClick={handleCheckboxChange}/>  
                        </div>
                            {isChecked && <a className="mx-7">{text} </a>}
                    </div>
    )
            
}
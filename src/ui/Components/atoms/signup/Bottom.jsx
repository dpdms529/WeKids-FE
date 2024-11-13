"use client";

import Assign from "@/src/ui/Components/atoms/signup/Assign";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import {assigndata} from "@/src/constants/assign";
import React, {useState, useEffect} from "react";



export default function Bottom ({setAllChecked}){

    const [checkedItems, setCheckedItems] = useState(Array(assigndata.length).fill(false));

    useEffect(() => {
        setAllChecked(checkedItems.every((isChecked) => isChecked));
    }, [checkedItems]);

    const handleCheckboxChange = (index, isChecked) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = isChecked;
        setCheckedItems(newCheckedItems);
    };

    return(
        <>
        <div className="px-10 py-5">
                <h2>약관동의</h2>
                <div className="border-black border-2 h-68 rounded-lg">
                    {assigndata.map((text, idx)=>(
                        <Assign key={idx} text={text} isChecked={checkedItems[idx]} 
                        onChange={(isChecked) => handleCheckboxChange(idx, isChecked)}  />
                    ))}
                </div>
            </div>
        </>
    )

}
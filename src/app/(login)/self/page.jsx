"use client";

import Top from "@/src/ui/Components/atoms/signup/Top"
import Bottom from "@/src/ui/Components/atoms/signup/Bottom"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React, { useState} from "react";


export default function Page() {
    const [topChecked, setTopChecked] = useState(false);
    const [bottomChecked, setBottomChecked] = useState(false);


    

    
    return (
        <div className="fl  ex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
            <Top setAllChecked={setTopChecked}/>
            <Bottom setAllChecked={setBottomChecked}/>
            <div className="px-10 py-5">
                <CustomButton 
                    rounded="true" 
                    className={`w-full ${(topChecked == true && bottomChecked == true)  ? "bg-main02" : "bg-stone-300"}`} 
                    disabled={!(topChecked == true && bottomChecked == true)}
                >
                    다음
                </CustomButton>
            </div>
        </div>
    );
}
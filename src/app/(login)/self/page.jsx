'use client'

import Assign from "@/src/ui/Components/atoms/signup/Assign";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import Top from "@/src/ui/Components/atoms/signup/Top"
import React from "react";
import {assigndata} from "@/src/constants/assign";




export default function Page() {
    return (
        <div className="fl  ex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
            <Top />
            <div className="px-10 py-5">
                <h2>약관동의</h2>
                <div className="border-black border-2 h-68 rounded-lg">
                    {assigndata.map((text, idx)=>(
                        <Assign idx={idx} text={text} />
                    ))}
                </div>
            </div>
            <div className="px-10 py-5">
                <CustomButton rounded = "true" className="w-full" >
                    {"다음"}
                </CustomButton>
            </div>
        </div>
    );
}
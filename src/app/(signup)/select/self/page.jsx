"use client";

import Top from "@/src/ui/components/atoms/signup/Top"
import Bottom from "@/src/ui/components/atoms/signup/Bottom"
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import toast, { Toaster } from "react-hot-toast";


export default function Page() {
    const [topChecked, setTopChecked] = useState(false);
    const [bottomChecked, setBottomChecked] = useState(false);
    const router = useRouter();

    const notify = () => {
        toast('빈칸을 채워주세요!');
      };

    return (


        <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
            <Toaster position="top-center" />   
            <Top setAllChecked={setTopChecked}/>
            <Bottom setAllChecked={setBottomChecked}/>
            <div className="px-10 py-5">
                <CustomButton 
                    rounded="true" 
                    className={`w-full ${(topChecked == true && bottomChecked == true)  ? "bg-main02" : "bg-stone-300 hover:bg-stone-300"}`} 
                    onClick={() => {
                       topChecked && bottomChecked ? router.push(urlPath.HOME) : notify()
                    }}
                >
                    다음
                </CustomButton>
            </div>
        </div>
    );
}
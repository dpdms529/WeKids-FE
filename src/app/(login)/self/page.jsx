'use client'


import Assign from "@/src/ui/Components/atoms/Assign";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React, {useState} from "react";

export default function Page() {

    const [phoneChecked, setphoneChecked] = useState(true); // 추후에 zustand로 설정 예정

    return (
        <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
            <div className="px-10 py-5">
                <h2>이메일</h2>
                <input className="rounded-lg w-full border-black border-2 p-2 mt-1"></input>
            </div>
            <div className="px-10 py-5">
                <h2>이름</h2>
                <input className="rounded-lg w-full border-black border-2 p-2 mt-1"></input>
            </div>
            <div className="px-10 py-5">
                <h2>휴대폰 인증</h2>
                <CustomButton rounded = "true" className={`w-full ${phoneChecked ? "" : "bg-black/40 hover:bg-black/40"}`} onClick={() => setphoneChecked(!phoneChecked)}>
                     휴대폰 인증하기
                </CustomButton>
                
            </div>
            <div className="px-10 py-5">
                <h2>약관동의</h2>
                <div className="border-black border-2 h-68 rounded-lg">
                    <Assign />
                    <Assign />
                    <Assign />
                    <Assign />
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
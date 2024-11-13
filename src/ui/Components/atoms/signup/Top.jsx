'use client'

import React, {useState} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";

export default function Top (){

    const [phoneChecked, setphoneChecked] = useState(true); // 추후에 zustand로 설정 예정

    return(
        <>
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
                <CustomButton rounded = "true" className={`w-full ${phoneChecked ? "bg-main02 hover:bg-main01" : "bg-black/20 hover:bg-black/20"}`} onClick={() => setphoneChecked(!phoneChecked)}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
'use client'

import React, {useState, useEffect} from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "../InputTextBox";

export default function Top ({setAllChecked}){

    const [phoneChecked, setphoneChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    
    useEffect(() => {
        setAllChecked(email !== "" && name !== "" && !phoneChecked);
    }, [phoneChecked, email, name, setAllChecked]);

    return(
        <>
            <div className="px-5 py-2">
                <h2>개인정보 입력</h2>
            </div>
            <div className="px-10 py-4">
                <h2>이메일</h2>
                <InputTextBox value={email} onChange={setEmail}/>
            </div>
            <div className="px-10 py-4">
                <h2>이름</h2>
                <InputTextBox value={name} onChange={setName}/>
            </div>
            <div className="px-10 py-4">
                <h2>휴대폰 인증</h2>
                <CustomButton key={phoneChecked} rounded = "true" className={`w-full ${phoneChecked ? "bg-main02" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`} onClick={() => setphoneChecked(false)}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
'use client'

import React, {useState, useEffect} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import InputTextBox from "../InputTextBox";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

export default function Top ({setAllChecked}){

    const [phoneChecked, setphoneChecked] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();
    
    useEffect(() => {
        email != "" && name != "" ? setphoneChecked(true) : setphoneChecked(false) 
        setAllChecked(email !== "" && name !== "" && phoneChecked);
        
    }, [phone, email, name, setAllChecked]);

    const PhoneClickListener = () =>{
        router.push(urlPath.SIGNUP_PHONE); // 추후에 혹시라도 zustand 쓸수도 있어서 함수로
    }

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
                <CustomButton key={phoneChecked} rounded = "true" className={`w-full ${phoneChecked ? "bg-main02" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`} onClick={PhoneClickListener}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
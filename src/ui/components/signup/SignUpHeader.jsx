'use client'

import React, {useState, useEffect} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import InputTextBox from "@/src/ui/Components/atoms/InputTextBox";
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
            <a className="flex text-R-20 text-black/80 mb-3">개인정보 입력</a>
            </div>
            <div className="px-10 py-4">
            <a className="flex text-R-20 text-black/80 mb-3">이메일</a>
                <InputTextBox value={email} onChange={setEmail}/>
            </div>
            <div className="px-10 py-4">
                <a className="flex text-R-20 text-black/80 mb-3">이름</a>
                <InputTextBox value={name} onChange={setName}/>
            </div>
            <div className="px-10 py-4">
            <a className="flex text-R-20 text-black/80 mb-3">휴대폰 인증</a>
                <CustomButton key={phoneChecked} rounded = "true" className={`w-full  border border-black/80 ${phoneChecked ? "bg-main01" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`} onClick={PhoneClickListener}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
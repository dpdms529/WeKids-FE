'use client'

import React, {useState, useEffect} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";

export default function Top ({setAllChecked}){

    const [phoneChecked, setphoneChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    
    useEffect(() => {
        if(email != "" && name!= "" && phoneChecked == false){
            setAllChecked(true);
        }
        else{
            setAllChecked(false);
        }
    }, [phoneChecked, email, name]);

    return(
        <>
            <div className="px-10 py-5">
                <h2>이메일</h2>
                <input className="rounded-lg w-full border-black border-2 p-2 mt-1" onChange={() => setEmail(event.target.value)}></input>
            </div>
            <div className="px-10 py-5">
                <h2>이름</h2>
                <input className="rounded-lg w-full border-black border-2 p-2 mt-1" onChange={() => setName(event.target.value)}></input>
            </div>
            <div className="px-10 py-5">
                <h2>휴대폰 인증</h2>
                <CustomButton key={phoneChecked} rounded = "true" className={`w-full ${phoneChecked ? "bg-main02" : "bg-stone-300"}`} onClick={() => setphoneChecked(!phoneChecked)}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
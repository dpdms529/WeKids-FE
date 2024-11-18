'use client'

import React, {useState, useEffect} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";

export default function Top ({setAllChecked}){

    const [phoneChecked, setphoneChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    
    useEffect(() => {
        setAllChecked(email !== "" && name !== "" && !phoneChecked);
    }, [phoneChecked, email, name, setAllChecked]);

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
                <CustomButton key={phoneChecked} rounded = "true" className={`w-full ${phoneChecked ? "bg-main02" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`} onClick={() => setphoneChecked(false)}>
                     휴대폰 인증하기
                </CustomButton> 
            </div>
        </>   
    )

}
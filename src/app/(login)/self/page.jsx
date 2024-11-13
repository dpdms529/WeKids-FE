
import Assign from "@/src/ui/Components/atoms/Assign";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React from "react";

export default function Page() {

    

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
                <input type="button" value="휴대폰 인증 완료" disabled className="rounded-lg w-full bg-slate-400 border-2 p-2 mt-1 text-white"></input>
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
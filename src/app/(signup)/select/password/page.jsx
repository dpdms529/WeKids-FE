"use client"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import KeyPad from "@/src/ui/Components/atoms/KeyPad";
import {useState} from "react";

export default function Page() {
    const [isInput, setIsInput] = useState([false, false, false, false, false, false]);


    const inputHandler = (num) => {
        if (num !== "⌫") {
            const updateInput = [...isInput];
            const index = updateInput.indexOf(false);
            if (index != -1) {
                updateInput[index] = true;
            }
            setIsInput(updateInput);
        }
        else{
            const updateInput = [...isInput];
            const index = updateInput.lastIndexOf(true);
            if (index != -1) {
                updateInput[index] = false;
            }
            setIsInput(updateInput);
        }
        
        
    }

    return (
        <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
            
            <div className="flex flex-col h-3/5 p-10 w-full">
                <div className="flex items-center h-3/5">
                    <p className="text-B-20">간편 비밀번호를 <br/> 등록해 주세요.</p>
                </div>
                <div className="flex flex-row gap-[21px] justify-center h-1/5">
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[0] === false ? "bg-white border-2" : "bg-main01"} `} />
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[1] === false ? "bg-white border-2" : "bg-sub01"} `} />
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[2] === false ? "bg-white border-2" : "bg-main01"} `} />
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[3] === false ? "bg-white border-2" : "bg-sub01"} `} />
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[4] === false ? "bg-white border-2" : "bg-main01"} `} />
                <div className={`rounded-full w-[31px] h-[31px] ${isInput[5] === false ? "bg-white border-2" : "bg-sub01"} `} />
                </div>
            </div>
            <div className="flex flex-col h-1/5 p-10 ">
                    <CustomButton rounded = "true" className="mt-auto w-full">
                        확인
                    </ CustomButton>
                </div>
            <div className="flex flex-col mt-auto w-[393px]">
                <KeyPad number={inputHandler}/>
            </div>
        </div>
    );
}
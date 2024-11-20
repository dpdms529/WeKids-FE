"use client"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import KeyPad from "@/src/ui/Components/atoms/KeyPad";
import {useEffect, useState} from "react";

export default function Page() {
    const [isInput, setIsInput] = useState(Array(6).fill(false));
    const [check, setChecked] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const [pwd, setPwd] = useState("");

    useEffect(() => {
        if(isInput[5] === true && check === 0){
            setChecked(1);
            setIsInput((prev) => prev.map(() => false));
        }
        else if(isInput[5] === true && check === 1){
            console.log(pwd);
            const firstValue = pwd.slice(0,6);
            const secondValue = pwd.slice(6,12);
            firstValue == secondValue ? "" : setIsShaking(true);
        }
    }, [isInput[5]]);

    useEffect(() => {
        if (isShaking) {
          const timeout = setTimeout(() => {
            setIsShaking(false);
          }, 500);
          return () => clearTimeout(timeout);
        }
      }, [isShaking]);


    const inputHandler = (num) => {
        if(num == "⌫"){
            const updateInput = [...isInput];
            const index = updateInput.lastIndexOf(true);
            if (index != -1) {
                updateInput[index] = false;
            }
            setIsInput(updateInput);
            pwd.length % 6 != 0 ? setPwd(pwd.slice(0, -1)) : "";
        }
        else if(num != "") {
            const updateInput = [...isInput];
            const index = updateInput.indexOf(false);
            if (index != -1) {
                updateInput[index] = true;
            }
            setIsInput(updateInput);
            pwd.length != 12 ? setPwd(pwd + num) : "";
        }
        
        
        
    }

    return (
        <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
            
            <div className="flex flex-col h-3/5 p-10 w-full">
                <div className="flex flex-col justify-center h-3/5">
                    {check ? <p className="text-B-20">간편 비밀번호를 <br/> 다시 입력해 주세요.</p> : <p className="text-B-20">간편 비밀번호를 <br/> 등록해 주세요.</p>}
                    {isShaking ? <p className=" text-red-600 shake-animation">비밀번호가 일치하지 않아요.</p> : ""}
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
                <KeyPad isDoubleButton={false} number={inputHandler}/>
            </div>
        </div>
    );
}
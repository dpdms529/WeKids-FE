'use client';

import CustomButton from "@/src/ui/components/atoms/CustomButton"
import React, {useState} from "react";
import ParentChildSelector from "@/src/ui/components/signup/ParentChildSelector";
import { urlPath } from "@/src/constants/common";
import { useRouter } from "next/navigation";
import SelectorItem from "@/src/ui/components/signup/SelectorItem";

export default function Page() {

    const [isParentClicked, setParentClicked] = useState(false);
    const [isChildClicked, setChildClicked] = useState(false);
    const router = useRouter();

    return(
        <div className="flex flex-col h-screen bg-white overflow-y-auto w-[393px] items-center px-10"> 
            <div className="my-20 py-2">
                <a className="text-B-28">부모인가요? 자녀인가요?</a>
            </div>
            <div className="w-full">
                <ParentChildSelector isSelected={isParentClicked} onClick={() => {
                        setParentClicked(true);
                        setChildClicked(false);
                    }}
                    >
                        <SelectorItem 
                        isSelected={isParentClicked}
                        text="부모입니다."
                        description="자녀에게 용돈을 줄거에요."/>
                    </ParentChildSelector>
                    
                <ParentChildSelector isSelected={isChildClicked} onClick={() => {
                        setParentClicked(false);
                        setChildClicked(true);
                    }}
                    >
                        <SelectorItem 
                        isSelected={isChildClicked}
                        text="자녀입니다."
                        description="용돈을 받고 금융도 배울거에요."/>
                    </ParentChildSelector>
            </div>
            <div className="fixed bottom-5">
                <CustomButton className={`${isParentClicked || isChildClicked ? "bg-main01": "bg-neutral-400 hover:bg-neutral-400 cursor-default"}`} 
                onClick={() => {
                    if (isParentClicked || isChildClicked) {
                        router.push(urlPath.HOME);
                    }
                }}>확인</CustomButton>
            </div>
        </div>
    )

}
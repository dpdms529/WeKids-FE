'use client';

import ConfirmButton from "@/src/ui/Components/transaction/detail/ConfirmButton";
import React, {useState} from "react";
import ParentChildSelector from "@/src/ui/Components/atoms/signup/ParentChildSelector";



export default function Page() {

    const [isParentClicked, setParentClicked] = useState(false);
    const [isChildClicked, setChildClicked] = useState(false);


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
                    text="부모입니다."
                    description="자녀에게 용돈을 줄거에요."
                    />
                <ParentChildSelector isSelected={isChildClicked} onClick={() => {
                        setParentClicked(false);
                        setChildClicked(true);
                    }}
                    text="자녀입니다."
                    description="용돈을 받고 금융도 배울거에요."
                    />
            </div>
            <div className="fixed bottom-5">
                <ConfirmButton />
            </div>
        </div>
    )

}
import ConfirmButton from "@/src/ui/Components/transaction/detail/ConfirmButton";
import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";



export default function Page() {

    return(
        <div className="flex flex-col h-screen bg-white overflow-y-auto w-[393px] items-center px-10"> 
            <div className="my-24">
                <a className="text-B-28">부모인가요? 자녀인가요?</a>
            </div>
            
            <div className=" fixed bottom-5">
                <ConfirmButton />
            </div>
        </div>
    )

}
'use client'

import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import AccountItem from "@/src/ui/components/signup/AccountItem";
import { useState } from "react";



export default function Page() {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const router = useRouter();
    
    return (
        <div className="flex flex-col bg-white h-screen max-w-[393px] overflow-y-hidden">
            <Header />
            <AccountItem selectedIndex = {selectedIndex} setSelectedIndex = {setSelectedIndex} />
            <div className="flex h-1/5 items-center">
                <CustomButton onClick={() => {router.push(urlPath.HOME)}} >
                    가져오기
                </CustomButton>
            </div>
        </div>
    );
}
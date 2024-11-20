'use client'
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import ParentChildSelector from "@/src/ui/Components/signup/ParentChildSelector";
import Header from "@/src/ui/layout/Header";
import Image from "next/image";
import {useState} from "react";

export default function Page() {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="flex flex-col bg-white h-screen max-w-[393px] overflow-y-hidden">
            <Header />
            <div className="flex flex-col h-4/5 mx-7">
            <div className="flex flex-col gap-5">
                <div className="pt-5">
                    <span className="flex text-R-28">내 계좌</span>
                </div>
                <div className="flex">
                <CustomButton rounded={true} color={"gray"} className="pointer-events-none h-10 flex items-center justify-between px-4" >
                    <span className="text-left">총 4 개</span>
                    <span className="text-right">40000원</span>
                </CustomButton>
                </div>
            </div>
                <div className="flex flex-col my-4 w-full overflow-y-auto scrollbar-hide">
                    <ParentChildSelector  isSelected={isSelected} className="my-4" onClick={() => {setIsSelected(!isSelected)}}>
                        <div className="flex flex-row w-full h-20 pt-1 gap-2">
                            <div className="flex flex-col justify-start w-1/5">
                                <Image src="/images/woorisvg.svg" alt="woori" width={68} height={68} />
                            </div>
                            <div className="flex flex-col w-2/5 items-start justify-start pt-2">
                                <div>
                                    <span className="text-R-20">입출금 통장</span>
                                </div>
                                <div>
                                    <span className="text-R-10 text-stone-300">111-222-333</span>
                                </div>
                            </div>
                            <div className="flex flex-col w-2/5 justify-end items-end pb-3 pr-3">
                                    <span>10,000원</span>
                            </div>

                        </div>
                    </ParentChildSelector>   
                </div>
            </div>
            <div className="flex">
                <CustomButton >
                    가져오기
                </CustomButton>
            </div>
        </div>
    );
}
"use client"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import KeyPad from "@/src/ui/Components/atoms/KeyPad";

export default function Page() {
    return (
        <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
            
            <div className="flex flex-col h-3/5 p-10 w-full">
                <div className="flex items-center h-3/5">
                    <p className="text-B-20">간편 비밀번호를 <br /> 등록해 주세요.</p>
                </div>
                <div className="flex flex-row gap-[21px] justify-center h-1/5">
                    <div className="rounded-full w-[31px] h-[31px] bg-main01" />
                    <div className="rounded-full w-[31px] h-[31px] bg-sub01" />
                    <div className="rounded-full w-[31px] h-[31px] bg-main01" />
                    <div className="rounded-full w-[31px] h-[31px] bg-sub01" />
                    <div className="rounded-full w-[31px] h-[31px] bg-main01" />
                    <div className="rounded-full w-[31px] h-[31px] bg-sub01" />
                </div>
                
        
            </div>
            
        </div>
    );
}
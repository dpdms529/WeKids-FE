'use client'
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";

export default function Page() {

    

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
            </div>
        </div>
    );
}
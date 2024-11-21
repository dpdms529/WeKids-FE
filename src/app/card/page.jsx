import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import ConfirmButton from "@/src/ui/Components/transaction/detail/ConfirmButton";
import Header from "@/src/ui/layout/Header";
import Image from "next/image";

export default function Page() {

    return(
        <div className="flex flex-col h-screen max-w-full bg-white overflow-hidden">
            <Header />
            <div className="flex flex-col h-4/5 justify-end ">
            
            
            </div>
            <div className="flex flex-col h-1/5 justify-center px-10">
                <CustomButton rounded={true} className="max-w-full">
                    확인
                </CustomButton>
            </div>
        </div>

    )


}
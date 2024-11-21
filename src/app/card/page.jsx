import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import ConfirmButton from "@/src/ui/Components/transaction/detail/ConfirmButton";
import Header from "@/src/ui/layout/Header";
import Image from "next/image";

export default function Page() {

    return(
        <div className="flex flex-col h-screen max-w-full bg-white overflow-hidden">
            <Header />
            <div className="flex flex-col h-4/5 justify-end ">
            <div className="flex flex-row border-2 border-black rounded-xl w-2/3 h-1/2 ml-auto mr-10">
                
            </div>

            <div className="flex flex-col pb-28">
            <Image
            src="/images/chachapingImg.svg"
            alt="character image"
            width={150}
            height={150}
            />
            </div>
            
            </div>
            <div className="flex flex-col h-1/5 justify-center px-10">
                <CustomButton rounded={true} className="max-w-full">
                    확인
                </CustomButton>
            </div>
        </div>

    )


}
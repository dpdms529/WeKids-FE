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
                <div className="flex flex-col w-full">
                    <div className="h-3/4 pl-3">
                        <div className="flex h-1/3 items-center">
                            <span className="text-R-20">카드 발급 안내</span>
                        </div>
                        <div className="flex flex-col gap-6 pt-4">
                            <p><span className="text-main04">강현우</span> 고객님 <br /></p>
                            <p>보호자 조예은님께 <br /> 요청이 완료되었습니다.</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <CustomButton rounded={true} className="max-w-full" >
                            카드 디자인 보기
                        </CustomButton>
                    </div>
                </div>
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
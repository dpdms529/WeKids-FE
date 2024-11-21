import CustomButton from "@/src/ui/Components/atoms/CustomButton";

export default function InnerText(){
    return(
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
    )
}
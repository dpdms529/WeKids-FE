import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";
import { assigndata } from "@/src/constants/assign";


export default function Page() {

  return (
    <div className="flex flex-col h-screen max-w-full overflow-auto scrollbar-hide">
        <Header />
        <div className="flex flex-col p-9">
            <div className="flex flex-col w-full items-center justify-center h-[384px] rounded-lg bg-main02">
                <div className="flex flex-col p-12">
                    <div className="flex text-white text-R-14">
                        위키즈와 함께하는
                    </div>
                    <div>
                        위키즈 체크카드
                    </div>
                    <div className="flex text-white">
                        실적한도 제한 없이 어쩌고 저쩌고 <br /> 위키즈 카드에 대한 설명
                    </div>
                </div>  
            </div>
            <div className="flex my-8 justify-center">
                <CustomButton size="mediumLarge" rounded={true} className="text-R-20">
                    체크카드 신청하기
                </CustomButton>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex text-R-20 text-black">
                    쓸 때마다 캐시백, 주말에는 2배!
                </div>
                <div className="flex flex-col text-R-10 text-black/40 gap-2">
                    {assigndata.map((item, idx) => (
                        <div key={idx}>{item}</div>
                    ))}
                </div>
                
            </div>
            

        </div>
    </div>
  );
}

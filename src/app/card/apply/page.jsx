import Header from "@/src/ui/layout/Header";

export default function Page() {

  return (
    <div className="flex flex-col h-screen max-w-full overflow-auto scrollbar-hide">
        <Header />
        <div className="flex p-9">
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
            

        </div>
    </div>
  );
}

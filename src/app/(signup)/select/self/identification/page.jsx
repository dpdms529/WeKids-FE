'use client'
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import Header from "@/src/ui/layout/Header";

export default function Page() {
    return (
        <div className="flex flex-col bg-white h-screen w-full">
          <Header />
          <div className="flex flex-col w-full items-center p-12">
            <div>
              계좌를 불러오기 위해서는 <br/>
              주민등록 번호가 필요해요!
            </div>
            <div className="flex flex-col gap-11">
              <div className="flex flex-col">
                <div>주민번호</div>
                <InputTextBox />
              </div>
              <div>
                <div>주민번호 확인</div>
                <InputTextBox />
              </div>
            </div>
          </div>
          
        </div>
    );
}
'use client'
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
      <div className="flex flex-col max-w-[393px] h-screen overflow-y-auto scrollbar-hide">
        <div className="flex flex-col w-full">
          <div className="flex flex-row px-7 py-14 w-full h-[132px]">
            <ArrowLeftIcon />
            <div className="flex text-R-14 justify-center w-full">
              네이버로 가입하기
            </div>
          </div>
          <div className="flex flex-col px-10 gap-8 h-[632px]">
            <div className="text-R-20 text-black/80">
              만 14세 미만의 가입자는 <br />
              보호자의 동의가 필요해요.
            </div>
            <div className="text-R-14 text-main04">
              보호자에게 동의 요청 문자를 보내주세요.
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-R-20">법정 대리인 이름</div>
              <div className="flex w-full">
                <InputTextBox placeholder="이름을 입력하세요" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-R-20">생년월일</div>
              <div className="flex flex-row gap-5 w-full">
                <InputTextBox placeholder="2022년" />
                <InputTextBox placeholder="1월" />
                <InputTextBox placeholder="15일" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-R-20">법정 대리인 휴대폰 번호</div>
              <div className="flex flex-row gap-5 w-full">
                <InputTextBox placeholder="010" />
                <InputTextBox placeholder="0000" />
                <InputTextBox placeholder="0000" />
              </div>
            </div>
          </div>
          
            <div className="flex w-full h-[115px]">
              <CustomButton >
                동의 요청하기
              </CustomButton>
            </div>

        </div>
      </div>
    );
}
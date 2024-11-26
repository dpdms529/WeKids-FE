"use client";
import Header from "@/src/ui/layout/Header";
import SignUpFooter from "@/src/ui/components/signup/SignUpFooter";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";

export default function Page() {
  const [assignCheck, setAssignChecked] = useState(false);
  const [identification, setIdentification] = useState("".padStart(13, " "));
  const [checkidentification, setCheckIdentification] = useState(
    "".padStart(13, " "),
  );

  const InputTextHandler = (value, idx) => {
    let number;
    switch (idx) {
      case 1:
        number = value.padEnd(6, " ").slice(0, 6) + identification.slice(6);
        setIdentification(number);
        break;
      case 2:
        number = identification.slice(0, 6) + value.padEnd(7, " ").slice(0, 7);
        setIdentification(number);
        break;
      case 3:
        number =
          value.padEnd(6, " ").slice(0, 6) + checkidentification.slice(6);
        setCheckIdentification(number);
        break;
      case 4:
        number =
          checkidentification.slice(0, 6) + value.padEnd(7, " ").slice(0, 7);
        setCheckIdentification(number);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col bg-white h-screen overflow-y-auto scrollbar-hide w-full">
      <Header />
      <div className="flex flex-col w-full h-[423px] items-center px-12 pt-12">
        <div className="text-R-20">
          계좌를 불러오기 위해서는 <br />
          주민등록 번호가 필요해요!
        </div>
        <div className="flex flex-col gap-11 mt-11">
          <div className="flex flex-col gap-3">
            <div className="text-R-20 text-black/60">주민번호</div>
            <div className="flex flex-row justify-between gap-2">
              <LimitedInputBox
                text={identification.slice(0, 6).replace(/\s/g, "")}
                placeholder="111111"
                maxLength={6}
                onChange={(e) => InputTextHandler(e, 1)}
              />
              <div className="flex flex-col h-full justify-center">-</div>
              <LimitedInputBox
                text={identification.slice(6, 13).replace(/\s/g, "")}
                placeholder="1111111"
                security={true}
                onChange={(e) => InputTextHandler(e, 2)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-R-20 text-black/60">주민번호 확인</div>
            <div className="flex flex-row justify-between gap-2">
              <LimitedInputBox
                text={checkidentification.slice(0, 6).replace(/\s/g, "")}
                placeholder="111111"
                maxLength={6}
                onChange={(e) => InputTextHandler(e, 3)}
              />
              <div className="flex flex-col h-full justify-center">-</div>
              <LimitedInputBox
                text={checkidentification.slice(6, 13).replace(/\s/g, "")}
                placeholder="1111111"
                security={true}
                onChange={(e) => InputTextHandler(e, 4)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[487px]">
        <div className="flex flex-col my-12">
          <SignUpFooter setAllChecked={setAssignChecked} />
        </div>
        <div className="flex h-[91px]">
          <CustomButton
            color={
              assignCheck &&
              !identification.includes(" ") &&
              !checkidentification.includes(" ") &&
              identification == checkidentification
                ? "main"
                : "gray"
            }
          >
            확인
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

'use client'
import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import BirthButton from "@/src/ui/components/signup/BirthButton";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { year, month, date } from "@/src/constants/assign";

export default function Page() {

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("".padStart(8, " "));
  const [phone, setPhone] = useState("".padStart(11, " ")); // 부모 폰


  const OnChangeBirthHandler = (value, type) => {
    
    const tempValue = String(value);

    const stringValue = tempValue.length == 1 ? "0" + tempValue : tempValue;
    
    let updatedDate
    switch(type){
      case 1:
        updatedDate = stringValue.padEnd(8, " ").slice(0, 4) + birth.slice(4);
        break;
      case 2:
        updatedDate = birth.slice(0, 4) + stringValue.padEnd(2, " ").slice(0, 2) + birth.slice(6);
        break;
      case 3:
        updatedDate = birth.slice(0, 6) + stringValue.padEnd(2, " ").slice(0, 2);
        break;
      default:
        break;
    }
    setBirth(updatedDate);
    console.log(birth);
    

  }

  const OnChangePhoneHandler = (value, type) => {
    let phoneNumber;
    switch(type){
      case 1:
      phoneNumber = value.padEnd(3, " ").slice(0, 3) + phone.slice(3);
      break;
      case 2:
      phoneNumber = phone.slice(0, 3) + value.padEnd(4, " ").slice(0, 4) + phone.slice(7);
      break;
      case 3:
      phoneNumber = phone.slice(0, 7) + value.padEnd(4, " ").slice(0, 4);
      break;
    default:
      break;
    }
    
    
    setPhone(phoneNumber);
    console.log(phone);
  }

    return (
      <div className="flex flex-col max-w-[393px] h-screen overflow-y-auto scrollbar-hide">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row px-7 pt-7 w-full h-24">
            <div className="flex flex-row w-1/3">
              <ArrowLeftIcon className="cursor-pointer" />
            </div>
            <div className="flex text-R-14 pl-7 w-full">
              네이버로 가입하기
            </div>
          </div>
          <div className="flex flex-col px-10 gap-8 h-2/3">
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
                <InputTextBox placeholder="이름을 입력하세요" text={name} onChange={setName} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-R-20">생년월일</div>
              <div className="flex flex-row gap-5 w-full">
              <BirthButton placeholder="년도" options={year} onChange={(e) => OnChangeBirthHandler(e, 1)} />
              <BirthButton placeholder="월" options={month} onChange={(e) => OnChangeBirthHandler(e, 2)}/>
              <BirthButton placeholder="일" options={date} onChange={(e) => OnChangeBirthHandler(e, 3)}/>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-R-20">법정 대리인 휴대폰 번호</div>
              <div className="flex flex-row gap-5 w-full">
                <LimitedInputBox placeholder="010" maxLength={3} text={phone.slice(0,3).replace(/\s/g, "")} value={phone.slice(0,3).replace(/\s/g, "")} onChange={(e) => OnChangePhoneHandler(e, 1)}/>
                <LimitedInputBox placeholder="0000" maxLength={4} text={phone.slice(3,7).replace(/\s/g, "")} value={phone.slice(3,7).replace(/\s/g, "")} onChange={(e) => OnChangePhoneHandler(e, 2)}/>
                <LimitedInputBox placeholder="0000" maxLength={4} text={phone.slice(7,11).replace(/\s/g, "")} value={phone.slice(7,11).replace(/\s/g, "")} onChange={(e) => OnChangePhoneHandler(e, 3)}/>
              </div>
            </div>
          </div>
            <div>
            
              
            </div>
            <div className="flex flex-col w-full h-1/6 justify-center pt-10">
              <Link href={urlPath.HOME}>
              <CustomButton >
                동의 요청하기
              </CustomButton>
              </Link>
            </div>

        </div>
      </div>
    );
}
"use client";

import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignUpStore } from "@/src/stores/accountStore";

export default function Top({ setAllChecked, data }) {
  const [phoneChecked, setphoneChecked] = useState(false);
  const { name, email, phone, birthday, setName, setEmail, setPhone, setBirthday } =
    useSignUpStore();
  const router = useRouter();

  useEffect(() => {
    setEmail(data.email);
    setName(data.name);
    setBirthday(data.birthday);
  }, []);

  useEffect(() => {
    email !== "" && name !== "" ? setphoneChecked(true) : setphoneChecked(false); // 추후에 구현
    setAllChecked(email !== "" && name !== "");
  }, [phone, email, name, setAllChecked]);

  const PhoneClickListener = () => {
    router.push(urlPath.SIGNUP_REGFOM_PHONE); // 추후에 혹시라도 zustand 쓸수도 있어서 함수로
  };

  return (
    <div className="flex flex-col w-full h-fit space-y-[48px]">
      <div className="flex flex-col gap-[9px] ">
        <label className="text-R-20 text-black/80">이메일</label>
        <InputTextBox text={email} onChange={setEmail} />
      </div>
      <div className="flex flex-col gap-[9px] ">
        <label className="text-R-20 text-black/80">이름</label>
        <InputTextBox text={name} onChange={setName} />
      </div>
      <div className="flex flex-col gap-[9px] ">
        <label className="text-R-20 text-black/80">휴대폰 인증</label>
        <CustomButton
          key={phoneChecked}
          rounded="true"
          className={`w-full border border-black/80 ${phoneChecked ? "bg-main01" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`}
          onClick={PhoneClickListener}
        >
          휴대폰 인증하기
        </CustomButton>
      </div>
    </div>
  );
}

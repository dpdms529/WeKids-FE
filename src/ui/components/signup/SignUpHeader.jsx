"use client";

import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import LimitedInputBox from "./LimitedInputBox";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignUpStore } from "@/src/stores/accountStore";

export default function Top({ setAllChecked, data }) {
  const [phoneChecked, setphoneChecked] = useState(false);
  const {
    name,
    email,
    phone,
    birthday,
    setName,
    setEmail,
    setPhone,
    setBirthday,
  } = useSignUpStore();
  const router = useRouter();

  useEffect(() => {
    setEmail(data.email);
    setName(data.name);
    setPhone(phone || "".padStart(13, " "));
    setBirthday(data.birthday);
  }, []);

  useEffect(() => {
    setphoneChecked(email !== "" && name !== "" && !phone.includes(" "));
    setAllChecked(email !== "" && name !== "" && !phone.includes(" "));
  }, [phone, email, name, setAllChecked]);

  const PhoneClickListener = () => {
    router.push(urlPath.SIGNUP_REGFOM_PHONE);
  };

  const OnChangePhoneHandler = (value, type) => {
    let phoneNumber;
    const paddedPhone = phone.padEnd(13, " ");

    switch (type) {
      case 1:
        phoneNumber =
          value.padEnd(3, " ").slice(0, 3) + "-" + paddedPhone.slice(4);
        break;
      case 2:
        phoneNumber =
          paddedPhone.slice(0, 3) +
          "-" +
          value.padEnd(4, " ").slice(0, 4) +
          "-" +
          paddedPhone.slice(9);
        break;
      case 3:
        phoneNumber =
          paddedPhone.slice(0, 8) + "-" + value.padEnd(4, " ").slice(0, 4);
        break;
      default:
        break;
    }
    setPhone(phoneNumber);
  };

  return (
    <div className="flex flex-col w-[313px] h-fit space-y-7">
      <div className="flex flex-col w-full gap-[9px]">
        <label className="text-R-20 text-black/80">이메일</label>
        <InputTextBox text={email} onChange={setEmail} />
      </div>
      <div className="flex flex-col gap-[9px] ">
        <label className="text-R-20 text-black/80">이름</label>
        <InputTextBox text={name} onChange={setName} />
      </div>
      <div className="flex flex-col gap-[9px] ">
        <label className="text-R-20 text-black/80">휴대폰 인증</label>
        <div className="flex flex-row gap-2 w-full mb-5">
          <LimitedInputBox
            placeholder="010"
            maxLength={3}
            text={phone.slice(0, 3).trim()}
            value={phone.slice(0, 3).trim()}
            onChange={(e) => OnChangePhoneHandler(e, 1)}
          />
          <p className="flex flex-col h-full justify-center">-</p>
          <LimitedInputBox
            placeholder="0000"
            maxLength={4}
            text={phone.slice(4, 8).trim()}
            value={phone.slice(4, 8).trim()}
            onChange={(e) => OnChangePhoneHandler(e, 2)}
          />
          <p className="flex flex-col h-full justify-center">-</p>
          <LimitedInputBox
            placeholder="0000"
            maxLength={4}
            text={phone.slice(9, 13).trim()}
            value={phone.slice(9, 13).trim()}
            onChange={(e) => OnChangePhoneHandler(e, 3)}
          />
        </div>
        <CustomButton
          key={phoneChecked}
          rounded="true"
          className={`w-full border border-black/80 ${
            phoneChecked
              ? "bg-main01"
              : "bg-stone-300 hover:bg-stone-300 pointer-events-none"
          }`}
          onClick={PhoneClickListener}
        >
          휴대폰 인증하기
        </CustomButton>
      </div>
    </div>
  );
}

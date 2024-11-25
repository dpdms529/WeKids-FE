"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { useRouter } from "next/navigation";
import CardAddress from "@/src/ui/components/card/CardAddress";
import CardAddressBottom from "@/src/ui/components/card/CardAddressBottom";
import CardCharacter from "@/src/ui/components/card-select/CardCharacter";

export default function Page() {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const notify = () => {
    toast(
      <div>
        입력되지 않은 사항이 있습니다. <br /> 모두 입력해주세요.
      </div>,
    );
  };

  return (
    <div className="flex flex-col h-screen max-w-full overflow-auto scrollbar-hide px-10 py-6">
      <Toaster position="top-center" />
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col h-1/2">
          <div className="flex flex-col items-center text-R-20 text-black/80">
            배송지 선택하기
          </div>
          <div className="flex w-[196px] h-[312px] mt-6"><CardCharacter selectedCharacter='DADAPING' selectedColor="bg-blueDada" /></div>
        </div>
        <div className="flex flex-col h-1/2">
          <CardAddress
            address={address}
            postcode={postcode}
            setAddress={setAddress}
            setPostcode={setPostcode}
          />
          <CardAddressBottom
            name={name}
            address={address}
            setName={setName}
            setPhone={setPhone}
            setAddress={setAddress}
          />
          <div className="flex flex-col items-center h-[102px] justify-end">
            <CustomButton
              size={"mediumLarge"}
              rounded={true}
              className="border border-1 border-black/80"
              onClick={
                phone != "" && name != "" && address != ""
                  ? () => router.push(urlPath.HOME)
                  : notify
              }
            >
              확인
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
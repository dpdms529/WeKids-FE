"use client";

import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ChildInputForm from "@/src/ui/components/signup/ChildInputForm";
import Bottom from "@/src/ui/components/signup/SignUpFooter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [topChecked, setTopChecked] = useState(false);
  const [bottomChecked, setBottomChecked] = useState(false);

  const notify = () => {
    toast("빈칸을 채워주세요!");
  };

  const clickHandler = (e) => {
    if(!topChecked || !bottomChecked){
      e.preventDefault();
    }
  } 

  return (
    <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
      <Toaster position="top-center" />
      <div className="flex flex-col flex-1 h-5/6 overflow-y-auto scrollbar-hide">
        <ChildInputForm setAllChecked={setTopChecked} />
        <div className="mt-12 mb-1 text-R-20 text-black/80">
          <div className="flex flex-col p-8">아이의 계좌를 만들기 위해 <br /> OOO님의 동의가 필요해요</div>
          <Bottom setAllChecked={setBottomChecked} />
        </div>
      </div>
      <div className="flex flex-col px-10 py-5 gap-6 h-1/6">
        <Link href={urlPath.CARD_VERIFICATION_CONFIRM}>
        <CustomButton
          rounded="true"
          className={`w-full ${topChecked == true && bottomChecked == true ? "bg-main02" : "bg-stone-300 hover:bg-stone-300"}`}
          onClick={clickHandler}
        >
          다음
        </CustomButton>
        </Link>
        <Link href={urlPath.CARD_VERIFICATION_CONFIRM}>
        <CustomButton
          rounded="true"
          className="w-full bg-stone-300 hover:bg-stone-300"
        >
          닫기
        </CustomButton>
        </Link>
      </div>
    </div>
  );
}

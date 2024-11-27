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

  return (
    <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
      <Toaster position="top-center" />
      <ChildInputForm setAllChecked={setTopChecked} />
      <div className="px-10 mt-12 mb-1 text-R-20 text-black/80">
        아이의 계좌를 만들기 위해 <br /> OOO님의 동의가 필요해요
      </div>
      <Bottom setAllChecked={setBottomChecked} />
      <div className="flex flex-col px-10 py-5 gap-6">
        <Link href={urlPath.PARENT_CARD_APPLY}>
          <CustomButton
            rounded="true"
            className={`w-full ${topChecked == true && bottomChecked == true ? "bg-main02" : "bg-stone-300 hover:bg-stone-300"}`}
            onClick={() => {
              topChecked && bottomChecked
                ? router.push(urlPath.HOME)
                : notify();
            }}
          >
            다음
          </CustomButton>
        </Link>
        <CustomButton
          rounded="true"
          className="w-full bg-stone-300 hover:bg-stone-300"
          onClick={() => {
            router.push(urlPath.CARD_VERIFICATION_CONFIRM);
          }}
        >
          닫기
        </CustomButton>
      </div>
    </div>
  );
}

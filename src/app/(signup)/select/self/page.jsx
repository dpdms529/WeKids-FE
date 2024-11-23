"use client";

<<<<<<< HEAD
import Top from "@/src/ui/components/signup/SignupHeader"
import Bottom from "@/src/ui/components/signup/SignUpFooter"
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
=======
>>>>>>> 30007994f17ff1d5e80aae05053f38e8590da677
import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import Bottom from "@/src/ui/Components/signup/SignUpFooter";
import Top from "@/src/ui/Components/signup/SignUpHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [topChecked, setTopChecked] = useState(false);
  const [bottomChecked, setBottomChecked] = useState(false);
  const router = useRouter();

  const notify = () => {
    toast("빈칸을 채워주세요!");
  };

  return (
    <div className="flex flex-col w-[393px] h-screen overflow-y-auto scrollbar-hide bg-white">
      <Toaster position="top-center" />
      <Top setAllChecked={setTopChecked} />
      <Bottom setAllChecked={setBottomChecked} />
      <div className="px-10 py-5">
        <CustomButton
          rounded="true"
          className={`w-full border border-black/80 ${
            topChecked == true && bottomChecked == true
              ? "bg-main01"
              : "bg-stone-300 hover:bg-stone-300"
          }`}
          onClick={() => {
            topChecked && bottomChecked ? router.push(urlPath.HOME) : notify();
          }}
        >
          다음
        </CustomButton>
      </div>
    </div>
  );
}

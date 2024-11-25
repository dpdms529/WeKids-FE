"use client";

import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ConfirmItem from "@/src/ui/components/signup/ConfirmItem";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-white overflow-hidden h-screen max-w-[393px]">
      <div className="flex flex-col p-10 h-full">
        <div className="flex flex-col gap-6 h-5/6 justify-center items-center">
          <ConfirmItem />
        </div>
        <div className="flex h-1/6 w-full items-end pb-1">
          <CustomButton
            size="mediumLarge"
            rounded={true}
            onClick={() => {
              router.push(urlPath.HOME);
            }}
          >
            확인
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

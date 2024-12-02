"use client";

import { urlPath } from "@/src/constants/common";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const childAccountData = {
  childId: 1,
  name: "최윤정",
  accountNumber: "1234-5678-9101-1121",
  profile: "/images/chachapingImg.svg",
  balance: 300000,
  accountId: 2,
  cardState: "ACTIVE",
  color: "GREEN",
  character: "CHACHAPING",
};
const childAccountNullData = {
  childId: 1,
  name: "최윤정",
  accountNumber: "",
  profile: "/images/chachapingImg.svg",
  balance: 300000,
  accountId: 2,
  cardState: "ACTIVE",
  color: "GREEN",
  character: "CHACHAPING",
};

export default function ChildHome() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Card Section */}
      <div className="p-4">
        <div className="bg-[#E8F1FF] rounded-[10px] w-[331px] h-[252px] p-6 flex flex-col">
          <div className="text-B-28 font-medium mb-4">
            {childAccountData.name}
          </div>
          <div className="flex-1">
            {/* url 수정필요 */}
            <Link href={urlPath.CHILD_CARD}>
              <div className="border-2 border-dashed border-black/40 rounded-lg h-full w-full flex items-center justify-center">
                <PlusIcon width={50} height={50} color="grey" variant="soft" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

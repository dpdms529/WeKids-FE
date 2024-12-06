"use client";
import { urlPath } from "@/src/constants/common";
import { useUserStore } from "@/src/stores/userStore";

import { useRouter } from "next/navigation";
import { AccountCardLayout } from "../AccountCardLayout";
import { MessageBox } from "../MessageBox";

export const ApprovalWaitingCard = ({ name }) => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const router = useRouter();
  const handleClick = () => {
    setUserInfo(name, name);
    router.push(urlPath.CHILD_CARD);
  };

  return (
    <div className="flex flex-col items-center">
      <AccountCardLayout title={name + " 자녀님 위키즈 카드가 없네요!"}>
        <div onClick={handleClick}>
          <MessageBox
            subtitle={`위키즈 카드\n발급 대기 중 입니다!`}
            description="부모님에게 카드를 발급해달라고 요청하세요!"
            imgUrl="/images/noCardIconImg.svg"
          />
        </div>
      </AccountCardLayout>
    </div>
  );
};

export default ApprovalWaitingCard;

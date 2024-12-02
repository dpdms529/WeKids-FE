import { urlPath } from "@/src/constants/common";
import Link from "next/link";
import { AccountCardLayout } from "../AccountCardLayout";
import { MessageBox } from "../MessageBox";

const NoAccountCard = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={urlPath.PARENT_ACCOUNT}>
        <AccountCardLayout title={name + "님, 아직 연결 된 계좌가 없네요!"}>
          <MessageBox
            subtitle={`연결 계좌\n선택하기`}
            description="용돈지급을 위해 우리은행 계좌를 연결해주세요."
            imgUrl="/images/weebeGropImg.svg"
          />
        </AccountCardLayout>
      </Link>
    </div>
  );
};

export default NoAccountCard;

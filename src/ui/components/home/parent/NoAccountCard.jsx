import { AccountCardLayout } from "../AccountCardLayout";
import { MessageBox } from "../MessageBox";

const NoAccountCard = ({name}) => {
  return (
    <div className="flex flex-col items-center">
      <AccountCardLayout title={name + ", 아직 연결 된 계좌가 없네요!"}>
        <MessageBox
          subtitle={`연결 계좌\n선택하기`}
          description="용돈지급을 위해 우리은행 계좌를 연결해주세요."
          imgUrl="/images/weebeGropImg.svg"
        />
      </AccountCardLayout>
    </div>
  );
};

export default NoAccountCard;

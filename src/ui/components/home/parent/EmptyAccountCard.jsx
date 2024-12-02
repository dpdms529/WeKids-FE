import { MessageBox } from "../mission/MessageBox";
import { AccountCardLayout } from "./AccountCardLayout";

export const EmptyAccountCard = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <AccountCardLayout title={name + " 자녀님 위키즈 카드가 없네요!"}>
        <MessageBox
          subtitle={`위키즈 체크카드\n발급하러 가기`}
          description="우리 아이의 경제공부, 위키즈 체크카드로 해결!"
          imgUrl ="/images/noCardIconImg.svg"
        />
      </AccountCardLayout>
    </div>
  );
};

export default EmptyAccountCard;

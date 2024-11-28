import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ShareButton from "@/src/ui/components/atoms/Sharebutton";
import Memo from "@/src/ui/components/transaction/detail/Memo";
import TransactionDetail from "@/src/ui/components/transaction/detail/TransactionDetail";
import Link from "next/link";

const dummy = {
  title: "카카오페이",
  memo: "메모",
  createdAt: "2024.10.27 14:15:27",
  type: "자동이체",
  amount: "-10,000원",
  balance: "19,862원",
};

const TransactionDetailPage = ({ params }) => {
  //trxId로 api 호출해서 값 가져오기
  console.log(params.trxId);
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-between">
      <div className="w-full px-5 py-10">
        <div className="w-full flex items-center text-B-22 my-5">
          {dummy.title}
        </div>
        <Memo data={dummy.memo} />
        <hr />
        <div className="w-full">
          <TransactionDetail label="거래시각" value={dummy.createdAt} />
          <TransactionDetail label="거래구분" value={dummy.type} />
          <TransactionDetail label="거래금액" value={dummy.amount} />
          <TransactionDetail label="거래 후 잔액" value={dummy.balance} />
        </div>
      </div>
      <div className="flex w-full mt-auto">
        <ShareButton size="small" />
        <Link href={urlPath.TRANSACTION_HISTORY} className="flex-1">
          <CustomButton size="medium" className="w-full">
            확인
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default TransactionDetailPage;

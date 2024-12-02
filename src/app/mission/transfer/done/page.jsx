import { urlPath } from "@/src/constants/common";
import TransferComplete from "@/src/ui/components/transfer/TransferComplete";
import Link from "next/link";

export default async function Page() {
  
  // const data = await getXXXXX(); 데이터 가져오기
  const transferData = {
    sendUser: "최윤정",
    amount: 10000,
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  };

  return ( // 미션 목록으로 이동하게 변경
    <Link href={urlPath.HOME}> 
      <TransferComplete 
        transferData={transferData}
      />
    </Link>
  );
};
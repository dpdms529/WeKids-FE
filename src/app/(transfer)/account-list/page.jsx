"use client";

import { urlPath } from "@/src/constants/common";
import { fetchChildAccouts } from "@/src/services/account";
import { useTransactionStore } from "@/src/stores/transactionStore";
import Loader from "@/src/ui/components/atoms/Loader";
import TransferItem from "@/src/ui/components/atoms/TransferItem";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {

  const { data, error, isLoading } = useQuery({
    queryKey: ['accountData'], // queryKey를 객체 형태로 전달
    queryFn: fetchChildAccouts, // service에서 가져온 queryFn 지정
  });

  const { selectedAccount, setSelectedAccount } = useTransactionStore();
  const handleSelect = (user) => {
    setSelectedAccount({
      id: user.accountId,
      name: user.name,
      account: user.account,
    });
  };
  if (isLoading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col">
      <div className="flex justify-between p-4">
        <h1 className="text-R-20 text-black/80">이체</h1>
        <Link href={urlPath.HOME}>
          <button className="text-black/70 text-R-20">닫기</button>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {data.map((user, idx) => (
          <Link key={idx} href={urlPath.TRANSFER}>
            <TransferItem
              imgPath={`/images/${user.profile}`}
              key={user.accountId}
              name={user.name}
              account={user.acocuntNumber} // TODO: 실제 값이 acocunt라 썻어요 추후에 바꾸면 바꿀게요..
              bank={"우리은행"}
              isSelected={user.accountId === selectedAccount?.accountId}
              onClick={() => handleSelect(user)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

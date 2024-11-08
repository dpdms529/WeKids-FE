"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import TransactionList from "@/src/ui/components/atoms/TransferItem";
import { useTransactionStore } from "@/src/stores/transactionStore";
import { urlPath } from "@/src/constants/common";

const dummyData = [
  { id: 1, name: "구자빈", account: "111-111-111" },
  { id: 2, name: "강현우", account: "222-222-222" },
  { id: 3, name: "안찬웅", account: "333-333-333" },
  { id: 4, name: "조예은", account: "444-444-444" },
  { id: 5, name: "최윤정", account: "555-555-555" },
  { id: 6, name: "김우리", account: "666-666-666" },
  { id: 7, name: "가우리", account: "777-777-777" },
  { id: 8, name: "나우리", account: "888-888-888" },
  { id: 9, name: "다우리", account: "999-999-999" },
  { id: 10, name: "라우리", account: "000-000-000" },
];
export default function Page() {
  const router = useRouter();
  const { selectedAccount, setSelectedAccount } = useTransactionStore();
  const handleSelect = (user) => {
    setSelectedAccount({
      id: user.id,
      name: user.name,
      account: user.account,
    });
    router.push(urlPath.TRANSFER);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg h-screen flex flex-col">
      <div className="flex justify-between p-4">
        <h1 className="text-lg font-bold">이체</h1>
        <button className="text-gray-500" onClick={() => router.push(urlPath.HOME)}>
          닫기
        </button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {dummyData.map((user) => (
          <TransactionList // 추후에 사진을 넣어야함
            key={user.id}
            name={user.name}
            account={user.account}
            bank={"우리은행"}
            isSelected={user.id === selectedAccount?.id}
            onClick={() => handleSelect(user)}
          />
        ))}
      </div>
    </div>
  );
}

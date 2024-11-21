"use client";

import { urlPath } from "@/src/constants/common";
import { useTransactionStore } from "@/src/stores/transactionStore";
import TransferItem from "@/src/ui/components/atoms/TransferItem";
import { useRouter } from "next/navigation";

const dummyData = [
  {
    id: 1,
    name: "구자빈",
    accountnumber: "111-111-111",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 2,
    name: "강현우",
    account: "222-222-222",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 3,
    name: "안찬웅",
    account: "333-333-333",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 4,
    name: "조예은",
    account: "444-444-444",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 5,
    name: "최윤정",
    account: "555-555-555",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 6,
    name: "김우리",
    account: "666-666-666",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 7,
    name: "가우리",
    account: "777-777-777",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 8,
    name: "나우리",
    account: "888-888-888",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 9,
    name: "다우리",
    account: "999-999-999",
    profile: "/images/dadapingImg.svg",
  },
  {
    id: 10,
    name: "라우리",
    account: "000-000-000",
    profile: "/images/dadapingImg.svg",
  },
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
    <div className="max-w-md mx-auto h-screen flex flex-col">
      <div className="flex justify-between p-4">
        <h1 className="text-R-20 text-black/80">이체</h1>
        <button
          className="text-black/70 text-R-20"
          onClick={() => router.push(urlPath.HOME)}
        >
          닫기
        </button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {dummyData.map((user) => (
          <TransferItem
            imgPath={user.profile}
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

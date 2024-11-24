"use client";
import { characterInfoMap } from "@/src/constants/common";
import { useAccountInfoStore } from "@/src/stores/accountStore";
import Profile from "@/src/ui/components/atoms/Profile";
import OneButtonAccountCard from "@/src/ui/components/home/\bEmptyAccountCard";
import BlueCardBox from "@/src/ui/components/home/BlueCardBox";
import { useEffect, useState } from "react";

const childAccountData = {
  parent: {
    name: "Jane Smith",
    accountNumber: "1111-2222-3333-4444",
    profile: "/images/dadapingImg",
    balance: 500000,
    color: "#FFD700",
    character: "CHACHAPING",
    accountId: 2,
  },
  children: [
    {
      id: 1,
      accountNumber: "1234-5678-9101-1121",
      balance: 300000,
      name: "김민수",
      state: "active",
      designType: "GOGOPING",
    },
    {
      id: 2,
      accountNumber: "2222-3333-4444-5555",
      balance: 450,
      name: "박지수",
      state: "inactive",
      designType: "HEARTSPRING",
    },
  ],
};

const emptyAccountDummyData = {
  parent: {
    name: "John Doe",
    accountNumber: null,
    profile: "/images/dadapingImg.svg",
    balance: null,
    color: null,
    character: null,
    accountId: 1,
  },
  children: [],
};

export default function ChildHome() {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [accountData, setAccountData] = useState(emptyAccountDummyData); // 자식이 없는 더미데이터로 초기화
  // 또는 const [accountData, setAccountData] = useState(childAccountData); // 자식이 있는 더미데이터로 초기화
  const [isLoading, setIsLoading] = useState(false); // 더미데이터를 사용하므로 로딩 불필요

  useEffect(() => {
    // 더미 데이터의 children이 있으면 첫 번째 자식을 선택
    if (accountData.children.length > 0) {
      setSelectedAccount(accountData.children[0]);
    }
  }, [setSelectedAccount]);

  const hasChildren = accountData?.children?.length > 0;

  return (
    <div className={`flex flex-col h-full`}>
      <div className="flex space-x-3 mb-6 ml-8 mt-4">
        {hasChildren ? (
          accountData.children.map((account) => (
            <div
              key={account.id}
              className="relative cursor-pointer"
              onClick={() => setSelectedAccount(account)}
            >
              <Profile
                accountInfo={account}
                imagePath={characterInfoMap[account.designType].imagePath}
                className="w-10 h-10 relative z-10 ring-1 ring-black/60"
              />
              {selectedAccount?.id !== account.id && (
                <div
                  className="absolute inset-0 bg-black/50 rounded-full pointer-events-none"
                  style={{ zIndex: 20 }}
                />
              )}
            </div>
          ))
        ) : (
          <div className="relative cursor-pointer">
            <Profile
              accountInfo={accountData.parent}
              imagePath={accountData.parent.profile}
              className="w-10 h-10 relative z-10 ring-1 ring-black/60"
            />
          </div>
        )}
      </div>

      {hasChildren ? (
        <div className="flex justify-center">
          <BlueCardBox />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <OneButtonAccountCard height="532px" />
        </div>
      )}
    </div>
  );
}

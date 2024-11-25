"use client";
import { characterInfoMap } from "@/src/constants/common";
import { useEffect, useState } from "react";
import Profile from "../../atoms/Profile";
import BlueCardBox from "../BlueCardBox";
import NoButtonAccountCard from "./AccountGuide";
import { useAccountInfoStore } from "@/src/stores/accountStore";

const accountDummyData = {
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

export default function AccountView() {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [accountData, setAccountData] = useState(accountDummyData);

  useEffect(() => {
    if (accountData.children.length > 0) {
      setSelectedAccount(accountData.children[0]);
    }
  }, [setSelectedAccount, accountData.children]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex space-x-3 mb-6 ml-1 mt-4">
        {accountData.children.length > 0 ? (
          // 자녀가 있는 경우 자녀 프로필들 표시
          accountData.children.map((child) => (
            <div
              key={child.id}
              className="relative cursor-pointer"
              onClick={() => setSelectedAccount(child)}
            >
              <Profile
                accountInfo={child}
                imagePath={characterInfoMap[child.designType].imagePath}
                className="w-10 h-10 relative z-10 ring-1 ring-black/60"
              />
              {selectedAccount?.id !== child.id && (
                <div
                  className="absolute inset-0 bg-black/50 rounded-full pointer-events-none"
                  style={{ zIndex: 20 }}
                />
              )}
            </div>
          ))
        ) : (
          // 자녀가 없는 경우 부모 프로필 표시
          <Profile
            accountInfo={accountData.parent}
            imagePath={accountData.parent.profile}
            className="w-10 h-10 relative z-10 ring-1 ring-black/60"
          />
        )}
      </div>
      <div className="flex justify-center">
        {accountData.children.length > 0 ? (
          <BlueCardBox selectedAccount={selectedAccount} />
        ) : (
          <NoButtonAccountCard />
        )}
      </div>
    </div>
  );
}

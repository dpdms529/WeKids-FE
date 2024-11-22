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
    profile: "/images/profile2.jpg",
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

const accountData = {
  parent: {
    name: "John Doe",
    accountNumber: null,
    profile: "/images/profile1.jpg",
    balance: null,
    color: null,
    character: null,
    accountId: 1,
  },
  children: [],
};

export default function MainHome() {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [accountData, setAccountData] = useState({
    parent: {
      name: "",
      accountNumber: null,
      profile: "/images/default-profile.jpg", // 기본 프로필 이미지 경로
      balance: null,
      color: null,
      character: null,
      accountId: null,
    },
    children: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/account-data");
        const data = await response.json();
        setAccountData(data);
        if (data.children.length > 0) {
          setSelectedAccount(data.children[0]);
        }
      } catch (error) {
        console.error("Error fetching account data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setSelectedAccount]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const hasChildren = accountData?.children?.length > 0;

  return (
    <div className={`flex flex-col h-full`}>
      <div className="flex space-x-3 mb-6 ml-8 mt-4">
        {hasChildren ? (
          // 자식 계정이 있는 경우 자식 프로필들 표시
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
          // 자식 계정이 없는 경우 부모 프로필만 표시
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
          <OneButtonAccountCard />
        </div>
      )}
    </div>
  );
}

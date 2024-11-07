"use client";
import useAccountInfoStore from "@/src/stores/useAccountInfoStore";
import Profile from "@/src/ui/Components/atoms/Modal/Profile";
import BlueCardBox from "@/src/ui/Components/home/BlueCardBox";
import { useEffect } from "react";

const childAccounts = [
  {
    id: 1,
    accountNumber: "3333-0073-0030-03",
    balance: 300000,
    name: "강현우",
    state: "active",
    designType: "WEBEE",
  },
  {
    id: 2,
    accountNumber: "3333-0073-0030-04",
    balance: 450000,
    name: "이준호",
    state: "inactive",
    designType: "BOMBOM",
  },
  {
    id: 3,
    accountNumber: "3333-0073-0030-05",
    balance: 120000,
    name: "김민수",
    state: "active",
    designType: "KU",
  },
];

export default function MainHome() {
  // 첫 번째 계좌를 초기값으로 설정
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();

  useEffect(() => {
    setSelectedAccount(childAccounts[0]);
  }, [setSelectedAccount]);

  const handleProfileClick = (accountInfo) => {
    console.log("Clicked account:", accountInfo); // 클릭 시 콘솔에 출력
    setSelectedAccount(accountInfo);
  };

  return (
    <div className={`flex flex-col justify-center items-center h-full`}>
      <div className="flex space-x-4">
        {childAccounts.map((account) => (
          <Profile
            key={account.id}
            accountInfo={account}
            onClick={() => handleProfileClick(account)} // onClick이 제대로 전달되었는지 확인
          />
        ))}
      </div>
      <BlueCardBox />
      {/* 선택된 계좌 정보 전달 */}
    </div>
  );
}

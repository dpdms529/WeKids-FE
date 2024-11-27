import { useState } from "react";
import AccountView from "./HasAccount";
import NoAccountView from "./NoAccountView";

const accountDummyData = {
  parent: {
    name: "Jane Smith",
    accountNumber: "1111-2222-3333-4444",
    profile: "/images/gogopingImg.svg",
    balance: 500000,
    color: "YELLOW",
    character: "GOGOPING",
    accountId: 2,
  },
  children: [
    {
      childId: 1,
      name: "최윤정",
      accountNumber: "1234-5678-9101-1121",
      profile: "/images/chachapingImg.svg",
      balance: 300000,
      accountId: 2,
      cardState: "ACTIVE",
      color: "GREEN",
      character: "CHACHAPING",
    },
    {
      childId: 2,
      name: "조예은",
      accountNumber: "1234-5678-9101-1121",
      profile: "/images/hachupingImg.svg",
      balance: 300000,
      accountId: 2,
      cardState: "ACTIVE",
      color: "PINK1",
      character: "HEARTSPRING",
    },
  ],
};

const parentOnlyDummyData = {
  parent: {
    name: "Jane Smith",
    accountNumber: "1111-2222-3333-4444",
    profile: "/images/chachapingImg.svg",
    balance: 500000,
    color: "PINK1",
    character: "CHACHAPING",
    accountId: 2,
  },
  children: [], // 빈 배열로 자식이 없음을 표시
};

const parentAccountNullDummyData = {
  parent: {
    name: "강현우",
    accountNumber: null,
    profile: "/images/chachapingImg.svg",
    balance: 500000,
    color: "BLUE",
    character: "CHACHAPING",
    accountId: 2,
  },
  children: [], // 빈 배열로 자식이 없음을 표시
};

export default function ParentHome() {
  const [accountData, setAccountData] = useState(accountDummyData);
  if (!accountData) {
    return <div>Loading...</div>;
  }

  if (accountData.parent.accountNumber == null) {
    return <NoAccountView accountData={accountData} />;
  }
  return <AccountView accountData={accountData} />;
}

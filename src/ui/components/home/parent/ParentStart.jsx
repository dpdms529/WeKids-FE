import { useState } from "react";
import AccountView from "./HasAccount";
import NoAccountView from "./NoAccountView";

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

const parentOnlyDummyData = {
  parent: {
    name: "강현우",
    accountNumber: "3333-0073-0030-03",
    profile: "/images/dadapingImg",
    balance: 300000,
    color: "#87CEEB", // 하늘색 계열
    character: "WEBEE",
    accountId: 1,
  },
  children: [], // 빈 배열로 자식이 없음을 표시
};

const parentAccountNullDummyData = {
  parent: {
    name: "강현우",
    accountNumber: null,
    profile: "/images/webeeImg",
    balance: 300000,
    color: "#87CEEB", // 하늘색 계열
    character: "WEBEE",
    accountId: 1,
  },
  children: [], // 빈 배열로 자식이 없음을 표시
};

export default function ParentHome() {
  const [accountData, setAccountData] = useState(parentOnlyDummyData);

  if (accountData.parent.accountNumber == null) {
    return <NoAccountView accountData={accountData} />;
  }
  return <AccountView accountData={accountData} />;
}

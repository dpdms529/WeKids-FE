"use client";
import {
  accountDummyData,
  useAccountInfoStore,
} from "@/src/stores/accountStore";
import { useEffect, useState } from "react";

export default function ParentHome() {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [accountData, setAccountData] = useState(accountDummyData);

  useEffect(() => {
    if (accountData.children.length > 0) {
      setSelectedAccount(accountData.children[0]);
    }
  }, [setSelectedAccount, accountData.children]);

  if (accountData.parent.accountNumber == null) {
    return <NoAccountView accountData={accountData} />;
  }
  return <AccountView accountData={accountData} />;
}

"use client";
import {
  parentOnlyDummyData,
  useAccountInfoStore,
} from "@/src/stores/accountStore";
import { useEffect, useState } from "react";
import Profile from "../../atoms/Profile";
import BlueCardBox from "../BlueCardBox";
import NoAccountCard from "./\bEmptyAccountCard";
import NoButtonAccountCard from "./AccountGuide";

export default function ParentHome() {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [accountData, setAccountData] = useState(parentOnlyDummyData);

  useEffect(() => {
    if (accountData.children.length > 0) {
      setSelectedAccount(accountData.children[0]);
    }
  }, [setSelectedAccount, accountData.children]);

  if (accountData.parent.accountNumber == null) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex space-x-3 mb-6 ml-8 mt-4">
          <Profile imagePath={accountData.parent.profile} />
        </div>
        <NoAccountCard />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex space-x-3 mb-6 ml-8 mt-4">
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

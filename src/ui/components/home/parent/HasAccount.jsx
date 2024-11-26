"use client";
import { useAccountInfoStore } from "@/src/stores/accountStore";

import { useEffect, useState } from "react";
import Profile from "../../atoms/Profile";
import BlueCardBox from "../BlueCardBox";
import NoButtonAccountCard from "./AccountGuide";

export default function AccountView({ accountData }) {
  const { selectedAccount, setSelectedAccount } = useAccountInfoStore();
  const [selectedProfile, setSelectedProfile] = useState("parent");
  useEffect(() => {
    setSelectedAccount(accountData.parent);
  }, []);
  return (
    <div className="flex flex-col h-full">
      <div className="flex space-x-3 mb-6 ml-1 mt-4">
        {/* 부모 프로필 */}
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setSelectedProfile("parent");
            setSelectedAccount(accountData.parent);
          }}
        >
          <Profile
            accountInfo={accountData.parent}
            imagePath={accountData.parent.profile}
            className="w-10 h-10 relative z-10 ring-1 ring-black/60"
          />
          {selectedProfile !== "parent" && (
            <div className="absolute inset-0 bg-black/50 rounded-full" />
          )}
        </div>

        {accountData.children.length > 0 ? (
          // 자녀가 있는 경우 자녀 프로필들 표시
          accountData.children.map((child) => (
            <div
              key={child.childId}
              className="relative cursor-pointer"
              onClick={() => {
                setSelectedProfile("child");
                setSelectedAccount(child);
              }}
            >
              <Profile
                accountInfo={child}
                imagePath={child.profile}
                className="w-10 h-10 relative z-10 ring-1 ring-black/60"
              />
              {selectedAccount?.id !== child.id && (
                <div className="absolute inset-0 bg-black/50 rounded-full" />
              )}
            </div>
          ))
        ) : (
          // 자녀가 없는 경우 빈 프로필 표시
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setSelectedProfile("child");
              setSelectedAccount(null);
            }}
          >
            <Profile
              accountInfo={{ name: "자녀" }}
              imagePath="/images/chachapingImg.svg"
              className="w-10 h-10 relative z-10 ring-1 ring-black/60"
            />
            {selectedProfile !== "child" && (
              <div className="absolute inset-0 bg-black/50 rounded-full" />
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center">
        {selectedAccount ? (
          <BlueCardBox selectedAccount={selectedAccount} />
        ) : (
          <NoButtonAccountCard />
        )}
      </div>
    </div>
  );
}

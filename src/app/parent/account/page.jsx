"use client";

import Identification from "@/src/ui/components/account/Identification";
import AccountList from "@/src/ui/components/account/AccountList";
import Header from "@/src/ui/layout/Header";
import { useState } from "react";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      {isClicked ? (
        <AccountList />
      ) : (
        <Identification setIsChecked={setIsClicked} />
      )}
    </div>
  );
}

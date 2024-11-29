"use client";

import Identification from "@/src/ui/components/account/Identification";
import Account from "@/src/ui/components/account/Account";
import Header from "@/src/ui/layout/Header";
import { useState } from "react";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col bg-white w-[393px] h-screen overflow-y-hidden">
      <Header />
      <div className="overflow-y-hidden scrollbar-hide">
        {isClicked ? (
          <Account />
        ) : (
          <Identification setIsChecked={setIsClicked} />
        )}
      </div>
    </div>
  );
}

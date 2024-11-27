"use client";

import Identification from "@/src/ui/components/account/Identification";
import Account from "@/src/ui/components/account/Account";
import Header from "@/src/ui/layout/Header";
import { useState } from "react";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col bg-white h-screen max-w-[393px] overflow-hidden">
      <Header />
      <div className="flex-flex-col h-full overflow-auto scrollbar-hide">
        {isClicked ? (
          <Account />
        ) : (
          <Identification setIsChecked={setIsClicked} />
        )}
      </div>
    </div>
  );
}

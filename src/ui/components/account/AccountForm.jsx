"use client";

import Identification from "@/src/ui/components/account/Identification";
import AccountList from "@/src/ui/components/account/AccountList";
import { useState } from "react";

export default function AccountForm() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
        {isClicked ? (
            <AccountList />
          ) : (
            <Identification setIsChecked={setIsClicked} />
          )}
        </>
    );
}
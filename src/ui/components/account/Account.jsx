import { urlPath } from "@/src/constants/common";
import AccountItem from "@/src/ui/components/signup/AccountItem";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Link from "next/link";

export default function Account() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const clickHandler = (e) => {
    if (selectedIndex == null) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-y-auto h-5/6 ">
        <AccountItem
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <div className="flex items-center ">
        <Link href={urlPath.HOME} onClick={clickHandler}>
          <CustomButton color={selectedIndex ? "main" : "gray"}>
            가져오기
          </CustomButton>
        </Link>
      </div>
    </>
  );
}

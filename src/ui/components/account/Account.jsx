import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import AccountItem from "@/src/ui/components/signup/AccountItem";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

export default function Page() {

    const [selectedIndex, setSelectedIndex] = useState(null);
  const router = useRouter();

    return (
        <>
        <AccountItem
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <div className="flex h-1/5 items-center">
        <CustomButton
          onClick={() => {
            router.push(urlPath.HOME);
          }}
        >
          가져오기
        </CustomButton>
      </div>
      </>
    );
}
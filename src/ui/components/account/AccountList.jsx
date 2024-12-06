import { fetchAccounts } from "@/src/apis/account";
import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Link from "next/link";
import ParentChildSelector from "../signup/ParentChildSelector";
import SelectorAccount from "../signup/SelectorAccount";
import { useEffect, useState } from "react";

export default function AccountList() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const clickHandler = (e) => {
    if (selectedIndex == null) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    console.log(selectedIndex);
    const fetchData = async () => {
      try {
        const response = await fetchAccounts();
        setData(response);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  const totalBalance = data.reduce((acc, item) => acc + item.balance, 0);

  const toggleAccountSelection = (index) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  let accountList = [];

  data.map((account, index) => {
    accountList.push(
      <ParentChildSelector
        key={index}
        isSelected={selectedIndex == index}
        className="my-2"
        onClick={() => toggleAccountSelection(index)}
      >
        <SelectorAccount
          name={account.bankName}
          account={account.accountNumber}
          balance={account.balance}
        />
      </ParentChildSelector>
    );
  });

  return (
    <div className="flex flex-col w-full h-full justify-around scrollbar-hide">
      <div className="w-full flex flex-col px-[25px]">
        <div className="text-R-28 text-black/80">내 계좌</div>
        <div className="pointer-events-none text-black/80 h-[48px] w-full flex text-R-20 bg-stone-300 hover:bg-neutral-400 rounded-[13px] items-center justify-between px-4 my-4">
          <span>총 {data.length} 개</span>
          <span>{totalBalance.toLocaleString()} 원</span>
        </div>
        <div className="w-full h-full overflow-y-scroll scrollbar-hide space-y-[40px]">
          {accountList}
        </div>
      </div>

      <Link href={urlPath.HOME} onClick={clickHandler}>
        <CustomButton color={selectedIndex !== null ? "main" : "gray"}>가져오기</CustomButton>
      </Link>
    </div>
  );
}

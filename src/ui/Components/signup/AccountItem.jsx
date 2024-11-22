import ParentChildSelector from "@/src/ui/Components/signup/ParentChildSelector";
import SelectorAccount from "@/src/ui/Components/signup/SelectorAccount";
import {useState} from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";

const dummyData = [
    { id: 1, name: "입출금 통장", account: "111-111-111", balance: 1000000 },
    { id: 2, name: "적금 통장", account: "222-222-222", balance: 1000000 },
    { id: 3, name: "예금 통장", account: "333-333-333", balance: 1000000 },
    { id: 4, name: "모임 통장", account: "444-4444-444", balance: 1000000 },
  ];

export default function AccountItem({selectedIndex, setSelectedIndex}) {

      const toggleAccountSelection = (index) => {
        setSelectedIndex((prev) => (prev === index ? null : index));
      };

      const totalBalance = dummyData.reduce((acc, item) => acc + item.balance, 0);
      const itemCount = dummyData.length;


return(
    <div className="flex flex-col h-4/5 mx-7">
    <div className="flex flex-col gap-5">
        <div className="pt-5">
            <span className="flex text-R-28 text-black/80">내 계좌</span>
        </div>
        <div className="flex">
        <dev className="pointer-events-none text-black/80 h-10 w-full flex text-R-20 bg-stone-300 hover:bg-neutral-400 rounded-[11px] items-center justify-between px-4 my-4" >
            <span className="text-left">총 {itemCount} 개</span>
            <span className="text-right">{totalBalance}원</span>
        </dev>
        </div>
    </div>
        <div className="flex flex-col w-full overflow-y-auto scrollbar-hide">
        {dummyData.map((account, index) => (
            <ParentChildSelector
            key={account.id}
            isSelected={selectedIndex == index}
            className="my-2"
            onClick={() => toggleAccountSelection(index)}
        >
            <SelectorAccount name={account.name} account={account.account} balance={account.balance} />
        </ParentChildSelector>
        ))}      
        </div>
    </div>    
    )

}
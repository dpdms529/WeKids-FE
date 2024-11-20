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

export default function AccountItem({}) {

    const [selectedAccounts, setSelectedAccounts] = useState(
        dummyData.map(() => false)
      );
      
      const toggleAccountSelection = (index) => {
        setSelectedAccounts((prev) =>
          prev.map((isSelected, idx) => (idx == index ? !isSelected : isSelected))
        );
      };

      const totalBalance = dummyData.reduce((acc, item) => acc + item.balance, 0);
      const itemCount = dummyData.length;


return(
    <div className="flex flex-col h-4/5 mx-7">
    <div className="flex flex-col gap-5">
        <div className="pt-5">
            <span className="flex text-R-28">내 계좌</span>
        </div>
        <div className="flex">
        <CustomButton rounded={true} color={"gray"} className="pointer-events-none h-10 flex items-center justify-between px-4" >
            <span className="text-left">총 {itemCount} 개</span>
            <span className="text-right">{totalBalance}원</span>
        </CustomButton>
        </div>
    </div>
        <div className="flex flex-col my-4 w-full overflow-y-auto scrollbar-hide">
        {dummyData.map((account, index) => (
            <ParentChildSelector
            key={account.id}
            isSelected={selectedAccounts[index]}
            className="my-4"
            onClick={() => toggleAccountSelection(index)}
        >
            <SelectorAccount name={account.name} account={account.account} balance={account.balance} />
        </ParentChildSelector>
        ))}      
        </div>
    </div>    
    )

}
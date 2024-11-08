import React from "react";
import Profile from "./Profile";
import Link from "next/link";

const TransactionList = ({ name, account, bank, isSelected, onClick }) => {
  return (
    <div
      // onClick={onClick}
      className={`cursor-pointer flex items-center p-4 border ${
        isSelected ? "border-black bg-gray-400" : "border-transparent"
      }`}
    >
      <Link href="/transfer">
        <Profile height={"h-[50px]"} width={"w-[50px]"} />
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-gray-500 text-sm">
            {bank} {account}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default TransactionList;

import React from "react";
import Profile from "./Profile";

const TransferItem = ({ name, account, bank, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex items-center p-4 border ${
        isSelected ? "border-black " : "border-stone-300"
      }`}
    >
      <Profile height={"h-[50px]"} width={"w-[50px]"} />
      <div className="ml-4">
        <p className="text-B-14">{name}</p>
        <p className="text-neutral-400  text-R-14">
          {bank} {account}
        </p>
      </div>
    </div>
  );
};

export default TransferItem;

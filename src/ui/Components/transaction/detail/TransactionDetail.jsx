import React from "react";

const TransactionDetail = ({ label, value }) => {
  return (
    <div className="flex justify-between my-6">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default TransactionDetail;

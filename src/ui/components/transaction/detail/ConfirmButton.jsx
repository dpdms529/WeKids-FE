"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { urlPath } from "@/src/constants/common";
import CustomButton from "../../atoms/CustomButton";

const ConfirmButton = () => {
  const router = useRouter();

  const handleClickConfirm = () => {
    router.push(urlPath.TRANSACTION_HISTORY);
  };

  return <CustomButton onClick={handleClickConfirm}>확인</CustomButton>;
};

export default ConfirmButton;

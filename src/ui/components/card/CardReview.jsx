"use client";
import { useAccountStore } from "@/src/stores/userStore";
import CardRequestReview from "@/src/ui/components/card/CardRequestReview";
import InnerText from "@/src/ui/components/card/InnerText";
import { useEffect } from "react";

export default function CardReview() {
  const { accountInfo } = useAccountStore();

  useEffect(() => {
    console.log(accountInfo.name)
  },[])

  return (
    <CardRequestReview>
      <InnerText name1={accountInfo ? accountInfo.name : ""} name2={"조예은"} />
    </CardRequestReview>
  );
}

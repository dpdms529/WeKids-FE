"use client";
import { useAccountStore } from "@/src/stores/userStore";
import CardRequestReview from "@/src/ui/components/card/CardRequestReview";
import InnerText from "@/src/ui/components/card/InnerText";

export default function CardReview() {
  const { accountInfo } = useAccountStore();

  return (
    <CardRequestReview>
      <InnerText name1={accountInfo.name} name2={"조예은"} />
    </CardRequestReview>
  );
}

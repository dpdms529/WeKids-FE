import TransferComplete from "@/src/ui/components/transfer/TransferComplete";

export default async function TransferDonePage() {
  const transferData = {
    sendUser: "xx",
    amount: "xx",
    accountNumber: "1234567890123",
    bankName: "우리",
    memo: "메모입력..",
  };

  return <TransferComplete transferData={transferData} type="CONFIRM" />;
}

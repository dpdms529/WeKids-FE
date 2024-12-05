
import { getParentsAccounts } from "@/src/apis/parents";
import TransferDetail from "@/src/ui/components/transfer/TransferDetail";

export default async function Page() {
  
  const data = await getParentsAccounts();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white mt-5">
      <TransferDetail userdata={data} />
    </div>
  );
}

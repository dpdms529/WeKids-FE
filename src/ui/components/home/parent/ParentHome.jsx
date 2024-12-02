import { getParentsAccounts } from "@/src/services/parents";
import EmptyAccountCard from "./EmptyAccountCard";
import AccountView from "./HasAccount";

export default async function ParentHome() {
  const data = await getParentsAccounts();

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.parent.accountNumber === null) {
    return <EmptyAccountCard />;
  }

  return <AccountView accountData={data} />;
}

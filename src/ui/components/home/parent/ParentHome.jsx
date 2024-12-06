import { getParentsAccounts } from "@/src/apis/parents";
import AccountView from "./HasAccount";
import NoAccountCard from "./NoAccountCard";

export default async function ParentHome() {
  const data = await getParentsAccounts();

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.parent.accountNumber === null) {
    return <NoAccountCard name={data.parent.name} />;
  }

  return <AccountView accountData={data} />;
}

import AccountView from "./HasAccount";
import { getParentsAccounts } from "@/src/services/parents";
import NoAccountView from "./NoAccountView";

export default async function ParentHome() {
  const data = await getParentsAccounts();

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.parent.accountNumber === null) {
    return <NoAccountView />;
  }

  return <AccountView accountData={data} />;
}

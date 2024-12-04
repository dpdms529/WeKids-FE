import { getChildAccounts } from "@/src/apis/child";
import BlueCardBox from "../BlueCardBox";
import EmptyAccountCard from "./EmptyAccountCard";

export default async function ChildHome() {
  const data = await getChildAccounts();
  // const data = await childAccountData;
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.accountNumber === null) {
    return <EmptyAccountCard name={data.name} />;
  }

  return <BlueCardBox selectedAccount={data} />;
}

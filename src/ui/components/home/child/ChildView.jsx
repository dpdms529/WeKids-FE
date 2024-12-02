import BlueCardBox from "../BlueCardBox";
import EmptyAccountCard from "./EmptyAccountCard";

const childAccountData = {
  childId: 1,
  name: "최윤정",
  accountNumber: "1234-5678-9101-1121",
  profile: "/images/chachapingImg.svg",
  balance: 300000,
  accountId: 2,
  cardState: "ACTIVE",
  color: "GREEN",
  character: "CHACHAPING",
};
const childAccountNullData = {
  childId: 1,
  name: "최윤정",
  accountNumber: null,
  profile: "/images/chachapingImg.svg",
  balance: 300000,
  accountId: 2,
  cardState: "ACTIVE",
  color: "GREEN",
  character: "CHACHAPING",
};

export default async function ChildHome() {
  // const data = await getchildAccounts();
  const data = await childAccountData;

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.accountNumber === null) {
    return <EmptyAccountCard name={data.name} />;
  }

  return <BlueCardBox selectedAccount={data} />;
}

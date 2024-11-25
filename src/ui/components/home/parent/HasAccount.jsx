export default function AccountStatusRouter({ accountData }) {
  if (accountData.parent.accountNumber == null) {
    return <NoAccountView accountData={accountData} />;
  }
  return <AccountView accountData={accountData} />;
}

import Profile from "../../atoms/Profile";
import NoAccountCard from "./EmptyAccountCard";

export default function NoAccountView({ accountData }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex space-x-3 mb-6 ml-8 mt-4">
        <Profile
          accountInfo={accountData.parent}
          imagePath={accountData.parent.profile}
          className="w-10 h-10 relative z-10 ring-1 ring-black/60"
        />
      </div>
      <div className="flex justify-center">
        <NoAccountCard />
      </div>
    </div>
  );
}

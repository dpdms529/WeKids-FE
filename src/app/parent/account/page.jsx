
import AccountForm from "@/src/ui/components/account/AccountForm";
import Header from "@/src/ui/layout/Header";

export default function Page() {
  
  return (
    <div className="flex flex-col w-full h-screen overflow-y-hidden">
      <Header />
      <AccountForm />
    </div>
  );
}

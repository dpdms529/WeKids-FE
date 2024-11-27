import MainHome from "../ui/components/home/MainHome";
import Header from "../ui/layout/Header";
import "./globals.css";
import { SignOut } from "../ui/components/auth/SignOut";

export default async function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <MainHome />
        <SignOut />
      </div>
    </div>
  );
}

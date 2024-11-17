import Header from "../ui/layout/Header";
import MainHome from "./(home)/page";
import "./globals.css";
import { SignOut } from "../ui/components/auth/SignOut";

export default async function Home() {
  return (
    <div>
      <Header />
      <MainHome className="flex justify-center items-center" />
      <SignOut />
    </div>
  );
}

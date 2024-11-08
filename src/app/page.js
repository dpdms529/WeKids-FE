import Header from "../ui/layout/Header";
import MainHome from "./(home)/page";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <MainHome className="flex justify-center items-center" />
    </div>
  );
}

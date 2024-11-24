import MainHome from "../ui/components/home/MainHome";
import Header from "../ui/layout/Header";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <MainHome />
      </div>
    </div>
  );
}

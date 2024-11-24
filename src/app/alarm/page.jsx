import Header from "@/src/ui/layout/Header";
import AlarmCard from "@/src/ui/components/atoms/AlarmCard"


export default function Page() {
  return (
   <div className="flex flex-col w-full h-screen overflow-hidden">
    <Header />
    <div className="flex flex-col w-full h-5/6 overflow-y-auto scrollbar-hide">
      <AlarmCard />
      
    </div>
    <div className="flex justify-center items-center h-1/6 text-R-10 text-black/40">
      받은 알림은 30일동안 보관됩니다.
    </div>
   </div>
  );
}

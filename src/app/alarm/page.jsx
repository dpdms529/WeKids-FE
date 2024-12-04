import { fetchAlarmData } from "@/src/apis/alarm";
import AlarmComponent from "@/src/ui/components/alarm/AlarmComponent";
import Header from "@/src/ui/layout/Header";

export default async function AlarmPage() {

  const data = await fetchAlarmData();

  

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Header />
      <AlarmComponent data={data} />
    </div>
  );
}

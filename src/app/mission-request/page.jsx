import MissionDetail from "@/src/ui/components/mission/MissionDetail";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden justify-center items-center p-10 gap-2">
      <MissionDetail type="request" />
    </div>
  );
}

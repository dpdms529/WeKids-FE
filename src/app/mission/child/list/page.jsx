"use client";
import Header from "@/src/ui/layout/Header";
import MissionList from "@/src/ui/components/mission/list/MissionList";
import StateBadge from "@/src/ui/components/mission/list/StateBadge";

export default function Page() {
  const states = ["ACC", "NEW", "PRO", "REJ", "DONE"];
  const isParent = false; // 현재 child 페이지이므로 false

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex gap-1 px-10 py-6">
        {states.map((state) => (
          <StateBadge
            key={state}
            state={state}
            isParent={false}
            isHeader={true}
          />
        ))}
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <MissionList isParent={isParent} />
        </div>
      </div>
    </div>
  );
}

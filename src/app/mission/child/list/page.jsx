"use client";
import Header from "@/src/ui/layout/Header";
import MissionList from "@/src/ui/components/mission/list/MissionList";

export default function Page() {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <MissionList isParent={false} />
          </div>
        </div>
      </div>
    );
  }
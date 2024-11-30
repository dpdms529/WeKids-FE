"use client";
import Header from "@/src/ui/layout/Header";
import MissionList from "@/src/ui/components/mission/MissionList";

export default function Page() {
    return (
      <div className="flex flex-col h-screen">
        <Header />
        <div className="p-4">
          <h2 className="text-lg mb-4">아이 선택 및 필터링 여하고 부분</h2>
          <MissionList />
        </div>
      </div>
    );
  }
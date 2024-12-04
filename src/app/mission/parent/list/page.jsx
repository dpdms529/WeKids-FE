"use client";
import Header from "@/src/ui/layout/Header";
import MissionList from "@/src/ui/components/mission/list/MissionList";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

export default function Page() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="p-4 flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <MissionList isParent={true} />
        </div>
      </div>

      <div className="flex justify-center mt-auto mb-4">
        <CustomButton size="medium" color="main" rounded={true}>
          미션 등록
        </CustomButton>
      </div>
    </div>
  );
}

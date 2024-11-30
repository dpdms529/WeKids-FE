"use client";
import Header from "@/src/ui/layout/Header";
import MissionList from "@/src/ui/components/mission/MissionList";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

export default function Page() {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="p-4 flex-1 overflow-hidden flex flex-col">
          <h2 className="text-lg mb-4">아이 선택 및 필터링 여하고 부분</h2>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <MissionList />
          </div>
        </div>
        
        <div className="flex justify-center mt-auto mb-4">
          <CustomButton 
            size="medium"
            color="main"
            rounded={true}
          >
            미션등록
          </CustomButton>
        </div>
        
      </div>
    );
  }
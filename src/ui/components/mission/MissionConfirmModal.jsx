'use client'
import { useEffect } from "react";
import CustomButton from "../atoms/CustomButton";

export default function MissionConfirmModal({ setParentOpen, setOpen, text, onClick, denied, missionId }) {
  const handleConfirm = () => {
    setParentOpen(false);
    setOpen(false);
    if(onClick){
      onClick();
    }
  };

  useEffect(() => {
    if(denied) {
      useEffect(() => {
        const deleteMissionHandler = async () => {
          try {
            const result = await deleteMission({ missionId });
            if (result) {
              console.log("Mission deletion response:", result);
            } else {
              console.log("Mission deleted successfully");
            }
          } catch (error) {
            console.error("Error deleting mission:", error);
          }
        };
    
        if (missionId) {
          deleteMissionHandler();
        }
      }, [missionId]);
    }
  })

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[360px] h-[210px] rounded-lg shadow-lg p-8 pt-12 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        <div className="flex flex-col items-center gap-12">
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="text-R-14 text-black/80"
          ></div>
          <div className="w-full h-[40px]">
            <CustomButton
              size="mediumLarge"
              onClick={handleConfirm}
              className="w-full"
              rounded={true}
            >
              확인
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

import Modal from "@/src/ui/components/atoms/Modal";
import Image from "next/image";

export const MissionFilterModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      modalHandler={onClose}
      height="h-[400px]"
    >
      <div className="p-6">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={onClose} className="text-2xl">×</button>
          <span className="text-black/80">확인</span>
        </div>

        {/* 자녀 필터 */}
        <div className="mb-12">
          <h3 className="text-B-14 text-lg mb-1">자녀</h3>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-50 rounded-lg text-gray-500">
                ALL
              </button>
              <button className="px-4 py-2 bg-gray-50 rounded-lg text-gray-500">
                자녀 2
              </button>
              <button className="px-4 py-2 bg-gray-50 rounded-lg text-gray-500">
                자녀 3
              </button>
              <button className="px-4 py-2 bg-gray-50 rounded-lg text-gray-500">
                자녀 3
              </button>
            </div>
          </div>
        </div>

        {/* 미션 필터 */}
        <div>
          <h3 className="text-B-14 text-lg mb-1">미션</h3>
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-3 gap-2 mb-2">
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded-lg">
                <Image 
                  src="/images/trashImg.svg" 
                  alt="청소" 
                  width={16} 
                  height={16}
                />
                <span className="text-gray-500">청소</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded-lg">
                <Image 
                  src="/images/pencilImg.svg" 
                  alt="자기계발" 
                  width={16} 
                  height={16}
                />
                <span className="text-gray-500">자기계발</span>
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 rounded-lg">
                <Image 
                  src="/images/pinImg.svg" 
                  alt="생활습관" 
                  width={16} 
                  height={16}
                />
                <span className="text-gray-500">생활습관</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
              <Image 
                src="/images/ectImg.svg"
                alt="기타" 
                width={16} 
                height={16}
              />  
              <span className="text-gray-500">기타</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
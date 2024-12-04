import Modal from "@/src/ui/components/atoms/Modal";
import Image from "next/image";
import { useMissionFilterStore } from "@/src/stores/missionFilterStore";

export const MissionFilterModal = ({ isOpen, onClose }) => {
  const { selectedChild, setSelectedChild, selectedCategory, setSelectedCategory } = useMissionFilterStore();

  const children = ['ALL', '안찬웅', '최윤정', '구자빈'];
  const categories = [
    { id: 'HOUSE_WORK', name: '청소', icon: 'trashImg' },
    { id: 'SELF_DEVELOPMENT', name: '자기계발', icon: 'pencilImg' },
    { id: 'LIFE_HABITS', name: '생활습관', icon: 'pinImg' },
    { id: 'ETC', name: '기타', icon: 'ectImg' }
  ];

  return (
    <Modal isOpen={isOpen} modalHandler={onClose} height="h-[400px]">
      <div className="p-6">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
        <button onClick={onClose} className="p-1">
            <Image 
              src="/images/cross.svg"
              alt="닫기"
              width={20}
              height={20}
            />
          </button>
          <button 
            onClick={onClose}
            className="text-black/80 hover:text-black transition-colors"
          >
            확인
          </button>
        </div>

        {/* 자녀 필터 */}
        <div className="mb-12">
          <h3 className="text-B-14 mb-1">자녀</h3>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex gap-2">
              {children.map((child) => (
                <button
                  key={child}
                  className={`px-4 py-2 rounded-lg text-black/40 transition-colors
                    ${selectedChild === child ? 'bg-main02' : 'bg-gray-200/20'}`}
                  onClick={() => setSelectedChild(child)}
                >
                  {child}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 미션 필터 */}
        <div>
          <h3 className="text-B-14 mb-1">미션</h3>
          <div className="border-t text-gray01 pt-4">
            <div className="grid grid-cols-3 gap-2 mb-2">
              {categories.slice(0, 3).map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors
                    ${selectedCategory === category.id ? 'bg-main02' : 'bg-gray-200/20'}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Image 
                    src={`/images/${category.icon}.svg`}
                    alt={category.name}
                    width={16}
                    height={16}
                  />
                  <span className="text-black/40">{category.name}</span>
                </button>
              ))}
            </div>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${selectedCategory === 'ETC' ? 'bg-main02' : 'bg-gray-200/20'}`}
              onClick={() => setSelectedCategory('ETC')}
            >
              <Image 
                src="/images/ectImg.svg"
                alt="기타"
                width={16}
                height={16}
              />
              <span className="text-black/40">기타</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
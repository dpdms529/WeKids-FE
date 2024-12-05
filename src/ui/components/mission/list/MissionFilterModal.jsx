"use client";
import { fetchChildAccounts } from "@/src/apis/account";
import { useMissionFilterStore } from "@/src/stores/missionFilterStore";
import Modal from "@/src/ui/components/atoms/Modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import CategoryBadge from "./CategoryBadge";

export const MissionFilterModal = ({ isOpen, onClose }) => {
  const {
    selectedChild,
    setSelectedChild,
    selectedCategory,
    setSelectedCategory,
  } = useMissionFilterStore();

  const [children, setChildren] = useState([]);

  useEffect(() => {
    const loadChildAccounts = async () => {
      try {
        const accounts = await fetchChildAccounts();
        setChildren(accounts);
      } catch (error) {
        console.error("Failed to fetch child accounts:", error);
      }
    };

    loadChildAccounts();
  }, []);

  const categories = [
    { type: "HOUSE_WORK" },
    { type: "SELF_DEVELOPMENT" },
    { type: "LIFESTYLE_HABITS" },
    { type: "ETC" },
  ];

  return (
    <Modal isOpen={isOpen} modalHandler={onClose}>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <button onClick={onClose}>
            <Image src="/images/cross.svg" alt="닫기" width={24} height={24} />
          </button>
          <button onClick={onClose} className="text-B-16">
            확인
          </button>
        </div>

        {/* 자녀 필터 */}
        <div className="mt-8">
          <h3 className="text-B-16 text-sub01">자녀</h3>
          <div className="border-t border-gray01/10 pt-4 mt-4">
            <div className="flex gap-2">
              {/* ALL 버튼 */}
              <button
                onClick={() => setSelectedChild(null)}
                className={`px-4 py-2 rounded-lg ${
                  selectedChild === null
                    ? "bg-main02 text-white"
                    : "bg-gray01/10 text-sub02"
                }`}
              >
                All
              </button>

              {/* 자녀 리스트 */}
              {children.map((child) => (
                <button
                  key={child.accountId}
                  onClick={
                    () =>
                      selectedChild?.accountId === child.accountId
                        ? setSelectedChild(null) // 자녀 선택 해제
                        : setSelectedChild(child) // 자녀 선택
                  }
                  className={`px-4 py-2 rounded-lg ${
                    selectedChild?.accountId === child.accountId
                      ? "bg-main02 text-white"
                      : "bg-gray01/10 text-sub02"
                  }`}
                >
                  {child.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 미션 필터 */}
        <div className="mt-8">
          <h3 className="text-B-16 text-sub01">미션</h3>
          <div className="border-t border-gray01/10 pt-4 mt-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <CategoryBadge
                  key={category.type}
                  missionType={category.type}
                  isButton={true}
                  onClick={() => setSelectedCategory(category.type)}
                  selected={selectedCategory === category.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

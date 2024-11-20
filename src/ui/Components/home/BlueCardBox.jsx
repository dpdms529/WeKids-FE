"use client";

import { characterInfoMap, urlPath } from "@/src/constants/common"; // 상대 경로로 불러오기
import { useAccountInfoStore } from "@/src/stores/accountStore";
import { CopyIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlueCardBox = () => {
  const { selectedAccount } = useAccountInfoStore(); // Zustand에서 selectedAccount 가져오기
  const [backgroundColorClass, setBackgroundColorClass] = useState(""); // backgroundColorClass 상태 추가

  const router = useRouter();

  useEffect(() => {
    if (selectedAccount) {
      console.log("selectedAccount.desginType: " + selectedAccount.designType);
      const accountCharacterInfo =
        characterInfoMap[selectedAccount.designType] || [];

      console.log("accountCharacterInfo.name " + accountCharacterInfo.name);

      const bgClass = accountCharacterInfo.colorClass
        ? `${accountCharacterInfo.colorClass}` // 예: bg-color-dalbo
        : "bg-main02"; // colorClass가 없으면 기본값을 bg-main02로 설정

      console.log("bgClass " + bgClass);

      setBackgroundColorClass(bgClass); // 상태 업데이트
    }
  }, [selectedAccount]);

  if (!selectedAccount) return <div>계좌를 선택해주세요.</div>;

  const handleCopy = async () => {
    if (selectedAccount) {
      try {
        await navigator.clipboard.writeText(selectedAccount.accountNumber); // 계좌번호 복사
        setIsCopied(true);
      } catch (err) {
        console.error("복사 실패:", err);
      }
    }
  };

  return (
    <div
      className={`${backgroundColorClass} w-[330px] h-[252px] text-black rounded-[10px] relative overflow-hidden`}
    >
      <div className="p-5">
        <div className="w-[180px]">
          <div className="flex items-center space-x-2">
            <Text className="text-R-10">{selectedAccount.accountNumber}</Text>
            <CopyIcon onClick={handleCopy} className="cursor-pointer" />
          </div>

          <Text className="text-B-28 mt-8">{selectedAccount.name}</Text>
        </div>
      </div>

      {/* 금액 위치 중앙 고정 */}
      <div className="absolute w-full bottom-20 text-center z-10">
        <Text className="text-R-28">
          {selectedAccount.balance.toLocaleString()} 원
        </Text>
      </div>

      {/* 캐릭터 이미지 컨테이너 수정 */}
      <div className="absolute right-0 top-0 w-[200px] h-[252px] overflow-hidden">
        <img
          src={characterInfoMap[selectedAccount.designType].imagePath}
          alt="Mascot"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "top right",
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
          }}
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex text-black">
          <button
            className="flex-1 py-4 text-center text-R-20 border-r border-black hover:bg-white/10 transition-colors"
            onClick={() => router.push(urlPath.TRANSACTION_HISTORY)}
          >
            조회
          </button>
          <button
            className="flex-1 py-4 text-center text-R-20 hover:bg-white/10 transition-colors"
            onClick={() => router.push(urlPath.ACCOUNT_LIST)}
          >
            이체
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueCardBox;

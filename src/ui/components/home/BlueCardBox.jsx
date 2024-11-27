"use client";

import { characterInfoMap, urlPath } from "@/src/constants/common"; // 상대 경로로 불러오기
import { CopyIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Toaster 및 toast 불러오기

const BlueCardBox = ({ selectedAccount }) => {
  const [backgroundColorClass, setBackgroundColorClass] = useState(""); // backgroundColorClass 상태 추가

  useEffect(() => {
    if (selectedAccount) {
      const accountCharacterInfo =
        characterInfoMap[selectedAccount.character] || [];

      const bgClass = accountCharacterInfo.colorClass
        ? `${accountCharacterInfo.colorClass}` // 예: bg-color-dalbo
        : "bg-main02"; // colorClass가 없으면 기본값을 bg-main02로 설정

      setBackgroundColorClass(bgClass); // 상태 업데이트
    }
  }, [selectedAccount]);

  if (!selectedAccount) return <div>계좌를 선택해주세요.</div>;

  const handleCopy = async () => {
    if (selectedAccount) {
      try {
        await navigator.clipboard.writeText(selectedAccount.accountNumber); // 계좌번호 복사
        toast.success("복사가 완료되었습니다!"); // 토스트 메시지 표시
      } catch (err) {
        toast.error("복사에 실패했습니다."); // 복사 실패 시 메시지 표시
        console.error("복사 실패:", err);
      }
    }
  };

  return (
    <div
      className={`${backgroundColorClass} w-[330px] h-[252px] text-black rounded-[10px] relative overflow-hidden`}
    >
      {/* Toaster 컴포넌트 */}
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="p-5">
        <div className="w-[180px]">
          <div className="flex items-center space-x-2 mt-3">
            <Text className="text-R-10">{selectedAccount.accountNumber}</Text>
            <CopyIcon onClick={handleCopy} className="cursor-pointer" />
          </div>
          <Text className="text-B-28 mt-9">{selectedAccount.name}</Text>
        </div>
      </div>
      {/* 금액 위치 중앙 고정 */}
      <div className="absolute w-full bottom-20 text-right pr-7">
        <Text className="text-R-28">
          {selectedAccount.balance.toLocaleString()} 원
        </Text>
      </div>
      {/* 캐릭터 이미지 컨테이너 수정 */}
      <div className="absolute right-0 bottom-[75px] w-[180px] h-[180px] overflow-hidden">
        <Image
          width={0}
          height={0}
          src={characterInfoMap[selectedAccount.character].imagePath}
          alt="Mascot"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "top right",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)",
          }}
        />
      </div>
      {console.log("selectedAccount.color " + selectedAccount.color)}
      <div className="absolute bottom-0 w-full">
        <div className="w-full h-[1px] bg-black"></div>
        <div className="flex text-black">
          <Link
            href={`${urlPath.TRANSACTION_HISTORY}?color=${selectedAccount.color}`}
            className="flex-1 py-4 text-center text-R-20 border-r border-black hover:bg-white/10 transition-colors"
          >
            <button>조회</button>
          </Link>
          <Link
            href={urlPath.TRANSFER}
            className="flex-1 py-4 text-center text-R-20 hover:bg-white/10 transition-colors"
          >
            <button>이체</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlueCardBox;

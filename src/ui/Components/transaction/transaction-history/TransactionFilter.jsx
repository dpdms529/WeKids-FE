"use client";
import { useTransFilterStore } from "@/src/stores/transactionStore";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { TransFilterModal } from "./TransFilterModal";

export const TransactionFilter = () => {
  const { range, setRange } = useTransFilterStore();
  const { type, setType } = useTransFilterStore();
  const { sortingType, setSortingType } = useTransFilterStore();
  const { search, setSearch } = useTransFilterStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box>
      <Flex
        direction="row"
        align="center"
        justify="between"
        className="bg-white h-[7vh] p-3"
      >
        <div>
          <Flex
            className="items-center gap-2" // flex 컨테이너로 정렬 추가
          >
            {/* 돋보기 아이콘 */}
            <Box onClick={() => alert("click")}>
              <MagnifyingGlassIcon width={24} height={24} />
            </Box>

            {/* 입력 필드 박스 */}
            <Flex className="items-center border border-stone-300 rounded-md h-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[180px] placeholder-black/40 bg-transparent border-none outline-none text-neutral-400 text-xs"
              />
            </Flex>
          </Flex>
        </div>
        <Box
          onClick={() => setIsModalOpen(true)}
          className="text-R-12 text-black/80"
        >
          {`${range} · ${type} · ${sortingType} ▼`}
        </Box>
      </Flex>
      {isModalOpen && (
        <TransFilterModal onClose={() => setIsModalOpen(false)} />
      )}
    </Box>
  );
};

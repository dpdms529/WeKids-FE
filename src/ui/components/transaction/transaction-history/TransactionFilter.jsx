"use client";
import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { TransFilterModal } from "./TransFilterModal";
import { useTransFilterStore, RangeEnum } from "@/src/stores/transactionStore";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const TransactionFilter = () => {
  const { range, setRange } = useTransFilterStore();
  const { type, setType } = useTransFilterStore();
  const { sortingType, setSortingType } = useTransFilterStore();
  const { search, setSearch } = useTransFilterStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box>
      <Flex direction="row" align="center" justify="between" className="bg-white h-[7vh] p-3">
        <Flex>
          <Box onClick={() => alert("click")} className="pr-2">
            <MagnifyingGlassIcon width={24} height={24} fill="#666666" color="#666666" />
          </Box>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full placeholder-gray-400 bg-transparent border-none outline-none text-slate-500"
          />
        </Flex>
        <Box onClick={() => setIsModalOpen(true)} className="text-xs font-medium text-gray-700">
          {`${range} · ${type} · ${sortingType} ▼`}
        </Box>
      </Flex>
      {isModalOpen && <TransFilterModal onClose={() => setIsModalOpen(false)} />}
    </Box>
  );
};

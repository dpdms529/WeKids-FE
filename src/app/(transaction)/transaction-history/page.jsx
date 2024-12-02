"use client";
import TopBar from "@/src/ui/components/transaction/transaction-history/TopBar";
import { TransactionFilter } from "@/src/ui/components/transaction/transaction-history/TransactionFilter";
import { TransactionsView } from "@/src/ui/components/transaction/transaction-history/TransactionsView";
import { Box, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParam = useSearchParams(); // useSearchParams 훅 사용
  const color = searchParam.get("color");
  const [balance, setBalance] = useState(0);

  return (
    <section>
      <Flex direction="column" justify="between">
        <Box>
          <TopBar name="조예은" balance={balance} accountNumber="1111-11-111111" />
        </Box>
        <Box className="cursor-pointer">
          <TransactionFilter />
        </Box>
        <Box>
          {/* todo 여기에 AccountHistoryHead에 들어가는
          더미 불러올 때 받아오는 id 값 넣어주면 됨 */}
          <TransactionsView accountId="4" setBalance={setBalance} />
        </Box>
      </Flex>
    </section>
  );
}

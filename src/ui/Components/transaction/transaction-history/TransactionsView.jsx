"use client";
import { urlPath } from "@/src/constants/common";
import { AccountTransactionTypeEnum } from "@/src/constants/transaction";
import { useTransFilterStore } from "@/src/stores/transactionStore";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export const TransactionsView = ({ transactionId }) => {
  const [transactions, setTransactions] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { search, sortingType } = useTransFilterStore();

  const loadMore = () => {
    if (transactions.length >= 20) {
      setHasMore(false);
      return;
    }

    const newTransactions = [
      {
        accountTransactionId: 1,
        title: "카카오페이",
        type: "출금",
        amount: 1000,
        balance: 50000,
        create_at: "2024-9-30 15:45:30",
      },
      {
        accountTransactionId: 2,
        title: "카카오페이",
        type: "입금",
        amount: 1000,
        balance: 50000,
        create_at: "2024-9-30 15:45:30",
      },
    ];

    setTransactions((prev) => [...prev, ...newTransactions]);
  };

  // 날짜 포맷 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(
      date.getDate()
    ).padStart(2, "0")}`;
  };

  // 검색어에 따라 필터링된 트랜잭션
  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      // 날짜 정렬 적용
      if (sortingType === "최신순") {
        return new Date(b.date) - new Date(a.date); // 최신순 (큰 날짜가 먼저)
      } else {
        return new Date(a.date) - new Date(b.date); // 과거순 (작은 날짜가 먼저)
      }
    });

  return (
    <Flex direction="column" className="bg-white h-[53vh] overflow-auto">
      <Link href={`${urlPath.TRANSACTION_HISTORY}/${transactionId}`}>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={
            <div className="loader text-black/80 text-R-20" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {filteredTransactions.map((transaction, index) => (
            <div key={index} className="border-b border-gray-100 p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <span className="text-gray-600 text-R-14">
                      {formatDate(transaction.create_at)}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-R-14">{transaction.title}</span>
                      <span className="text-main01 text-R-10 mt-2">
                        #{transaction.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`text-R-18 ${
                      transaction.type === AccountTransactionTypeEnum.DEPOSIT
                        ? "text-main01"
                        : ""
                    }`}
                  >
                    {transaction.type === AccountTransactionTypeEnum.WITHDRAWAL
                      ? "-"
                      : ""}
                    {transaction.amount.toLocaleString()}원
                  </span>
                  <span className="text-neutral-400 text-R-14 mt-2">
                    {transaction.balance.toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </Link>
    </Flex>
  );
};

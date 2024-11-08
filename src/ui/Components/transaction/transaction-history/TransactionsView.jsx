"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Flex } from "@radix-ui/themes";
import { TransactionItem } from "./TransactionItem";
import { useTransFilterStore } from "@/src/stores/transactionStore";

export const TransactionsView = () => {
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
        date: "2023-10-26",
        title: "네이버페이",
        amount: "-500",
        balance: "12837132",
        isIncome: false,
      },
      {
        date: "2023-10-25",
        title: "스타벅스",
        amount: "-4500",
        balance: "12832632",
        isIncome: false,
      },
      {
        date: "2023-10-24",
        title: "카카오페이",
        amount: "-2000",
        balance: "12830000",
        isIncome: false,
      },
      {
        date: "2023-10-23",
        title: "편의점",
        amount: "-1500",
        balance: "12828500",
        isIncome: false,
      },
    ];

    setTransactions((prev) => [...prev, ...newTransactions]);
  };

  // 검색어에 따라 필터링된 트랜잭션
  const filteredTransactions = transactions
    .filter((transaction) => transaction.title.toLowerCase().includes(search.toLowerCase()))
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
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {filteredTransactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            id={index + 1} // TODO: 임시로 index+1로 넣어놓음 transactionId가 들어가야함
            date={transaction.date}
            title={transaction.title}
            amount={transaction.amount}
            balance={transaction.balance}
            isIncome={transaction.isIncome}
          />
        ))}
      </InfiniteScroll>
    </Flex>
  );
};

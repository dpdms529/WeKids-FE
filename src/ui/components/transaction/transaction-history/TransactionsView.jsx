"use client";
import { useTransactionList } from "@/src/query/transactionQuery";
import { Flex } from "@radix-ui/themes";
import {
  RangeEnum,
  TypeEnum,
  useTransFilterStore,
} from "@/src/stores/transactionStore";
import Loader from "@/src/ui/components/atoms/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { formatToLocalDate } from "@/src/constants/transaction";
import { useAccountStore, useSelectUserStore } from "@/src/stores/userStore";
import { urlPath } from "@/src/constants/common";
import { formatShortDate } from "@/src/util/dateUtils";

export const TransactionsView = () => {
  const size = 5; // 페이지당 데이터 수
  const {
    search,
    sortingType,
    range,
    startDate,
    endDate,
    type,
    balance,
    setBalance,
  } = useTransFilterStore();
  const { selectedaccountId } = useSelectUserStore();

  const now = new Date();
  const MonthsAgo = new Date();
  MonthsAgo.setMonth(now.getMonth() - 3);
  const [start, setStart] = useState(formatToLocalDate(MonthsAgo));
  const [end, setEnd] = useState(formatToLocalDate(now));
  const [typetoEng, setTypeToEng] = useState("ALL");

  useEffect(() => {
    console.log(selectedaccountId);
    if (type == TypeEnum.ALL) {
      setTypeToEng("ALL");
    } else if (type == TypeEnum.DEPOSIT) {
      setTypeToEng("DEPOSIT");
    } else if (type == TypeEnum.WITHDRAWAL) {
      setTypeToEng("WITHDRAWAL");
    }

    if (range === RangeEnum.ONE_MONTH) {
      MonthsAgo.setMonth(now.getMonth() - 1); // 한 달 전
      setStart(formatToLocalDate(MonthsAgo)); // 포맷팅 후 설정
      setEnd(formatToLocalDate(now)); // 현재 날짜 설정
    } else if (range === RangeEnum.THREE_MONTHS) {
      MonthsAgo.setMonth(now.getMonth() - 3); // 세 달 전
      setStart(formatToLocalDate(MonthsAgo)); // 포맷팅 후 설정
      setEnd(formatToLocalDate(now)); // 현재 날짜 설정
    } else if (range === RangeEnum.LAST_MONTH) {
      const firstDayLastMonth = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        1,
      ); // 지난달 1일
      const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // 지난달 마지막 날
      setStart(formatToLocalDate(firstDayLastMonth)); // 포맷팅 후 설정
      setEnd(formatToLocalDate(lastDayLastMonth)); // 포맷팅 후 설정
    } else if (range === RangeEnum.CUSTOM) {
      setStart(startDate.toISOString().split("T")[0]); // 포맷팅 후 설정
      setEnd(endDate.toISOString().split("T")[0]); // 현재 날짜 설정
    } else {
      MonthsAgo.setMonth(now.getMonth() - 3); // 기본 세 달 전
      setStart(formatToLocalDate(MonthsAgo)); // 포맷팅 후 설정
      setEnd(formatToLocalDate(now)); // 현재 날짜 설정
    }
  }, [range, type, startDate, endDate]);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    error,
  } = useTransactionList({
    accountId: selectedaccountId,
    start,
    end,
    type: typetoEng,
    size,
  });

  useEffect(() => {
    if (start && end) {
      fetchNextPage();
    }
  }, [start, end, fetchNextPage]);

  useEffect(() => {
    if (data?.pages?.[0]?.balance !== undefined) {
      setBalance(data.pages[0].balance); // 첫 페이지의 balance를 설정
      console.log(data.pages[0].balance);
    }
  }, [data, setBalance]);

  // Intersection Observer가 뷰에 들어올 때 다음 페이지 가져오기

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // 에러 발생 시 표시
  }

  // 모든 페이지의 데이터를 병합
  const transactions = data?.pages.flatMap((page) => page.transactions) || [];

  if (transactions.length === 0) {
    return <div>거래 내역이 없습니다.</div>; // 데이터가 없을 경우 처리
  }

  // 필터링
  const filteredTransactions =
    data?.pages
      ?.flatMap((page) => page.transactions) // 모든 페이지의 트랜잭션 병합
      ?.filter((transaction) => {
        // 검색어 필터링
        const matchesSearch = transaction.title
          .toLowerCase()
          .includes(search.toLowerCase());

        // 트랜잭션 유형 필터링 (프론트의 type 변수를 서버 값과 매핑)

        // 날짜 범위 필터링 (range에 따라 처리)
        const transactionDate = new Date(transaction.createAt);
        const startDate = range?.start ? new Date(range.start) : null;
        const endDate = range?.end ? new Date(range.end) : null;

        const matchesDate =
          (!startDate || transactionDate >= startDate) &&
          (!endDate || transactionDate <= endDate);

        return matchesSearch && matchesDate;
      })
      ?.sort((a, b) => {
        // 날짜 정렬
        if (sortingType === "최신순") {
          return new Date(b.createAt) - new Date(a.createAt); // 최신순
        } else {
          return new Date(a.createAt) - new Date(b.createAt); // 과거순
        }
      }) || [];

  return (
    <Flex
      direction="column"
      className="bg-white h-[53vh] overflow-auto scrollbar-hide"
    >
      <InfiniteScroll
        pageStart={0}
        hasMore={hasNextPage}
        loadMore={() => {
          !isFetchingNextPage && fetchNextPage(); // 중복 호출 방지
        }}
        useWindow={false}
      >
        {filteredTransactions.map((transaction, index) => (
          <Link
            key={index}
            href={`${urlPath.TRANSACTION_HISTORY}/${transaction.accountTransactionId}`}
          >
            <div className="border-b border-gray-100 p-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex gap-4">
                    <span className="text-gray-600 text-R-14">
                      {formatShortDate(transaction.createAt)}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-R-14">{transaction.title}</span>
                      <span className="text-main01 text-R-10 mt-2">
                        #{transaction.type === "DEPOSIT" ? "입금" : "출금"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`text-R-18 ${transaction.type === "DEPOSIT" ? "text-main01" : ""}`}
                  >
                    {transaction.amount.toLocaleString()}원
                  </span>
                  <span className="text-neutral-400 text-R-14 mt-2">
                    {transaction.balance.toLocaleString()}원
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {isFetchingNextPage && (
          <div className="text-center py-4">
            <Loader /> {/* 호출 중일 때 Loader 표시 */}
          </div>
        )}
      </InfiniteScroll>
    </Flex>
  );
};

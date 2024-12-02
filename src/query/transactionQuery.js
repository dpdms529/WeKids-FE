import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchTransactions, fetchTransactionById, updateTransactionMemo } from "../services/transaction";
export const useTransactionList = ({
    accountId = 4,
    start,
    end,
    type,
    size = 5,
  }) => {
    return useInfiniteQuery({
      queryKey: ["transactions", accountId, start, end, type, size],
      queryFn: ({ pageParam = 0 }) => {
        console.log("Fetching page:", pageParam);
        return fetchTransactions({ page: pageParam, start, end, accountId, type, size })
      }
        ,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.hasNext ? allPages.length : undefined;
      },
    });
  };

  export const useTransactionDetail = (transactionId) => {
    return useQuery({
      queryKey: ["transaction", transactionId],
      queryFn: () => fetchTransactionById(transactionId),
      enabled: !!transactionId,
    });
  };

  export const useUpdateTransactionMemo = () => {
    return useMutation({
      mutationFn: updateTransactionMemo,
      onMutate: (variables) => {
        console.log("Mutation started with variables:", variables);
      },
      onError: (error, variables, context) => {
        console.error("Mutation failed:", error, variables, context);
      },
      onSuccess: (data, variables, context) => {
        console.log("Mutation succeeded:", data, variables, context);
      },
    });
  };
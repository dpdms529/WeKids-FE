import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../services/transaction";
export const useTransactionList = ({
    accountId = 4,
    start,
    end,
    type,
    size = 5,
  }) => {
    console.log(accountId, start, end, type, size);
    return useInfiniteQuery({
      queryKey: ["transactions", accountId, start, end, type, size],
      queryFn: ({ pageParam = 0 }) => {
        console.log("Fetching page:", pageParam);
        return fetchTransactions({ page: pageParam, start, end, accountId, type, size })
      }
        
        ,
      getNextPageParam: (lastPage, allPages) => {
        console.log("Last Page:", lastPage);
        console.log("HasNext:", lastPage?.hasNext);
        console.log("Next Page Index:", allPages.length);
        return lastPage?.hasNext ? allPages.length : undefined;
      },
    });
  };
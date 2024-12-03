import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/url";

export const submitTransfer = async (data) => {
  const response = await fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status !== 201) {
    throw new Error(`Failed to post data. Status: ${response.status}`);
  }

  const responseBody = await response.text();
  return responseBody ? JSON.parse(responseBody) : {};
};

export const fetchTransactions = async ({
  page,
  start,
  end,
  size = 5,
  type,
  accountId,
}) => {
  const url = `${BASE_URL}/accounts/${accountId}/transactions`;

  console.log("Fetching URL:", url);

  try {
    const response = await fetch(
      `${url}?page=${page}&start=${start}&end=${end}&type=${type}&size=${size}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      // HTTP 상태 코드가 200-299가 아니면 에러 처리
      const errorMessage = await response.text();
      throw new Error(`Error fetching transactions: ${errorMessage}`);
    }

    const data = await response.json();
    console.log(data.transactions);

    // API 응답 구조에 맞게 반환
    return {
      transactions: data.transactions,
      hasNext: data.hasNext, // hasNext 값이 그대로 전달
      balance: data.balance,
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error; // 에러를 다시 던져 React Query에서 처리
  }
};

export const useTransactionList = ({
  accountId = 4,
  start,
  end,
  type,
  size = 5,
}) => {
  console.log(type);
  return useInfiniteQuery({
    queryKey: ["transactions", accountId, start, end, type, size],
    queryFn: ({ pageParam = 0 }) =>
      fetchTransactions({ page: pageParam, start, end, accountId, type, size }),
    getNextPageParam: (lastPage, allPages) => {
      console.log("Last Page:", lastPage);
      console.log("HasNext:", lastPage?.hasNext);
      console.log("Next Page Index:", allPages.length);
      return lastPage?.hasNext ? allPages.length : undefined;
    },
  });
};

export const fetchTransactionById = async (transactionId) => {
  try {
    if (!transactionId) {
      throw new Error("Transaction ID is required");
    }

    const url = `${BASE_URL}/transactions/${transactionId}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error fetching transaction: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("Fetched transaction data:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchTransactionById:", error.message);
    throw error;
  }
};

export const useTransactionDetail = (transactionId) => {
  return useQuery({
    queryKey: ["transaction", transactionId],
    queryFn: () => fetchTransactionById(transactionId),
    enabled: !!transactionId,
  });
};

const updateTransactionMemo = async ({ transactionId, memo }) => {
  if (!transactionId || memo === undefined || memo.trim() === "") {
    throw new Error("Transaction ID와 메모는 필수입니다.");
  }

  const url = `${BASE_URL}/transactions/${transactionId}/memo`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ memo }),
  });
  if (response.status !== 204) {
    const errorBody = await response.text();
    console.error("Error response:", errorBody);
    throw new Error(`Error: ${response.status}, ${errorBody}`);
  }
};

export const useUpdateTransactionMemo = () => {
  console.log("Initializing useUpdateTransactionMemo");
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

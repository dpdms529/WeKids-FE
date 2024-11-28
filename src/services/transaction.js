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

  export const fetchTransactions = async ({ page, size = 10, accountId }) => {
    const url = new URL(
      `${BASE_URL}/accounts/${accountId}/transactions`
    );
    url.searchParams.append("page", page);
    url.searchParams.append("size", size);
  
    console.log("Fetching URL:", url.toString());
  
    const response = await fetch(url.toString());
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Fetch error:", errorText);
      throw new Error("Failed to fetch transactions");
    }
    return response.json();
  };
  
  
  export const useTransactionList = ({ accountId = 4, size = 10 }) => {
    return useInfiniteQuery({
      queryKey: ["transactions", accountId],
      queryFn: ({ pageParam = 0 }) =>
        fetchTransactions({ page: pageParam, accountId, size }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.hasNext ? allPages.length : undefined;
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
    console.log("???")
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
  
  
'use server'
import { auth } from "@/auth";
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
  const session = await auth();
  const authorization = session?.user?.Authorization;
  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };
  const url = `${BASE_URL}/accounts/${accountId}/transactions`;

  console.log("Fetching URL:", url);

  try {
    const response = await fetch(
      `${url}?page=${page}&start=${start}&end=${end}&type=${type}&size=${size}`,
      {
        method: "GET",
        headers: headers,
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

export const fetchTransactionById = async (transactionId) => {
  try {
    if (!transactionId) {
      throw new Error("Transaction ID is required");
    }

    const url = `${BASE_URL}/transactions/${transactionId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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



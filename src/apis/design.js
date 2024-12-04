"use server";

import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";
import { useDesignStore } from "../stores/designStore";

// 디자인 생성
export const designCreate = async (data) => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  console.log("Sending request to:", `${BASE_URL}/design`); // URL 확인용 로그
  console.log("With data:", data); // 데이터 확인용 로그

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };

  const response = await fetch(`${BASE_URL}/design`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
    credentials: "include", // 쿠키 전송을 위해 추가
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to post data: ${response.statusText}`);
  }
  useDesignStore.getState().setDesign(designData);
  return await response.json();
};

// 디자인 조회
export const designFetch = async () => {
  // zustand store에서 확인
  const storedDesign = useDesignStore.getState().design;
  if (storedDesign) {
    return storedDesign;
  }
  // store에 없으면 API 호출
  const session = await auth();
  const authorization = session?.user?.Authorization;

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };

  const response = await fetch(`${BASE_URL}/design`, {
    method: "GET",
    headers: headers,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  useDesignStore.getState().setDesign(designData);
  return await response.json();
};

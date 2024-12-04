"use server";

import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";

// 디자인 생성
export const designCreate = async (data) => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };

  const response = await fetch(`${BASE_URL}/design`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  console.log(response);
  if (!response.ok) {
    throw new Error(`Failed to post data: ${response.statusText}`);
  }

  const responseBody = await response.body();
  return responseBody ? JSON.parse(responseBody) : {};
};

// 디자인 조회
export const designFetch = async () => {
  console.log("??")
  const session = await auth();
  const authorization = session?.user?.Authorization;
  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };
  const response = await fetch(`${BASE_URL}/design`, {
    method: "GET",
    headers: headers,
    memberId: 1,
  });

  

  const data = await response.json();
  return data;
};

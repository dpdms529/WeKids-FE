"use server";

import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";

const session = await auth();
const authorization = session?.user?.Authorization;

const headers = {
  "Content-Type": "application/json",
  Cookie: `Authorization=${authorization}`,
};

export const getParentsAccounts = async () => {
  const response = await fetch(`${BASE_URL}/parents`, {
    method: "GET",
    headers: headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export const agreeAccountInquiry = async (identification) => {
  const residentRegistrationNumber = identification.slice(0, 6) + "-" + identification.slice(6);

  const response = await fetch(`${BASE_URL}/parents/agree-account-inquiry`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      residentRegistrationNumber: residentRegistrationNumber,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  console.log(response);

  return response.status === 204;
};

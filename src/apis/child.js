"use server";

import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";

export const getChildAccounts = async () => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };

  const response = await fetch(`${BASE_URL}/children`, {
    method: "GET",
    headers: headers,
  });

  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }

  const data = await response.json();
  return data;
};

"use server";
import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";

export const fetchCardName = async (id) => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };
  const response = await fetch(`${BASE_URL}/api/cards/${id}`, {
    method: "GET",
    headers: headers,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch card name");
  }
  const data = await response.json();
  return data.cardName;
};

// Register Password (서버)
export const registerPassword = async ({cardPassword, residentRegistrationNumber, accountPassword, childId}) => {
  const session = await auth();
  const authorization = session?.user?.Authorization;
  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };
  console.log("input")
  try {
    const response = await fetch(`${BASE_URL}/accounts/cards/issue`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        cardPassword: cardPassword,
        accountPassword: accountPassword,
        residentRegistrationNumber: residentRegistrationNumber,
        childId: childId
      }),
      credentials: "include",
    });

    const responseText = await response.text();
    console.log(responseText)

    if (!response.ok) {
      return null;
    }

    return responseText ? JSON.parse(responseText) : {};
  } catch (error) {
    return null;
  }
};

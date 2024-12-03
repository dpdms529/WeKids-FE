'use server'
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
  export const registerPassword = async (password) => {

    try {
      const response = await fetch(`${BASE_URL}/accounts/cards/issue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          residentRegistrationNumber: "000000-0000000",
          memberId: 1,
        }),
        credentials: "include",
      });

      const responseText = await response.text();

      if (!response.ok) {
        return null;
      }

      return responseText ? JSON.parse(responseText) : {};
    } catch (error) {
      return null;
    }
  };

import { BASE_URL } from "../constants/url";

export const fetchAccounts = async () => {
  const response = await fetch(
    `${BASE_URL}/accounts/baas`,
  );
  return response.json();
};

export const fetchChildAccounts = async () => {
  const response = await fetch(`${BASE_URL}/accounts/children`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch child accounts");
  }

  // response.json() 호출은 한 번만 수행
  const data = await response.json();
  return data;
};


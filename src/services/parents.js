import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from 'next';
import { BASE_URL } from "../constants/url";

export const getParentsAccounts = async () => {
  const response = await fetch(`${BASE_URL}/parents`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useParentsAccounts = () => {
  return useQuery({
    queryKey: ["parentAccounts"],
    queryFn: getParentsAccounts,
    retry: 1,
  });
};

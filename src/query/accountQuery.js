import { getParentsAccounts } from "@/src/apis/parents";
import { useQuery } from "@tanstack/react-query";

export const useParentsAccounts = (authorization) => {
  return useQuery({
    queryKey: ["parentAccounts", authorization],
    queryFn: () => getParentsAccounts(authorization),
    retry: 1,
  });
};



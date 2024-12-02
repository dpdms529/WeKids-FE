import { useQuery } from "@tanstack/react-query";
import { getParentsAccounts } from "@/src/services/parents";

export const useParentsAccounts = (authorization) => {
  return useQuery({
    queryKey: ["parentAccounts", authorization],
    queryFn: () => getParentsAccounts(authorization),
    retry: 1,
  });
};

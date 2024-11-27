import { apiBe, apiFe } from "@/src/services/apiClient";
import axios from "axios";

export const fetchAccounts = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/v1/accounts/baas",
  );
  return response.data;
};

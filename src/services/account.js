export const fetchAccounts = async () => {
  const response = await fetch(
    "http://localhost:8080/api/v1/accounts/baas",
  );
  return response.json();
};

export const fetchChildAccounts = async () => {
    const response = await fetch(
      "http://localhost:8080/api/v1/accounts/children",
    )
    return response.json();
}

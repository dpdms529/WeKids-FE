export const submitTransfer = async (data) => {
    const response = await fetch("http://localhost:8080/api/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(`Failed to post data: ${response.statusText}`);
    }
    
    const responseBody = await response.text();
    return responseBody ? JSON.parse(responseBody) : {};
  };
import { BASE_URL } from "@/url";

export const designCreate = async (data) => {
    const response = await fetch(`${BASE_URL}/design`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to post data: ${response.statusText}`);
    }
    
    const responseBody = await response.text();
    return responseBody ? JSON.parse(responseBody) : {};
  };
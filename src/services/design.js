import { BASE_URL } from "@/src/constants/url";

// 디자인 생성
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

// 디자인 조회
export const desingFetch = async () => {
    const response = await fetch(`${BASE_URL}/design`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const responseBody = await response.text();
  return responseBody ? JSON.parse(responseBody) : {};
};

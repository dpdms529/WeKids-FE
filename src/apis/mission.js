"use server";
import { auth } from "@/auth";
import { BASE_URL } from "../constants/url";

export const createMission = async ({
  title,
  content,
  deadline,
  amount,
  category,
  childId,
}) => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  const headers = {
    "Content-Type": "application/json",
    Cookie: `Authorization=${authorization}`,
  };

  const response = await fetch(`${BASE_URL}/missions`, {
    method: "POST",
    headers,
    body: JSON.stringify({ title, content, deadline, amount, category, childId }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Server Error: ${response.status} - ${errorMessage}`);
  }

  // 응답 본문이 없으므로 JSON 변환을 시도하지 않음
  return response;
};

export const showMissionList = async ({state, category, child}) => {
    const session = await auth();
    const authorization = session?.user?.Authorization;
  
    const headers = {
      "Content-Type": "application/json",
      Cookie: `Authorization=${authorization}`,
    };
  
    const url = `${BASE_URL}/missions`;

    const response = await fetch(
        `${url}?state=${state}&category=${category}&child=${child}`,
        {
          method: "GET",
          headers: headers,
        },
      );
  
    if (!response.ok) {
      throw new Error("Failed to fetch child accounts");
    }
  
    // response.json() 호출은 한 번만 수행
    const data = await response.json();
    return data;
  };

  export const showMissionDetail = async ({missionId}) => {
    const session = await auth();
    const authorization = session?.user?.Authorization;
  
    const headers = {
      "Content-Type": "application/json",
      Cookie: `Authorization=${authorization}`,
    };
  
    const response = await fetch(`${BASE_URL}/missions/${missionId}`, {
        method: "GET",
        headers: headers,
      });
  
    if (!response.ok) {
      throw new Error("Failed to mission");
    }
  
    // response.json() 호출은 한 번만 수행
    const data = await response.json();
    return data;
  };

  export const missionAuth = async ({missionId, memo, image}) => {
    const session = await auth();
    const authorization = session?.user?.Authorization;
    const headers = {
      "Content-Type": "application/json",
      Cookie: `Authorization=${authorization}`,
    };
    const response = await fetch(
      `${BASE_URL}/missions/${missionId}/submit`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({
            data:{
                memo: memo
            },
            image: image,
          }),
      },
    );
    return response.status !== 204 ? await response.json() : null;
  };

  export const deleteMission = async ({missionId}) => {
    const session = await auth();
    const authorization = session?.user?.Authorization;
    const headers = {
      "Content-Type": "application/json",
      Cookie: `Authorization=${authorization}`,
    };
    const response = await fetch(`${BASE_URL}/missions/${missionId}`, {
      method: "DELETE",
      headers ,
    });
    
    return response.status !== 204 ? await response.json() : null;
  };

  export const missionAccept = async ({missionId, simplePassword}) => {
    const session = await auth();
    const authorization = session?.user?.Authorization;
    const headers = {
      "Content-Type": "application/json",
      Cookie: `Authorization=${authorization}`,
    };
    const response = await fetch(
      `${BASE_URL}/missions/${missionId}/accept`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify({
            simplePassword: simplePassword,
          }),
      },
    );
    return response.status !== 204 ? await response.json() : null;
  };
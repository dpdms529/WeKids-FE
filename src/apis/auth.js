import { apiBe, apiFe } from "@/services";

// idToken을 사용하여 세션을 생성하는 API 호출
export const postIdTokenApi = (idToken) =>
  apiBe.post("/auth/session", { idToken });

// 로컬에서 사용자 정보를 가져오는 API 호출
export const getMeApiLocal = () => apiFe("/auth/session");

// 쿠키를 사용하여 사용자 정보를 가져오는 API 호출
export const getMeApi = (cookie) =>
  apiBe({
    url: "/auth/session",
    method: "get",
    headers: {
      Cookie: cookie,
    },
  });

// 세션을 종료하는 API 호출
export const logoutApi = () => apiBe.delete("/auth/session");

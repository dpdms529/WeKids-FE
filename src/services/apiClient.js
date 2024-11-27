"use client";

import axios from "axios";

// Backend API 클라이언트
export const apiBe = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Spring Boot API URL
  headers: {
    "Content-Type": "application/json", // 서버가 기대하는 헤더
  },
  withCredentials: true, // 쿠키 전송 활성화
});

// Frontend API 클라이언트 (필요 시)
export const apiFe = axios.create({
  baseURL: "http://localhost:3000/api", // React 자체 API URL (예: Next.js)
});

"use client";

import { useUserTypeStore } from "@/src/stores/userStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChildHome from "./child/ChildView";
import ParentHome from "./parent/ParentStart";

const query = new QueryClient();
export default function MainHome() {
  const { userType } = useUserTypeStore();
  return (
    <QueryClientProvider client={query}>
      <div>
        <div className="flex justify-center items-center">
          {userType === "PARENT" ? <ParentHome /> : <ChildHome />}
        </div>
        {/* <MainHome className="flex justify-center items-center" /> */}
      </div>
    </QueryClientProvider>
  );
}

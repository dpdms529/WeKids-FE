"use client";

import { useUserTypeStore } from "@/src/stores/userTypeStore";
import ChildHome from "./ChildView";
import ParentHome from "./ParentView";

export default function MainHome() {
  const { userType } = useUserTypeStore();
  return (
    <div>
      <div className="flex justify-center items-center">
        {userType === "PARENT" ? <ParentHome /> : <ChildHome />}
      </div>
      {/* <MainHome className="flex justify-center items-center" /> */}
    </div>
  );
}

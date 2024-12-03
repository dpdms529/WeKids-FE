"use client";

import { useUserTypeStore } from "@/src/stores/userStore";
import ChildHome from "./child/ChildView";
import ParentHome from "./parent/ParentHome";


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

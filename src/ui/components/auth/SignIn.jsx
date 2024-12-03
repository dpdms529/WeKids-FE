"use client";
import { useSignUpStore } from "@/src/stores/accountStore";
import { useUserTypeStore } from "@/src/stores/userStore";
import { signIn } from "next-auth/react";

export default function SignIn({ children }) {
  const { userType } = useUserTypeStore();
  const {
    email,
    name,
    phone,
    birthday,
    password,
    guardianName,
    guardianBirthday,
    guardianPhone,
  } = useSignUpStore();

  let data = {
    birthday: "2000-10-13",
    name: "최윤정",
    phone: "010-3131-4970",
    simplePassword: 123456,
    email: "cbj0010@naver.com",
    social: "naver",
    memberType: "PARENT",
    redirectTo: "/",
  };

  if (userType === "CHILD") {
    data["birthday"] = "2017-03-15";
    data["phone"] = "010-1234-4321";
    data["memberType"] = "CHILD";
    data["guardianName"] = guardianName;
    data["guardianBirthday"] = "1983-05-15";
    data["guardianPhone"] = "010-1234-5678";
  }

  // console.log(data);
  // let data = useSignUpStore.persist.clearStorage();

  return (
    <form
      action={() => {
        signIn("credentials", data);
      }}
    >
      {children}
    </form>
  );
}

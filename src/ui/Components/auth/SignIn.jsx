"use client";
import { useSignUpStore } from "@/src/stores/accountStore";
import { useUserTypeStore } from "@/src/stores/userStore";
import { signIn } from "next-auth/react";

export default function SignIn({ children }) {
  const { userType } = useUserTypeStore();
  const { email, name, phone, birthday, password, guardianName, guardianBirthday, guardianPhone } =
    useSignUpStore();

  let data = {
    birthday: "2017-05-29",
    name: name,
    phone: "010-1234-5678",
    simplePassword: 111111,
    email: email,
    social: "naver",
    memberType: userType,
    redirectTo: "/",
  };

  if (userType === "CHILD") {
    data["guardianName"] = guardianName;
    data["guardianBirthday"] = "1983-05-15";
    data["guardianPhone"] = "010-1234-5678";
  }

  console.log(data);

  useSignUpStore.persist.clearStorage();

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

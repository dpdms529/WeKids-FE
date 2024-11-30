import { signIn } from "@/auth";

export default function SignIn({ children }) {
  const data = {
    birthday: "1998-05-29",
    name: "조예은",
    phone: "010-0000-0000",
    simplePassword: "123456",
    email: "wekids@naver.com",
    social: "naver",
    memberType: "PARENT",
    redirectTo: "/",
  };
  return (
    <form
      action={async () => {
        "use server";
        await signIn("credentials", data);
      }}
    >
      {children}
    </form>
  );
}

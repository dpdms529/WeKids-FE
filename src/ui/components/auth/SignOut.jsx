import { signOut } from "@/auth";
import CustomButton from "../atoms/CustomButton";

export const SignOut = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <CustomButton type="submit">로그아웃</CustomButton>
    </form>
  );
};

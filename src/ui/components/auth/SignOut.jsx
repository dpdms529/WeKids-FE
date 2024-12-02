import { signOut } from "@/auth";
import CustomButton from "../atoms/CustomButton";

export function SignOut() {
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
}

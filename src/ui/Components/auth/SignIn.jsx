import { signIn } from "@/auth";
import NaverLoginImg from "@/public/images/NaverLoginImg.png";
import Image from "next/image";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("naver", { redirectTo: "/" });
      }}
    >
      <button type="submit">
        <Image src={NaverLoginImg} alt="네이버 로그인" />
      </button>
    </form>
  );
}

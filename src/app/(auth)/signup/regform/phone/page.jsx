"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen w-[393px]">
      <Link href={urlPath.SIGNUP_REGFOM}>
        <Image
          src="/images/passImg.svg"
          alt="pass 사진"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  );
}

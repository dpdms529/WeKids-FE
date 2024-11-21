// components/Header.js
import { urlPath } from "@/src/constants/common";
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center pr-7 pl-6 ">
      <Link href={urlPath.HOME}>
        <Image
          width={0}
          height={0}
          src="/images/logoImg.svg"
          alt="Logo"
          className="w-fit h-fit mr-5 mt-5"
        />
      </Link>
      <div className="flex space-x-4 items-baseline mt-10">
        {/* 알람 아이콘 */}
        <EnvelopeClosedIcon className="h-5 w-5 cursor-pointer" />
        {/* 프로필 아이콘 */}
        <PersonIcon className="h-5 w-5 mr-4 cursor-pointer" />
      </div>
    </header>
  );
}

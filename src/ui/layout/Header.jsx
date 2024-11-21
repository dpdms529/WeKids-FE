"use client";
import { urlPath } from "@/src/constants/common";
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center pr-7 pl-6">
      <div
        onClick={history.replaceState(
          { data: "testData2" },
          null,
          urlPath.HOME
        )}
        className="cursor-pointer"
      >
        <Image
          width={0}
          height={0}
          src="/images/logoImg.svg"
          alt="Logo"
          className="w-fit h-fit mr-5 mt-5"
        />
      </div>
      <div className="flex space-x-4 items-baseline mt-10">
        <EnvelopeClosedIcon className="h-5 w-5 cursor-pointer" />
        <PersonIcon className="h-5 w-5 mr-4 cursor-pointer" />
      </div>
    </header>
  );
}

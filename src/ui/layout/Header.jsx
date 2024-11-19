// components/Header.js
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center pr-7 pl-6 ">
      <img src="/images/logoImg.svg" alt="Logo" className="mr-5 mt-5" />
      <div className="flex space-x-4 items-baseline mt-10">
        {/* 알람 아이콘 */}
        <EnvelopeClosedIcon className="h-5 w-5 cursor-pointer" />
        {/* 프로필 아이콘 */}
        <PersonIcon className="h-5 w-5 mr-4 cursor-pointer" />
      </div>
    </header>
  );
}

// components/Header.js
import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 py-3 bg-gray-100 border-b border-gray-300">
      <img src="/images/logoImg.svg" alt="Logo" className="h-6 w-auto" />
      <div className="flex space-x-4">
        {/* 알람 아이콘 */}
        <EnvelopeClosedIcon className="h-6 w-6 cursor-pointer" />
        {/* 프로필 아이콘 */}
        <PersonIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  );
}

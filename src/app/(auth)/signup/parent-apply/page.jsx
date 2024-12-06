import { ArrowLeftIcon } from "@radix-ui/react-icons";
import ParentInfoTop from "@/src/ui/components/signup/ParentInfoTop";

export default function Page() {
  return (
    <div className="flex flex-col max-w-[393px] h-screen overflow-y-auto scrollbar-hide">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row px-7 pt-7 w-full h-20">
          <div className="flex flex-row w-1/3">
            <ArrowLeftIcon className="cursor-pointer" />
          </div>
          <div className="flex text-R-14 pl-7 w-full">네이버로 가입하기</div>
        </div>
        <ParentInfoTop />
      </div>
    </div>
  );
}

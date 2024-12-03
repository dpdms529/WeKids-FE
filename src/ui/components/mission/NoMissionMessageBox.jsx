import { highlightText } from "@/src/util/stringHighlight";
import Image from "next/image";

export const NoMissionMessageBox = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-8">
        <p className="text-B-18 text-center text-sub02 whitespace-pre-line">
          {highlightText(title, ["미션", "등록", "알림"])}
        </p>
      </div>
      <Image
        src="/images/todoIllustrationImg.svg"
        width={142}
        height={110}
        alt="illustImg"
      />
      <p className="text-R-14 text-left text-sub02 mt-4 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

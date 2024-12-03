import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const MessageBox = ({ subtitle, description, imgUrl }) => {
  const [firstPart, secondPart] = subtitle.split("\n");
  return (
    <div className="bg-white rounded-lg px-6 pb-4">
      <div className="flex items-center justify-between">
        <p className="text-B-18 text-left pt-4">
          <span className="text-sub02">{firstPart}</span>
          <br />
          <span className="text-main02">{secondPart}</span>
        </p>
        <div className="pl-2 pt-10">
          <ArrowRightIcon className="w-6 h-6 text-neutral-400" />
        </div>
        <Image
          src="/icons/favicon.svg"
          alt="WeKids"
          width={70}
          height={40}
          className="ml-auto pt-5"
        />
      </div>
      <p className="text-L-10 text-sub02">{description}</p>
      <Image
        src={imgUrl}
        width={80}
        height={17}
        alt="weebee"
        className="mt pt-3 mb-3"
      />
    </div>
  );
};

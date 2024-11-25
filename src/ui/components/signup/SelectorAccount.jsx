import Image from "next/image";

export default function SelectorAccount({
    imgsrc = "/images/woorisvg.svg",
    name,
    account,
    balance
}) {
    return (
      <div className="flex flex-row w-full h-20 pt-1 gap-2">
        <div className="flex flex-col justify-start w-1/5">
          <Image src={imgsrc} alt="woori" width={68} height={68} />
        </div>
        <div className="flex flex-col w-2/5 items-start justify-start pt-2">
          <div>
            <span className="text-R-20 text-black/80">{name}</span>
          </div>
          <div>
            <span className="text-R-10 text-stone-300">{account}</span>
          </div>
        </div>
        <div className="flex flex-col w-2/5 justify-end items-end pb-3 pr-3">
          <span className="text-black/80">{balance.toLocaleString()} 원</span>
        </div>
      </div>
    );
}
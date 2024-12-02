import Image from "next/image";

export const AccountCardLayout = ({ children, title }) => {
  return (
    <div className="flex flex-col w-[332px] bg-main02/20 rounded-xl p-5">
      <p className="text-R-14 text-sub02 text-center pt-4 pb-2">{title}</p>
      {children}
      <Image
        src="/images/tinypingGroupImg.svg"
        width={282}
        height={50}
        alt="tinypingImage"
        className="mx-auto mt-3"
      />
    </div>
  );
};

import Image from "next/image";

const CharacterCard = ({
  width = "w-full",
  height = "h-[513px]",
  radius = "rounded-[10px]",
  border = "border-black",
  imagePath = "/images/chachapingImg.svg",
  imgWidth = 100,
  imgHeight = 100,
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-col bg-main02 gap-12 ${height} ${width} ${border} ${radius} border-2 ${className}`}
    >
      <div className="flex flex-col items-center justify-end h-3/5 bottom-0">
        <Image
          src={imagePath}
          alt="profile image"
          layout="intrinsic"
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <div className="flex flex-col items-center gap-4 h-2/5">{children}</div>
    </div>
  );
};

export default CharacterCard;

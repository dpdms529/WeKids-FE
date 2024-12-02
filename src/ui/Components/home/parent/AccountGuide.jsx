"use client";
import { Flex } from "@radix-ui/themes";

const NoButtonAccountCard = ({
  width = "330px",
  height = "252px",
  mainText = "자녀의 회원 가입을",
  subText = "먼저 해주세요",
  backgroundColor = "bg-blueDada",
  textColor = "text-black/80",
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className={`${backgroundColor} rounded-[10px] relative overflow-hidden`}
      style={{ width, height }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className={`${textColor} text-R-28`}>{mainText}</p>
        <p className={`${textColor} text-R-28 mt-1`}>{subText}</p>
      </div>
    </Flex>
  );
};

export default NoButtonAccountCard;

import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const NoAccountCard = ({
  width = "331px",
  height = "532px",
  mainText = "등록된 계좌가 없어요.",
  subText = "계좌를 먼저 등록해 주세요.",
  buttonText = "계좌 가져오기",
  textColor = "text-white",
  onButtonClick,
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="between"
      className="bg-main02 rounded-[10px] relative overflow-hidden border border-black"
      style={{ width, height }}
    >
      <div className="flex-1 flex flex-col items-start justify-center">
        <p className={`${textColor} text-R-20 mb-3`}>{mainText}</p>
        <p className={`${textColor} text-R-20`}>{subText}</p>
      </div>
      <div className="border border-t-black">
        <Link href={urlPath.PARENT_ACCOUNT}>
          <CustomButton onClick={onButtonClick}>{buttonText}</CustomButton>
        </Link>
      </div>
    </Flex>
  );
};

export default NoAccountCard;

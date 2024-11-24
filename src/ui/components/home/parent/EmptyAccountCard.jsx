import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { Flex } from "@radix-ui/themes";

const NoAccountCard = ({
  width = "331px",
  height = "252px",
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
      className="bg-main01 rounded-[10px] relative overflow-hidden"
      style={{ width, height }}
    >
      <div className="flex-1 flex flex-col items-start justify-center">
        <p className={`${textColor} text-R-20 mb-3`}>{mainText}</p>
        <p className={`${textColor} text-R-20`}>{subText}</p>
      </div>
      <div className="border-t-2 border-t-black">
        <CustomButton onClick={onButtonClick}>{buttonText}</CustomButton>
      </div>
    </Flex>
  );
};

export default NoAccountCard;

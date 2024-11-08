"use client";
import { Box, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, GearIcon } from "@radix-ui/react-icons";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { urlPath } from "@/src/constants/common";

export default function TopBar({ name, balance, accountNumber }) {
  const router = useRouter();

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("클립보드에 복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  };

  const handleBackClick = () => {
    // window.history.back();
    router.back();
  };

  const handleSettingsClick = () => {
    alert("설정 버튼 클릭됨");
  };

  return (
    <Flex align="center" justify="between" direction="column" className="bg-main02 h-[40vh]">
      <Flex align="center" justify="between" direction="row" className="w-full pt-8 pl-3 pr-3">
        <Box onClick={handleBackClick}>
          <ArrowLeftIcon className="w-5 h-5 text-white" />
        </Box>
        <h1 className="text-white">{name}의 통장</h1>
        <Box onClick={handleSettingsClick}>
          <GearIcon className="w-5 h-5 text-white" />
        </Box>
      </Flex>
      <Flex direction="column" align="center">
        <p
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => copyToClipboard(accountNumber)}
          title="클릭하여 복사"
        >
          {accountNumber}
        </p>
        <h2 className="text-white text-3xl font-bold">{Number(balance).toLocaleString()}원</h2>
      </Flex>
      <Flex justify="between" direction="row" className="gap-3 m-8 mt-4">
        <CustomButton
          className="text-R-14"
          size="small"
          color="black10"
          rounded={true}
          onClick={() => {
            router.push(urlPath.TRANSFER);
          }}
        >
          용돈주기
        </CustomButton>
        <CustomButton
          className="text-R-14"
          size="small"
          color="black10"
          rounded={true}
          onClick={() => {}}
        >
          가져오기
        </CustomButton>
      </Flex>
    </Flex>
  );
}

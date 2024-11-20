"use client";
import { colorTypeMap, urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { ArrowLeftIcon, GearIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const account = {
  childId: 1,
  name: "최윤정",
  accountNumber: "1111-11-111-11",
  profile: "https://image.png",
  balance: "300000",
  accountId: 1,
  cardState: "active",
  color: "PINK1",
  character: "하츄핑",
};

export default function AccountHistoryHeader({ name, balance, accountNumber }) {
  const router = useRouter();

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("준비중인 기능입니다!"))
      .catch((err) => console.error("alert 에러:", err));
  };

  const handleSettingsClick = () => {
    alert("설정 버튼 클릭됨");
  };

  const handleBackClick = () => {
    // window.history.back();
    router.back();
  };

  return (
    <Flex
      align="center"
      justify="between"
      direction="column"
      className={`h-[40vh] ${colorTypeMap[account.color].colorClass}`}
    >
      <Flex
        align="center"
        justify="between"
        direction="row"
        className="w-full pt-8 pl-3 pr-3"
      >
        <Box onClick={handleBackClick}>
          <ArrowLeftIcon className="w-5 h-5 text-black/80" />
        </Box>
        <h1 className="text-black/80 text-R-14">{name}의 통장</h1>
        <Box>
          <GearIcon className="w-5 h-5 text-black/80" />
        </Box>
      </Flex>
      <div className="flex-1 flex items-center">
        <Flex direction="column" align="center">
          <p
            className="text-R-14 underline text-black/80"
            style={{ textUnderlineOffset: "6px" }}
          >
            {accountNumber}
          </p>
          <h2 className="text-black/80 text-R-28 mt-3">
            {Number(balance).toLocaleString()}원
          </h2>
        </Flex>
      </div>
      <Flex justify="between" direction="row" className="gap-3 mx-8 mb-8">
        <Link href={urlPath.TRANSFER}>
          <CustomButton
            className="bg-black !text-black text-R-14"
            size="small"
            color="black10"
            rounded={true}
          >
            용돈주기
          </CustomButton>
        </Link>

        <CustomButton
          className="text-R-14 !text-black"
          size="small"
          color="black10"
          rounded={true}
          onClick={() => {
            copyToClipboard(handleSettingsClick);
          }}
        >
          가져오기
        </CustomButton>
      </Flex>
    </Flex>
  );
}

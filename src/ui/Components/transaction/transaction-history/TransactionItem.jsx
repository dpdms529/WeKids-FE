import { urlPath } from "@/src/constants/common";
import { Box, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export const TransactionItem = ({
  id,
  date,
  title,
  amount,
  balance,
  isIncome,
}) => {
  const router = useRouter();
  return (
    <Box
      className="w-full border-t border-neutral-400"
      onClick={() => {
        router.push(`${urlPath.TRANSACTION_HISTORY}/${id}`);
      }}
    >
      <Flex
        direction="row"
        justify="between"
        className="p-3 pt-5 pb-5 text-black/80"
      >
        <Flex direction="row">
          <p className="pr-5 text-R-14 text-black/40">{date}</p>
          <p className="text-black/80">{title}</p>
        </Flex>
        <Box className="text-right">
          <p className={isIncome ? "text-blue-500" : "text-black/80"}>
            {Number(amount).toLocaleString()}원
          </p>
          <p className="text-R-12 text-neutral-400">
            {Number(balance).toLocaleString()}원
          </p>
        </Box>
      </Flex>
    </Box>
  );
};

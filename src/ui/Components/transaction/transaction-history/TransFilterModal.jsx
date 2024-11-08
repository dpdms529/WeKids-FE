import { useTransFilterStore, RangeEnum, SortEnum, TypeEnum } from "@/src/stores/transactionStore";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Flex, Box, Button, Text } from "@radix-ui/themes";

export const TransFilterModal = ({ onClose }) => {
  const { range, setRange } = useTransFilterStore();
  const { startDate, setStartDate, endDate, setEndDate } = useTransFilterStore();
  const { type, setType } = useTransFilterStore();
  const { sortingType, setSortingType } = useTransFilterStore();

  return (
    <Flex
      justify="center"
      align="end"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-50"
    >
      <Box className="w-[395px] max-w-md p-4 bg-white rounded-t-[50px]">
        <Flex justify="between" className="p-5 mb-4 text-black">
          <Button onClick={onClose}>✕</Button>
          <Button variant="ghost" onClick={onClose}>
            확인
          </Button>
        </Flex>
        <Box>
          <Flex align="center" direction="column">
            <Text className="text-sm font-bold text-gray-500">조회기간</Text>
            <RadioGroup.Root
              value={range}
              onValueChange={(value) => setRange(value)}
              className="flex p-3"
            >
              {Object.values(RangeEnum).map((label, index) => (
                <RadioGroup.Item
                  key={label}
                  value={label}
                  className={`text-black text-sm w-[90px] h-10 border ${
                    index < Object.values(RangeEnum).length - 1 ? "border-r-0" : ""
                  } border-gray-500 text-gray-700 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:border-black transition-colors`}
                >
                  {label}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </Flex>
          {range === RangeEnum.CUSTOM && (
            <Flex
              direction="row"
              align="center"
              justify="between"
              className="p-2 text-black border border-gray-300"
            >
              <Box>
                <input
                  type="date"
                  value={startDate.toISOString().split("T")[0]}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                />
              </Box>
              <Text className="mx-2">-</Text>
              <Box>
                <input
                  type="date"
                  value={endDate.toISOString().split("T")[0]}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                />
              </Box>
            </Flex>
          )}
        </Box>
        <Flex align="center" direction="column" className="pt-5">
          <Text className="text-sm font-bold text-gray-500">유형선택</Text>
          <RadioGroup.Root
            value={type}
            onValueChange={(value) => setType(value)}
            className="flex p-3"
          >
            {Object.values(TypeEnum).map((label, index) => (
              <RadioGroup.Item
                key={label}
                value={label}
                className={`text-black text-sm w-[120px] h-10 border ${
                  index < Object.values(TypeEnum).length - 1 ? "border-r-0" : ""
                } border-gray-500 text-gray-700 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:border-black transition-colors`}
              >
                {label}
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Flex>
        <Flex align="center" direction="column" className="pt-5">
          <Text className="text-sm font-bold text-gray-500">정렬선택</Text>
          <RadioGroup.Root
            value={sortingType}
            onValueChange={(value) => setSortingType(value)}
            className="flex p-3"
          >
            {Object.values(SortEnum).map((label, index) => (
              <RadioGroup.Item
                key={label}
                value={label}
                className={`text-black text-sm w-[180px] h-10 border ${
                  index < Object.values(SortEnum).length - 1 ? "border-r-0" : ""
                } border-gray-500 text-gray-700 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:border-black transition-colors`}
              >
                {label}
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </Flex>
      </Box>
    </Flex>
  );
};

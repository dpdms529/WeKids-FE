import {
  RangeEnum,
  SortEnum,
  TypeEnum,
  useTransFilterStore,
} from "@/src/stores/transactionStore";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Box, Flex, Text } from "@radix-ui/themes";
export const TransFilterModal = ({ onClose }) => {
  const { range, setRange } = useTransFilterStore();
  const { startDate, setStartDate, endDate, setEndDate } =
    useTransFilterStore();
  const { type, setType } = useTransFilterStore();
  const { sortingType, setSortingType } = useTransFilterStore();

  return (
    <Flex
      justify="center"
      align="end"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-50"
    >
      <Box className="w-[393px] max-w-md bg-white rounded-t-[50px] p-6">
        <Flex justify="between" align="center" className="mb-1">
          <Cross1Icon onClick={onClose} className="w-5 h-5 cursor-pointer" />
          <button onClick={onClose} className="text-R-16 text-black">
            확인
          </button>
        </Flex>

        <Box className="space-y-8">
          <Box className="items-center text-center">
            <Text className="text-R-16 block mb-3">조회기간</Text>
            <RadioGroup.Root
              value={range}
              onValueChange={(value) => setRange(value)}
              className="grid grid-cols-4 w-full border border-gray-300 rounded-lg overflow-hidden"
            >
              {Object.values(RangeEnum).map((label) => (
                <RadioGroup.Item
                  key={label}
                  value={label}
                  className="text-R-14 p-3 text-center border-r last:border-r-0 border-gray-300 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:font-medium"
                >
                  {label}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>

            {range === RangeEnum.CUSTOM && (
              <Flex
                direction="row"
                align="center"
                justify="between"
                className="mt-4 p-4 border border-gray-300 rounded-lg"
              >
                <Box className="flex-1">
                  <input
                    type="date"
                    value={startDate.toISOString().split("T")[0]}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                    className="w-full outline-none"
                  />
                </Box>
                <Text className="mx-4">-</Text>
                <Box className="flex-1">
                  <input
                    type="date"
                    value={endDate.toISOString().split("T")[0]}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                    className="w-full outline-none"
                  />
                </Box>
              </Flex>
            )}
          </Box>

          <Box className="text-center">
            <Text className="text-center items-center block mb-3">유형선택</Text>
            <RadioGroup.Root
              value={type}
              onValueChange={(value) => setType(value)}
              className="grid grid-cols-3 w-full border border-gray-300 rounded-lg overflow-hidden"
            >
              {Object.values(TypeEnum).map((label) => (
                <RadioGroup.Item
                  key={label}
                  value={label}
                  className="text-R-14 p-3 text-center border-r last:border-r-0 border-gray-300 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:font-medium"
                >
                  {label}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </Box>

          <Box>
            <Text className="text-center block mb-3">정렬선택</Text>
            <RadioGroup.Root
              value={sortingType}
              onValueChange={(value) => setSortingType(value)}
              className="grid grid-cols-2 w-full border border-gray-300 rounded-lg overflow-hidden mb-5"
            >
              {Object.values(SortEnum).map((label) => (
                <RadioGroup.Item
                  key={label}
                  value={label}
                  className="text-R-14 p-3 text-center border-r last:border-r-0 border-gray-300 bg-gray-200 data-[state=checked]:bg-white data-[state=checked]:font-medium"
                >
                  {label}
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

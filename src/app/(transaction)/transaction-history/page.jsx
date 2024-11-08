import TopBar from "@/src/ui/components/transaction/transaction-history/TopBar";
import { TransactionFilter } from "@/src/ui/components/transaction/transaction-history/TransactionFilter";
import { TransactionsView } from "@/src/ui/components/transaction/transaction-history/TransactionsView";
import { Box, Flex } from "@radix-ui/themes";

export default function Page() {
  return (
    <section>
      <Flex direction="column" justify="between">
        <Box>
          <TopBar name="조예은" balance="110000009862" accountNumber="1111-11-111111" />
        </Box>
        <Box>
          <TransactionFilter />
        </Box>
        <Box>
          <TransactionsView />
        </Box>
      </Flex>
    </section>
  );
}

export const RangeEnum = {
  THREE_MONTHS: "3개월",
  ONE_MONTH: "1개월",
  LAST_MONTH: "지난달",
  CUSTOM: "직접설정",
};

export const TypeEnum = {
  ALL: "전체",
  DEPOSIT: "입금만",
  WITHDRAWAL: "출금만",
};

export const SortEnum = {
  NEWEST: "최신순",
  OLDEST: "과거순",
};

export const AccountTransactionTypeEnum = {
  DEPOSIT: "입금",
  WITHDRAWAL: "출금",
};

export const formatToLocalDate = (date) => {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
};

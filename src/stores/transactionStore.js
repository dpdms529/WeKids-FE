import { create } from "zustand";

// useTransactionStore
export const useTransactionStore = create((set) => ({
  selectedAccount: null,
  childrenAccounts: [],
  transferAmount: 0,
  setSelectedAccount: (account) => set({ selectedAccount: account }),
  setTransferAmount: (amount) => set({ transferAmount: amount }),
  setChildrenAccounts: (accounts) => set({ childrenAccounts: accounts }),
  clearTransferData: () =>
    set({ selectedAccount: null, transferAmount: 0, childrenAccounts: [] }),
}));

// useTransFilterStore
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

const today = new Date();

export const useTransFilterStore = create((set) => ({
  balance: 0,
  setBalance: (newBalance) => set({ balance: newBalance }),

  range: RangeEnum.THREE_MONTHS,
  setRange: (newRange) => set({ range: newRange }),

  startDate: today,
  endDate: today,
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),

  type: TypeEnum.ALL,
  setType: (newType) => set({ type: newType }),

  sortingType: SortEnum.NEWEST,
  setSortingType: (sortType) => set({ sortingType: sortType }),

  search: "",
  setSearch: (searcKeyword) => set({ search: searcKeyword }),

  resetFilter: () =>
    set({
      range: RangeEnum.ONE_MONTH,
      Type: TypeEnum.ALL,
      sortingType: SortEnum.NEWEST,
      startDate: today,
      endDate: today,
    }),

  clearBalance: () => set({ balance: 0 }),
}));

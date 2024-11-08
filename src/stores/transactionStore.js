import { create } from "zustand";

// useTransactionStore
export const useTransactionStore = create((set) => ({
  selectedAccount: null,
  transferAmount: 0,
  setSelectedAccount: (account) => set({ selectedAccount: account }),
  setTransferAmount: (amount) => set({ transferAmount: amount }),
  clearTransferData: () => set({ selectedAccount: null, transferAmount: 0 }),
}));

// useTransFilterStore
export const RangeEnum = {
  ONE_MONTH: "1개월",
  THREE_MONTHS: "3개월",
  LAST_MONTH: "지난달",
  CUSTOM: "직접설정",
};

export const TypeEnum = {
  ALL: "전체",
  DEPOSIT: "입금만",
  WITHDRAWAL: "출력만",
};

export const SortEnum = {
  NEWEST: "최신순",
  OLDEST: "과거순",
};

const today = new Date();

export const useTransFilterStore = create((set) => ({
  range: RangeEnum.ONE_MONTH,
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
}));

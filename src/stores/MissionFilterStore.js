import { create } from 'zustand';

export const ChildEnum = {
  ALL: "전체",
  CHILD1: "안찬웅",
  CHILD2: "구자빈",
  CHILD3: "조예은",
};

export const TypeEnum = {
  ALL: "전체",
  CLEAN: "청소",
  DEVELOP: "자기계발",
  HABIT: "생활습관",
  ETC: "기타",
};

export const useMissionFilterStore = create((set) => ({
  selectedChild: ChildEnum.ALL,
  selectedType: TypeEnum.ALL,
  setSelectedChild: (child) => set({ selectedChild: child }),
  setSelectedType: (type) => set({ selectedType: type }),
}));
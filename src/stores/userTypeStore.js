// stores/userTypeStore.js
import { create } from "zustand";

export const useUserTypeStore = create((set) => ({
  userType: "CHILD", // 'PARENT' or 'CHILD'
  setUserType: (type) => set({ userType: type }),
}));

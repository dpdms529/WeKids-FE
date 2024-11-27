import { create } from "zustand";

export const useSignUpStore = create((set) => ({
  name: "",
  email: "",
  phone: "",
  setName: (name) => set({ name: name }),
  setEmail: (email) => set({ email: email }),
  setPhone: (phone) => set({ phone: phone }),
  clearData: () => set({ name: "", email: "", phone: "" }),
}));

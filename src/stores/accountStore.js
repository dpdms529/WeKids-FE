import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSignUpStore = create(
  persist(
    (set) => ({
      name: "",
      email: "",
      phone: "",
      birthday: "",
      password: "",
      guardianName: "",
      guardianBirthday: "",
      guardianPhone: "",
      setName: (name) => set({ name: name }),
      setEmail: (email) => set({ email: email }),
      setPhone: (phone) => set({ phone: phone }),
      setBirthday: (birthday) => set({ birthday: birthday }),
      setPassword: (password) => set({ password: password }),
      setGuardianName: (guardianName) => set({ guardianName: guardianName }),
      setGuardianBirthday: (guardianBirthday) => set({ guardianBirthday: guardianBirthday }),
      setGuardianPhone: (guardianPhone) => set({ guardianPhone: guardianPhone }),
      clearData: () =>
        set({
          name: "",
          email: "",
          phone: "",
          birthday: "",
          password: "",
          guardianName: "",
          guardianBirthday: "",
          guardianPhone: "",
        }),
    }),
    { name: "signup-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);

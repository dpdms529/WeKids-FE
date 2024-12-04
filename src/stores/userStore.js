// stores/userTypeStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_PROFILE_SECRET_KEY || "default-key";
import { persist } from "zustand/middleware";
import CryptoJS from "crypto-js";

const secretKey = process.env.NEXT_PUBLIC_PROFILE_SECRET_KEY || "default-key";

export const useUserTypeStore = create((set) => ({
  userType: "", // 'PARENT' or 'CHILD'
  setUserType: (type) => set({ userType: type }),
}));

export const useUserStore = create((set) => ({
  userName: "응애핑",
  setUserName: (name) => set({ userName: name }),
}));

export const useUserCardColorStore = create((set) => ({
  userCardColor: "",
  setCardColor: (color) => set({ userCardColor: color }),
}));

const encrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decrypt = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const useAccountStore = create(
  persist(
    (set) => ({
      accountInfo: {
        accountNumber: "",
        name: "",
        color: "",
      },
      accountId: "",
      setAccountInfo: (info) =>
        set((state) => ({
          accountInfo: { ...state.accountInfo, ...info },
        })),
      setAccountId: (id) => set({ accountId: id }),
      clearAccountInfo: () =>
        set({
          accountInfo: {
            accountNumber: "",
            name: "",
            color: "",
          },
        }),
      clearAccountId: () => set({ accountId: "" }),
    }),
    {
      name: "account-storage",
      storage: {
        getItem: (name) => {
          const encryptedData = sessionStorage.getItem(name);
          if (!encryptedData) return null;
          try {
            return decrypt(encryptedData);
          } catch (error) {
            console.error("Failed to decrypt data:", error);
            return null;
          }
        },
        setItem: (name, value) => {
          const encryptedValue = encrypt(value);
          sessionStorage.setItem(name, encryptedValue);
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    },
  ),
);

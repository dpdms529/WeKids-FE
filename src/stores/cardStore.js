import { create } from "zustand";
import { BASE_URL } from "@/src/constants/url";

export const useCardStore = create((set) => ({
  cardName: "",
  setCardName: (name) => set({ cardName: name }),
  fetchCardName: async (id) => {
    try {
      const response = await fetch(`/api/cards/${id}`); // 백엔드 API 호출
      const data = await response.json();
      set({ cardName: data.cardName });
    } catch (error) {
      console.error("Failed to fetch card name:", error);
    }
  },

  registerPassword: async (password) => {
    
    const last4Digits = password.slice(-4);

    try {
      const response = await fetch(`${BASE_URL}/accounts/cards/issue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            
        },
        body: JSON.stringify({ 
          password: last4Digits,
          residentRegistrationNumber: "000000-0000000"
        }),
        credentials: 'include',
      });
      
      const responseText = await response.text();

      if (!response.ok) {
        return null;
      }
      
      return responseText ? JSON.parse(responseText) : {};

    } catch (error) {
      return null;
    }
  },
}));

export const useColorStore = create((set) => ({
    color: "",
    setColor: (color) => set({color: color}),
    removeColor: () => set({ color: "" }),
}))

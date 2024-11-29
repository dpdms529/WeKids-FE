import { create } from "zustand";

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
}));

export const useColorStore = create((set) => ({
    color: "",
    setColor: (color) => set({color: color}),
    removeColor: () => set({ color: "" }),
}))

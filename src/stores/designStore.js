import { create } from "zustand";

export const useDesignStore = create((set) => ({
  selectedCharacter: "DADAPING",
  selectedColor: "BLUE",
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setSelectedColor: (color) => set({ selectedColor: color }),
}));

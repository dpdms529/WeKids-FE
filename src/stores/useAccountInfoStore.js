import { create } from "zustand";

// 서버에서 데이터를 받아오는 대신 더미 데이터를 설정하는 방식
const useAccountInfoStore = create((set) => ({
  selectedAccount: null, // 초기값을 null로 설정 (서버에서 받아올 데이터가 없을 때)
  setSelectedAccount: (newAccountInfo) => set({ selectedAccount: newAccountInfo }), // 계좌 정보 업데이트 함수
  fetchAccountInfo: async () => {
    try {
      // 더미 데이터 설정
      const dummyData = {
        id: 1,
        accountNumber: "3333-0073-0030-03",
        balance: 300000,
        name: "강현우",
        state: "active",
        designType: "WEBEE",
      };

      // 더미 데이터를 selectedAccount에 설정
      set({ selectedAccount: dummyData });
    } catch (error) {
      console.error("Failed to fetch account info:", error);
    }
  },
}));

export default useAccountInfoStore;

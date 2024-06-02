import { create } from "zustand";

export const useShareEmployStore = create((set, get) => {
  return {
    token: "",
    employInfo: {
      readName: {
        username: "",
        idCard: "",
        phone: "",
      },
      shareEmploy: {
        educational: "",
      },
    },
    updateManPower: (next) =>
      set((state) => {
        return { manPower: { ...state.manPower, ...next } };
      }),
  };
});

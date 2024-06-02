import { create } from "zustand";

interface storeState {
  username: string;
  updateUsername: (username: string) => void;
}

const useStore = create<storeState>()((set) => ({
  username: "",
  updateUsername: (newUsername) => set({ username: newUsername }),
}));

export default useStore;

// Centralized Zustand store for core/global state
import { create } from 'zustand';

export interface CoreState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useCoreStore = create<CoreState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));

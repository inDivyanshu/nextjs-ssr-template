// Zustand global app state store setup
// Follows enterprise best practices: type safety, modularity, and SOLID principles
import { create } from 'zustand';

// 1. Define types for your global state
export interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  // Add more global state keys as needed
}

// 2. Create the store using Zustand
export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  // Add more state logic here
}));

// 3. Usage example (in a component):
// const { sidebarOpen, setSidebarOpen } = useAppStore();
// setSidebarOpen(true);

// 4. Extend this pattern for feature-specific stores in src/state/featureNameStore.ts

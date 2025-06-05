// Selectors for Zustand store slices (example)
// Extend with your own selectors as your store grows
import { AppState } from '../../state/useAppStore';

export const selectSidebarOpen = (state: AppState) => state.sidebarOpen;
export const selectSetSidebarOpen = (state: AppState) => state.setSidebarOpen;

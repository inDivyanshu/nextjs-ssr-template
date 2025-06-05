"use client";
import { useTheme } from "../context/ThemeContext";

const icons = {
  light: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" stroke="#435179" strokeWidth="2"/><path stroke="#435179" strokeLinecap="round" strokeWidth="2" d="M10 1v2M10 17v2M3.22 3.22l1.42 1.42M15.36 15.36l1.42 1.42M1 10h2M17 10h2M3.22 16.78l1.42-1.42M15.36 4.64l1.42-1.42"/></svg>
  ),
  dark: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M15 10a5 5 0 01-5 5c-2.76 0-5-2.24-5-5a5 5 0 015-5c.34 0 .67.03 1 .08A6 6 0 1015 10z" stroke="#2F4CDD" strokeWidth="2"/></svg>
  ),
  system: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="10" rx="2" stroke="#3E4954" strokeWidth="2"/><path d="M7 15v1a3 3 0 006 0v-1" stroke="#3E4954" strokeWidth="2"/></svg>
  ),
};

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      {(["light", "dark", "system"] as const).map((mode) => (
        <button
          key={mode}
          className={`p-2 rounded border transition-colors ${theme === mode ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}
          aria-label={`Switch to ${mode} theme`}
          onClick={() => setTheme(mode)}
        >
          {icons[mode]}
        </button>
      ))}
      <span className="ml-2 text-xs text-gray-500">{resolvedTheme.charAt(0).toUpperCase() + resolvedTheme.slice(1)} mode</span>
    </div>
  );
}

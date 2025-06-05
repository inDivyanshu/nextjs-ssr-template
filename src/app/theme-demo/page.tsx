import ThemeDemo from "./theme-demo";
import ThemeToggle from "../../components/ThemeToggle";

export default function ThemeDemoPage() {
  // ThemeToggle allows users to switch between light, dark, and system themes interactively
  return (
    <div className="p-4">
      <ThemeToggle />
      <div className="mt-8">
        <ThemeDemo />
      </div>
    </div>
  );
}

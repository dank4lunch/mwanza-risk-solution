import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 p-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 border border-purple-200/20 dark:border-purple-400/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-12 group shadow-lg hover:shadow-purple-500/25"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 group-hover:rotate-180 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 group-hover:rotate-0 dark:rotate-0 dark:scale-100 text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

import { ThemeContext } from "@/ctx/contexts/ThemeContentext";
import { useContext } from "react";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context) return context;
  throw new Error("Theme context must be used withing Theme provider");
}

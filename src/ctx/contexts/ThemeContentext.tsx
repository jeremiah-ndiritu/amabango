import { createContext, type SetStateAction } from "react"

export type Theme = "light" | "dark"
export type ThemeContextType = {
    theme: Theme
    setTheme: React.Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
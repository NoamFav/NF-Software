import { useContext } from "react";
import { Ctx } from "../providers/DarkModeProvider";
export const useDarkMode = () => useContext(Ctx);

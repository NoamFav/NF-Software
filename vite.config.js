import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/",
});

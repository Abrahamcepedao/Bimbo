'use client'

import ReduxProvider from "./GlobalRedux/provider";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
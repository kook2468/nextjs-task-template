"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useInitTheme } from "@/shared/hooks/useInitTheme";

const queryClient = new QueryClient();

export function Provider({ children }: { children: ReactNode }) {
  useInitTheme();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

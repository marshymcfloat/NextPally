"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function TanStackProvider({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

"use client";

import { ReactNode, memo, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProvider = memo(({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
});

export default ReactQueryProvider;

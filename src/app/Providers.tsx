"use client";

import { ReactNode, memo } from "react";

import ReactQueryProvider from "./reactQueryProvider";

import ReduxProvider from "./reduxProvider";

const Providers = memo(({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  );
});

export default Providers;

"use client";

import { memo, ReactNode, Suspense } from "react";

import { Provider } from "react-redux";

import store from "@/store";

const ReduxProvider = memo(({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback="">
      <Provider store={store}>{children}</Provider>
    </Suspense>
  );
});

export default ReduxProvider;

"use client";

import { memo, useLayoutEffect } from "react";

import { useAppDispatch } from "@/hooks/useRedux";

import { setPageTitle } from "@/store/globalReducer";

const PageProvider = memo(({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(setPageTitle(title));
  }, []);

  return <></>;
});

export default PageProvider;

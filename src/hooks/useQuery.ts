import { useQuery as useReactQuery, QueryOptions } from "@tanstack/react-query";

import { useEffect } from "react";

import { toast, ToastOptions } from "react-toastify";

import { useAppSelector } from "./useRedux";

type UseQueryOptions = {
  options: QueryOptions;
};

export default function useQuery({ options }: UseQueryOptions) {
  const { theme } = useAppSelector((state) => state.global);

  const themeIsLight = theme === "light" ? "light" : "dark";

  const toastOptions: ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: themeIsLight,
  };

  const query = useReactQuery({
    ...options,
  });

  useEffect(() => {
    if (query.error) {
      console.log("useQuery custom hook query error", query.error);

      if (query.error) {
        // toast.error(query.error?.message, toastOptions);
      }
    }
  }, [query.error]);

  return query;
}

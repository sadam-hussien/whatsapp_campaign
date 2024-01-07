import { toast, ToastOptions } from "react-toastify";

import {
  useQueryClient,
  useMutation as useMutationReactQuery,
} from "@tanstack/react-query";

import { useAppSelector } from "./useRedux";

import { AxiosError, AxiosResponse } from "axios";

interface MutationConfig<Data, Error> {
  mutationFn: (variables: Data) => Promise<any>;
  invalidateQueries?: string;
  isToast?: boolean;
  toastMessage?: string;
}

type ErrorsArr = {
  msg: string;
  type: string;
  path: string;
};

export interface MyError extends AxiosError {
  error: string;
  errors: ErrorsArr[];
  // Add other properties if needed
}

export default function useMutation<Data = any, Error = any>({
  mutationFn,
  invalidateQueries,
  isToast = true,
  toastMessage = "Good Job",
}: MutationConfig<Data, Error>) {
  const { theme } = useAppSelector((state) => state.global);

  const themeIsLight = theme === "light" ? "light" : "dark";

  const toastOptions: ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: themeIsLight,
  };

  // Access the client
  const queryClient = useQueryClient();

  return useMutationReactQuery({
    mutationFn: mutationFn,
    onSuccess: (response: AxiosResponse) => {
      if (invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: [invalidateQueries] });
      }
      if (isToast) {
        toast.success(response.data.message || toastMessage, toastOptions);
      }
    },
    onError: (error: AxiosError<MyError>) => {
      if (isToast) {
        if (error.response?.data?.error) {
          toast.error(error.response?.data?.error, toastOptions);
        }
        if (error.response?.data?.errors) {
          error.response.data.errors.forEach((err) => {
            toast.error(err?.msg, toastOptions);
          });
        }
      }
    },
  });
}

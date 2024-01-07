"use client";

import lottieDelete from "@/app/assets/delete_alert.json";

import Btn from "../btn";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import { closeModal } from "@/store/globalReducer";

import { AxiosError, AxiosResponse } from "axios";

import { UseMutateFunction } from "@tanstack/react-query";

import { MyError } from "@/hooks/useMutation";

import { useRouter } from "next/navigation";
import { Suspense, lazy } from "react";

const Lottie = lazy(() => import("lottie-react"));

type Props = {
  action: UseMutateFunction<
    AxiosResponse<any, any>,
    AxiosError<MyError, any>,
    string,
    unknown
  >;
  isLoading: boolean;
};

export default function RemoveAlert({ action, isLoading }: Props) {
  // referch router
  const router = useRouter();

  const {
    modal: { id },
  } = useAppSelector((state) => state.global);

  const dispatch = useAppDispatch();

  // close modal
  function hideModal() {
    dispatch(closeModal());
  }

  // delete action
  function handleDelete() {
    action(id as string, {
      onSuccess() {
        // referch router
        router.refresh();
      },
      onSettled() {
        dispatch(closeModal());
      },
    });
  }

  return (
    <div className="flex flex-col items-center justify-end relative h-[430px] overflow-hidden z-10">
      <Suspense fallback="loading...">
        <Lottie
          animationData={lottieDelete}
          loop={true}
          style={{
            height: 500,
            width: 500,
          }}
          className="absolute -top-[35%] -z-10"
        />
      </Suspense>

      <h4 className="text-2xl mb-sm text-accent-content">Be Carfully</h4>

      <h4 className="mb-md text-center leading-7">
        Are you sure you want to delete <br /> item with ID=
        <span className="text-primary text-sm">{id}</span>?
      </h4>

      <div className="flex gap-md">
        <Btn
          type="button"
          label="delete"
          icon="las la-trash-alt"
          iconWrapperClassName="!rounded-btn"
          className="btn-error text-white"
          onClick={handleDelete}
          isLoading={isLoading}
        />
        <Btn
          type="button"
          label="cancel"
          className="btn-neutral"
          onClick={hideModal}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}

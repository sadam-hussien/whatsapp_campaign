"use client";

import Btn from "@/app/components/btn";

import { modals_types } from "@/constants";

import { Type_Modal_types } from "@/constants/types";

import cls from "@/helpers/cls";

import { useAppDispatch } from "@/hooks/useRedux";

import { openModal } from "@/store/globalReducer";

type Props = {
  title: string;
  className?: string;
};

export default function AddBtn({ title, className }: Props) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(
      openModal({
        type: modals_types.add as Type_Modal_types,
        data: {},
        id: "",
      }),
    );
  }

  return (
    <Btn
      type="button"
      label={title}
      icon="las la-plus"
      onClick={handleClick}
      className={cls("rounded-full min-w-[180px] pe-[55px]", className)}
    />
  );
}

"use client";

import { modals_types } from "@/constants";
import { Type_Modal_types } from "@/constants/types";
import { useAppDispatch } from "@/hooks/useRedux";
import { openModal } from "@/store/globalReducer";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  view?: boolean;
  edit?: boolean;
  remove?: boolean;
  id: string | number;
  data: any;
};

export default function Actions({
  children,
  view = true,
  edit = true,
  remove = true,
  id,
  data,
}: Props) {
  return (
    <div className="inline-flex items-center justify-center gap-2xl actions-wrapper">
      {view && <ViewBtn id={id} data={data} />}
      {edit && <EditBtn id={id} data={data} />}
      {remove && <RemoveBtn id={id} data={data} />}
      {children}
    </div>
  );
}

type BtnProps = {
  id: string | number;
  data: any;
};

export function ViewBtn({ id, data }: BtnProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="tooltip" data-tip="View">
      <button
        type="button"
        className="text-xl"
        onClick={() =>
          dispatch(
            openModal({
              data: data,
              type: modals_types.view as Type_Modal_types,
              id,
            }),
          )
        }
      >
        <i className="las la-eye"></i>
      </button>
    </div>
  );
}

export function EditBtn({ id, data }: BtnProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="tooltip" data-tip="Edit">
      <button
        type="button"
        className="text-xl"
        onClick={() =>
          dispatch(
            openModal({
              data: data,
              type: modals_types.edit as Type_Modal_types,
              id,
            }),
          )
        }
      >
        <i className="las la-edit"></i>
      </button>
    </div>
  );
}

export function RemoveBtn({ id, data }: BtnProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="tooltip" data-tip="Delete">
      <button
        type="button"
        className="text-xl"
        onClick={() =>
          dispatch(
            openModal({
              data: data,
              type: modals_types.delete as Type_Modal_types,
              id,
            }),
          )
        }
      >
        <i className="las la-trash-alt"></i>
      </button>
    </div>
  );
}

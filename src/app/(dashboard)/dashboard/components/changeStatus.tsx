"use client";

import useMutation from "@/hooks/useMutation";

import { api_edit_campaign } from "../server";
import { useState } from "react";
import cls from "@/helpers/cls";

type Props = {
  checked: boolean;
  id: string | number;
};

export default function ChangeStatus({ checked, id }: Props) {
  const [status, setStatus] = useState(checked);

  // submit request with react query
  const { mutate, isLoading } = useMutation({
    mutationFn: api_edit_campaign,
  });

  return (
    <div className="flex items-center gap-sm">
      <input
        type="checkbox"
        className="toggle toggle-primary"
        checked={status}
        onChange={() =>
          mutate(id, {
            onSuccess: () => setStatus(!status),
          })
        }
        disabled={isLoading}
      />

      <span
        className={cls("invisible loading loading-spinner loading-sm", {
          visible: isLoading,
        })}
      ></span>
    </div>
  );
}

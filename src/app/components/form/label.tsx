import cls from "@/helpers/cls";
import React, { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function Label({ children, id, className }: Props) {
  return (
    <label
      htmlFor={id}
      className={cls("label p-0 mb-xs capitalize text-base", className)}
    >
      {children}
    </label>
  );
}

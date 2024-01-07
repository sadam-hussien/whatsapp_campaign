import cls from "@/helpers/cls";

import { ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function TableTr({ children, className }: Props) {
  return (
    <tr className={cls("transition border hover:bg-base-300", className)}>
      {children}
    </tr>
  );
}

export default memo(TableTr);

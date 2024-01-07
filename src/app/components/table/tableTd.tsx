import cls from "@/helpers/cls";

import { DetailedHTMLProps, ReactNode, TdHTMLAttributes, memo } from "react";

type Props = {
  title: ReactNode;
  className?: string;
  tdOptions?: DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
};

function TableTd({ title, className, tdOptions }: Props) {
  return (
    <td
      {...tdOptions}
      className={cls(
        "first:rounded-ss-lg first:rounded-es-lg last:rounded-se-lg last:rounded-ee-lg border !border-x-0 first:!border-s last:!border-e border-accent-content/5 h-row-height text-sm text-accent-content px-md py-0",
        className,
      )}
    >
      {title}
    </td>
  );
}

export default memo(TableTd);

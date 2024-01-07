import { ReactNode, memo } from "react";

import TableSort from "./tableSort";

import cls from "@/helpers/cls";

type Props = {
  title: ReactNode;
  isSort?: boolean;
  sortKey?: string;
  className?: string;
};

function TableTh({ title, isSort = false, sortKey, className }: Props) {
  return (
    <th
      className={cls(
        "h-row-height capitalize text-sm text-base-content first:rounded-ss-lg first:rounded-es-lg last:rounded-se-lg last:rounded-ee-lg px-md py-0",
        className,
      )}
    >
      <div>
        <span>{title}</span>
        {isSort && sortKey && <TableSort sortKey={sortKey} />}
      </div>
    </th>
  );
}

export default memo(TableTh);

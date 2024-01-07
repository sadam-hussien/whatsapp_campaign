"use client";

import { Suspense, useMemo } from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import cls from "@/helpers/cls";

import Lottie from "@/app/components/Lottie";

import lottieNoData from "@/app/assets/no-data-person.json";

import { meta } from "../types";

type Props = {
  columns: ColumnDef<any>[];
  data: any[];
  isLoading: boolean;
};

export default function Table({ columns, data, isLoading }: Props) {
  const tableColumns = useMemo(() => columns, []);

  const tableData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto mt-2xl">
      <table className="w-full table align-middle border-separate border-spacing-y-4  backdrop-blur bg-base-200 bg-opacity-80 px-4">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="h-row-height capitalize text-sm text-base-content first:rounded-ss-lg first:rounded-es-lg last:rounded-se-lg last:rounded-ee-lg px-md py-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="transition border hover:bg-base-300">
              {row.getVisibleCells().map((cell) => {
                const hasMeta: meta =
                  cell.getContext().cell.column.columnDef.meta;

                const className = hasMeta ? hasMeta?.className : "";

                const style = hasMeta ? hasMeta?.style : undefined;

                const id = hasMeta ? hasMeta?.id : "";

                return (
                  <td
                    key={cell.id}
                    className={cls(
                      "first:rounded-ss-lg first:rounded-es-lg last:rounded-se-lg last:rounded-ee-lg border !border-x-0 first:!border-s last:!border-e border-accent-content/5 h-row-height text-sm text-accent-content px-md py-0",
                      className,
                    )}
                    style={style}
                    id={id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}

          {!table.getRowModel().rows.length && (
            <tr>
              <td colSpan={table.getAllColumns().length} className="">
                <div className="flex flex-col justify-center items-center">
                  <Lottie
                    options={{
                      animationData: lottieNoData,
                      loop: true,
                      style: {
                        width: 600,
                      },
                    }}
                  />
                  <h5 className="text-4xl text-accent-content capitalize">
                    No data found
                  </h5>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import useUrlSearchParams from "@/hooks/useUrlSearchParams";

import { Suspense, lazy } from "react";

const Select = lazy(() => import("@/app/components/form/select"));

type SelectedItem = {
  label: string | number;
  value: string | number;
};

const options = [
  { label: "Default", value: "" },
  { label: "10 Record", value: "10" },
  { label: "15 Record", value: "15" },
  { label: "20 Record", value: "20" },
];

export default function PageSize() {
  const { searchParams, setSearchParmas } = useUrlSearchParams();

  const defaultValue = options.find(
    (option) => option.value === searchParams.get("take"),
  );

  // handle change function
  function handleChange(value: SelectedItem) {
    setSearchParmas({
      searchParams: {
        key: "take",
        value: value.value.toString(),
      },
    });
  }

  return (
    <div className="w-full sm:w-[200px]">
      <Suspense>
        <Select
          selectProps={{
            options,
            name: "pageSize",
            placeholder: "page size",
            isSearchable: false,
            onChange(newValue, actionMeta) {
              handleChange(newValue as SelectedItem);
            },
            defaultValue,
          }}
          className="!rounded-full"
          menuClassName="!rounded-box"
        />
      </Suspense>
    </div>
  );
}

"use client";

import Select from "@/app/components/form/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { GroupBase, OptionProps, components } from "react-select";

type SelectedItem = {
  label: string | number;
  value: string | number;
  icon: string;
};

type Props = {
  options: Array<SelectedItem>;
};

export default function Sort({ options = [] }: Props) {
  // get router
  const router = useRouter();

  // get path name
  const pathname = usePathname();

  // get search parameters
  const searchParams = useSearchParams();

  const defaultValue = options.find(
    (option) => option.value === searchParams.get("sort"),
  );

  const CustomOption = (props: OptionProps<SelectedItem>) => {
    return (
      <>
        <components.Option {...props}>
          <div className="flex items-center gap-2">
            {props.label} {props.data?.icon}
          </div>
        </components.Option>
      </>
    );
  };

  // handle change function
  function handleChange(value: SelectedItem) {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    // set query
    params.set("sort", value.value.toString());

    // navigate
    router.push(pathname + "?" + params.toString());
  }

  return (
    <div className="w-full sm:w-[200px]">
      <Select
        selectProps={{
          options,
          components: {
            Option: (props, data) => <CustomOption {...props} {...data} />,
          },
          name: "sorting",
          placeholder: "sort by",
          isSearchable: false,
          onChange(newValue, actionMeta) {
            handleChange(newValue as SelectedItem);
          },
          defaultValue,
        }}
        className="!rounded-full"
        menuClassName="!rounded-box"
      />
    </div>
  );
}

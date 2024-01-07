"use client";

import { ReactNode, forwardRef } from "react";

import cls from "@/helpers/cls";

import ReactSelect, { Props as ReactSelectProps } from "react-select";

interface CustomOptionProps {
  label: number | string;
  value: number | string;
}

interface Props {
  className?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  id?: string;
  icon?: string;
  error?: string;
  selectProps: ReactSelectProps;
  menuClassName?: string;
}

const Select = forwardRef((props: Props, ref: any) => {
  const {
    className,
    label,
    labelClassName,
    id,
    icon,
    error,
    menuClassName,
    selectProps,
  } = props;
  return (
    <>
      {/* label  */}
      {label && (
        <label
          htmlFor={id}
          className={cls(
            "label p-0 mb-xs capitalize text-base",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      {/* ********** */}

      {/* input  */}
      <div className="relative">
        {/* if there is icon  */}
        {icon && (
          <span className="w-[45px] text-lg rounded-btn rounded-se-none rounded-ee-none h-12 absolute top-0 start-0 flex items-center justify-center bg-base-300">
            <i className={cls(icon)}></i>
          </span>
        )}

        {/* select  */}
        <ReactSelect
          {...selectProps}
          ref={ref}
          classNames={{
            control: (state) =>
              cls(
                "!shadow-none !select p-0 !select-bordered w-full !bg-base-200 my-select",
                className,
                {
                  "select-focused": state.isFocused,
                  "ps-[60px]": icon,
                },
              ),
            placeholder: () =>
              "capitalize !text-base-content !text-sm !m-0 font-normal",
            valueContainer: () => "!p-0",
            singleValue: () =>
              "!text-base-content !text-sm !m-0 font-normal capitalize",
            menu: () => cls("!bg-base-200 overflow-hidden", menuClassName),
            menuList: () => "!p-0",
            option: (state) =>
              cls("active:!bg-transparent", {
                "!bg-primary": state.isSelected,
                "!bg-transparent hover:!bg-base-100": !state.isSelected,
              }),
          }}
          id={id}
          styles={{
            dropdownIndicator: (styles) => ({
              ...styles,
              display: "none",
            }),
            indicatorSeparator: (styles) => ({
              ...styles,
              display: "none",
            }),
          }}
        />

        {/* error  */}
        {error && (
          <div className="text-error text-sm mt-xs capitalize">{error}</div>
        )}
      </div>
      {/* ********** */}
    </>
  );
});

export default Select;

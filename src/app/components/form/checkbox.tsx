import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

import cls from "@/helpers/cls";

import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends Partial<UseFormRegisterReturn> {
  className?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  inputProps?: InputHTMLAttributes<any>;
}

const Checkbox = forwardRef((props: Props, ref: any) => {
  const { className, label, labelClassName, inputProps, ...register } = props;
  return (
    <>
      {/* input  */}
      <div className="relative flex  items-center gap-sm">
        {/* input  */}
        <input
          {...register}
          {...inputProps}
          type="checkbox"
          ref={ref}
          className={cls(
            "checkbox checkbox-primary border-base-300 rounded-sm w-[18px] h-[18px] bg-base-300",
            className,
          )}
        />

        <label
          htmlFor={inputProps?.id}
          className={cls("p-0 mb-0 capitalize text-sm", labelClassName)}
        >
          {label}
        </label>
      </div>
      {/* ********** */}
    </>
  );
});

export default Checkbox;

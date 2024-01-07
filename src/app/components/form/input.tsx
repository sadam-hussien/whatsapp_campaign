import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

import cls from "@/helpers/cls";

import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends Partial<UseFormRegisterReturn> {
  className?: string;
  label?: string | ReactNode;
  labelClassName?: string;
  id?: string;
  icon?: string;
  error?: string;
  inputProps?: InputHTMLAttributes<any>;
}

const Input = forwardRef((props: Props, ref: any) => {
  const {
    className,
    label,
    labelClassName,
    id,
    icon,
    error,
    inputProps,
    ...register
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

        {/* input  */}
        <input
          id={id}
          {...register}
          {...inputProps}
          ref={ref}
          className={cls(
            "input input-bordered w-full bg-base-200 focus:outline-primary/60 focus:outline-1 focus:outline-dashed",
            className,
            {
              "ps-[60px]": icon,
            },
          )}
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

export default Input;

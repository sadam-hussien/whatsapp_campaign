"use client";

import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

import cls from "@/helpers/cls";

import { UseFormRegisterReturn, useFormContext } from "react-hook-form";

interface Props extends Partial<UseFormRegisterReturn> {
  className?: string;
  label?: (files: any) => string | ReactNode;
  labelClassName?: string;
  id?: string;
  error?: string;
  inputProps?: InputHTMLAttributes<any>;
}

const InputFile = forwardRef((props: Props, ref: any) => {
  const {
    className,
    label,
    labelClassName,
    id,
    error,
    inputProps,
    ...register
  } = props;

  const { watch, setValue } = useFormContext();

  const inputName = register?.name || "";

  const inputValue = watch(inputName);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      if (inputProps?.multiple) {
        setValue(inputName, [...inputValue, e.target.files[0]]);
      } else {
        setValue(inputName, e.target.files[0]);
      }
    }
  }

  function handleDelete(index?: number) {
    if (inputProps?.multiple && index !== undefined) {
      const values = [...inputValue];
      values.splice(index, 1);
      setValue(inputName, values);
    } else {
      setValue(inputName, "");
    }
  }

  return (
    <>
      {/* input  */}
      <input
        {...register}
        {...inputProps}
        ref={ref}
        className="hidden"
        type="file"
        id={id}
        onChange={handleChange}
      />

      {/* label  */}
      <label
        htmlFor={id}
        className={cls(
          "inline-block label p-0 mb-xs capitalize text-base",
          labelClassName,
        )}
      >
        {label ? (
          label({
            files: inputValue,
            handleDelete,
            isMultiple: inputProps?.multiple,
          })
        ) : (
          <div className="flex items-center gap-md">
            {/* images  */}
            <div
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center rounded-btn h-[180px] w-[180px] border border-dashed border-accent-content/30 bg-base-100"
            >
              {inputValue && Array.isArray(inputValue) && inputValue.length ? (
                <div
                  className={cls("w-full h-full grid gap-sm p-sm relative", {
                    "grid-cols-1": inputValue.length <= 1,
                    "grid-rows-2": inputValue.length > 1,
                    "grid-cols-2": inputValue.length > 2,
                  })}
                >
                  {inputValue.map((img: File, index: number) => (
                    <ImagePreview
                      key={index}
                      index={index}
                      inputValue={inputValue}
                      img={img}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              ) : inputValue && !Array.isArray(inputValue) ? (
                <div
                  className={cls(
                    "w-full h-full grid gap-sm p-sm relative grid-cols-1",
                  )}
                >
                  <ImagePreview
                    index={0}
                    inputValue={[inputValue]}
                    img={inputValue}
                    handleDelete={handleDelete}
                  />
                </div>
              ) : (
                <i className="las la-file-upload text-8xl text-accent-content/30"></i>
              )}
            </div>
            <div>
              {/* upload image  */}
              <div className="flex items-center gap-sm capitalize text-base mb-lg cursor-pointer">
                <span className="text-xl rounded-full border border-primary text-primary inline-flex items-center justify-center w-[40px] h-[40px]">
                  <i className="las la-camera"></i>
                </span>
                <span className="">upload image</span>
              </div>
              {/* delete image  */}
              <button
                type="button"
                className="flex items-center gap-sm capitalize text-base"
                onClick={() => handleDelete()}
              >
                <span className="text-xl rounded-full border border-error text-error inline-flex items-center justify-center w-[40px] h-[40px]">
                  <i className="las la-trash"></i>
                </span>
                <span className="">delete</span>
              </button>
            </div>
          </div>
        )}
      </label>
      {/* ********** */}

      {/* error  */}
      {error && (
        <div className="text-error text-sm mt-xs capitalize">{error}</div>
      )}
      {/* ********** */}
    </>
  );
});

export default InputFile;

function ImagePreview({
  index,
  inputValue,
  handleDelete,
  img,
}: {
  index: number;
  inputValue: any[];
  img: string | File;
  handleDelete: (index: number) => void;
}) {
  return (
    <div
      className={cls("w-full h-full rounded relative", {
        "!absolute -z-0 opacity-0": index > 3,
        "image-overlay": index === 3 && inputValue.length > 4,
      })}
      data-count={"+" + (inputValue.length - 4)}
    >
      <img
        src={typeof img === "string" ? img : window.URL.createObjectURL(img)}
        className="w-full h-full object-cover rounded"
      />
      {index < 4 && (
        <button type="button" onClick={() => handleDelete(index)}>
          <span className="absolute top-xs end-xs z-20 bg-white text-base rounded-full border border-error text-error inline-flex items-center justify-center w-[30px] h-[30px]">
            <i className="las la-trash"></i>
          </span>
        </button>
      )}
    </div>
  );
}

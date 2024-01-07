"use client";

import Input from "@/app/components/form/input";

import { debounce_timeout } from "@/constants";

import cls from "@/helpers/cls";

import useUrlSearchParams from "@/hooks/useUrlSearchParams";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

type Type_Search_Input = {
  search?: string;
};

export default function Search() {
  const { searchParams, setSearchParmas } = useUrlSearchParams();

  const searchValue = searchParams.get("search") || "";

  // react-hook-form
  const { register, watch, setValue } = useForm<Type_Search_Input>({
    defaultValues: {
      search: searchValue,
    },
  });

  // listen on value
  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    function subscriptionCallback(value: Type_Search_Input) {
      const { search } = value;

      // trime value
      const searchValue = search ? search.trim() : "";

      setSearchParmas({ searchParams: { key: "search", value: searchValue } });
    }

    // Subscribe to form input changes
    const subscribe = watch((value) => {
      // If there's an existing debounce timer, clear it
      clearTimeout(debounceTimer);

      // Set a new debounce timer
      debounceTimer = setTimeout(() => {
        subscriptionCallback(value);
      }, debounce_timeout);
    });

    return () => {
      // Unsubscribe from the callback on component unmount
      subscribe.unsubscribe();
      // Clear any pending debounce timer on component unmount
      clearTimeout(debounceTimer);
    };
  }, [watch, searchParams]);

  return (
    <div className="relative w-full sm:w-auto">
      <Input
        {...register("search")}
        inputProps={{
          type: "search",
          placeholder: "filter items...",
        }}
        className="w-full md:w-[400px] rounded-full"
      />

      <button
        type="button"
        className="absolute inset-1 start-auto bg-primary rounded-full w-[40px] text-xl text-white"
        onClick={() => (searchValue ? setValue("search", "") : null)}
      >
        <i
          className={cls("las", {
            "la-search": !searchValue,
            "la-times": searchValue,
          })}
        ></i>
      </button>
    </div>
  );
}

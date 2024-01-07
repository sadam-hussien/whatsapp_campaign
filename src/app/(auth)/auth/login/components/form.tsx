"use client";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

import Btn from "@/app/components/btn";

import Input from "@/app/components/form/input";

import Link from "next/link";

import { Type_Login_Inputs } from "@/app/(auth)/types";

import { useAppDispatch } from "@/hooks/useRedux";

import { saveUserData } from "@/store/globalReducer";

import { useRouter } from "next/navigation";

// form validation schema
const schema = Yup.object().shape({
  user: Yup.string().email("enter_valid_email").required("field_is_required"),
  password: Yup.string().required("field_is_required"),
});

export default function Form() {
  // router handler
  const router = useRouter();

  // dispatch
  const dispatch = useAppDispatch();

  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Type_Login_Inputs>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  // submit function
  function onSubmit(data: Type_Login_Inputs) {
    // save user data in store
    dispatch(
      saveUserData({
        // @ts-ignore
        data: { name: "mahmoud", email: "m.hus.dev@gmail.com", active: true },
        token: "token",
      }),
    );
    // redirect user to dashboard screen
    router.replace("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* email  */}
      <div className="mb-lg">
        <Input
          {...register("user")}
          inputProps={{
            placeholder: "enter your email",
            type: "email",
            autoComplete: "off",
          }}
          label="email"
          id="form-email-input"
          error={errors.user?.message}
          icon="las la-envelope"
        />
      </div>
      {/* ************* */}

      {/* password  */}
      <div className="mb-lg">
        <Input
          {...register("password")}
          inputProps={{
            type: "password",
            placeholder: "enter your password",
            autoComplete: "off",
          }}
          label="password"
          id="form-password-input"
          error={errors.password?.message}
          icon="las la-lock"
        />
        <div className="flex justify-end mt-xs">
          <Link href="/auth/recover" className="ms-auto text-sm text-primary">
            Forgot your password?
          </Link>
        </div>
      </div>
      {/* ************* */}

      {/* submit */}
      <div className="flex flex-wrap items-center justify-center min-[420px]:justify-between  gap-md pt-lg">
        <Btn
          type="submit"
          label="submit"
          icon="las la-long-arrow-alt-right"
          className="rounded-full min-w-full  min-[420px]:min-w-[150px]"
        />
        {/* <h6 className="text-sm">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-primary font-bold">
            Sign up
          </Link>
        </h6> */}
      </div>
      {/* ************* */}
    </form>
  );
}

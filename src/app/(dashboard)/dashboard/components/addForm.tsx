"use client";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

import Btn from "@/app/components/btn";

import Input from "@/app/components/form/input";

import useMutation from "@/hooks/useMutation";

import { useRouter } from "next/navigation";

import { Type_Create_Campaign } from "../types";

import { api_add_campaign } from "../server";

import Label from "@/app/components/form/label";

import toFormData from "@/helpers/toFormData";

import { TuiDatePicker } from "nextjs-tui-date-picker";

import moment from "moment";

import UploadExcelSheetWithPhones from "./uploadExcelSheetWithPhones";

// form validation schema
const schema = Yup.object().shape({
  phones: Yup.string().required("this field is required"),
  message: Yup.string().required("this field is required"),
  sending_at: Yup.string().required("this field is required"),
});

export default function AddForm({
  hideModal,
}: {
  data: {};
  hideModal: () => void;
}) {
  // router handler
  const router = useRouter();

  // submit request with react query
  const { mutate, isLoading } = useMutation({
    mutationFn: api_add_campaign,
  });

  // react-hook-form
  const formMethods = useForm<Type_Create_Campaign>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      sending_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,

    watch,
  } = formMethods;

  function handleType(
    file?: File,
  ): "chat" | "image" | "video" | "link" | "audio" {
    if (file) {
      const type = file.type;
      if (type.startsWith("image/")) {
        return "image";
      } else if (type.startsWith("video/")) {
        return "video";
      } else if (type.startsWith("audio/")) {
        return "audio";
      }
      return "link";
    }
    return "chat";
  }

  function onSubmit(data: Type_Create_Campaign) {
    // @ts-ignore
    const typeOfMessage = handleType(data.url[0]);

    const newData = {
      phones: data.phones,
      message: data.message,
      sending_at: data.sending_at,
      message_type: typeOfMessage,
      // @ts-ignore
      ...(typeOfMessage !== "chat" && { url: data.url[0] }),
    };

    const payload = toFormData(newData);

    mutate(payload, {
      onSuccess() {
        hideModal();
        router.refresh();
      },
    });
  }

  const urlValue = watch("url");

  function handlePreview(file: any) {
    if (typeof file === "string") {
      return file;
    }

    return URL.createObjectURL(file);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        name="create_new-camp-form"
      >
        {/* head of modal  */}
        <h4 className="capitalize text-xl text-accent-content mb-lg pb-md border-b border-b-accent-content/5">
          create new campaign
        </h4>

        {/* name  */}
        <div className="mb-lg">
          <div className="flex flex-row-reverse flex-wrap items-center gap-md">
            {/* @ts-ignore */}
            <UploadExcelSheetWithPhones setValue={setValue} />

            <div className="flex-1">
              <Input
                {...register("phones")}
                inputProps={{
                  placeholder: "phone",
                  type: "text",
                  id: "create_new-camp-form-phone",
                }}
                className="!bg-base-100"
                label="phone"
                error={errors.phones?.message}
              />
            </div>
          </div>
        </div>
        {/* ************* */}

        {/* name  */}
        <div className="mb-lg">
          <Label id="create_new-camp-form-message">message</Label>
          <textarea
            {...register("message")}
            className="!h-[120px] bg-base-100 textarea textarea-bordered w-full  focus:outline-primary/60 focus:outline-1 focus:outline-dashed"
            id="create_new-camp-form-message"
            placeholder="message"
          ></textarea>
          {errors.message?.message && (
            <div className="text-error text-sm mt-xs capitalize">
              {errors.message?.message}
            </div>
          )}
        </div>
        {/* ************* */}

        {/* name  */}
        <div className="mb-lg">
          <Label id="create_new-camp-form-sending_at">start at</Label>
          <TuiDatePicker
            handleChange={(val) => {
              setValue("sending_at", val);
            }}
            date={new Date()}
            format="yyyy-MM-dd HH:mm"
            // @ts-ignore
            containerWidth={"100%"}
            // @ts-ignore
            inputWidth={"100%"}
            containerHeight={48}
            padding={0}
            margin={0}
          />

          {errors.sending_at?.message && (
            <div className="text-error text-sm mt-xs capitalize">
              {errors.sending_at?.message}
            </div>
          )}
        </div>
        {/* ************* */}

        {/* name  */}
        <div className="mb-lg">
          <Label id="create_new-camp-form-add_attachment">add attachment</Label>
          <input
            id="create_new-camp-form-add_attachment"
            {...register("url")}
            type="file"
            className="hidden"
          />
          <label
            htmlFor="create_new-camp-form-add_attachment"
            className="h-[200px] w-full flex items-center justify-center input input-bordered bg-base-100 relative "
          >
            {urlValue?.length ? (
              <>
                {typeof urlValue === "string" && (
                  <img src={urlValue} className="max-h-[180px]" />
                )}

                {
                  // @ts-ignore
                  urlValue && urlValue[0].type.includes("image") && (
                    <img
                      // @ts-ignore
                      src={window.URL.createObjectURL(urlValue[0])}
                      className="max-h-[180px]"
                    />
                  )
                }

                {
                  // @ts-ignore
                  urlValue && urlValue[0].type.includes("video") && (
                    <video height="150" controls>
                      <source
                        // @ts-ignore
                        src={window.URL.createObjectURL(urlValue[0])}
                        type="video/mp4"
                      />
                      <source
                        // @ts-ignore
                        src={window.URL.createObjectURL(urlValue[0])}
                        type="video/ogg"
                      />
                    </video>
                  )
                }
              </>
            ) : (
              <i className="las la-cloud-upload-alt absolute text-[50px]"></i>
            )}
          </label>
        </div>
        {/* ************* */}

        {/* submit */}
        <div className="flex gap-md pt-md">
          <Btn
            type="submit"
            label="submit"
            icon="las la-long-arrow-alt-right"
            className="min-w-full  min-[420px]:min-w-[150px]"
            iconWrapperClassName="!rounded-btn"
            isLoading={isLoading}
          />
          <Btn
            type="button"
            label="cancel"
            className="btn-neutral"
            onClick={hideModal}
            disabled={isLoading}
          />
        </div>
        {/* ************* */}
      </form>
    </>
  );
}

import { default_config } from "@/constants";

import { Type_Lang_Model } from "@/constants/types";

import { cookies } from "next/headers";

export default function getLang() {
  const cookieStore = cookies();

  // get language
  const cookiesGetLang = cookieStore.has("lang")
    ? cookieStore.get("lang")
    : undefined;

  const langOptions: Type_Lang_Model = cookiesGetLang
    ? JSON.parse(cookiesGetLang.value)
    : default_config.default_lang;

  return langOptions;
}

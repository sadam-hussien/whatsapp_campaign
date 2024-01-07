import { default_config } from "@/constants";

import { cookies } from "next/headers";

export default function getTheme() {
  const cookieStore = cookies();
  // get theme
  const cookiesGetTheme = cookieStore.has("theme")
    ? cookieStore.get("theme")
    : undefined;
  const themeOptions: string = cookiesGetTheme
    ? cookiesGetTheme.value
    : default_config.default_theme;
  return themeOptions;
}

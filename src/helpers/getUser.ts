import { cookies } from "next/headers";

import { Type_User_Data } from "@/constants/types";

export default function getUser(): Type_User_Data | null | undefined {
  const cookieStore = cookies();

  // get theme
  const cookiesGetUser = cookieStore.has("user")
    ? cookieStore.get("user")?.value
    : undefined;

  return cookiesGetUser ? JSON.parse(cookiesGetUser) : undefined;
}

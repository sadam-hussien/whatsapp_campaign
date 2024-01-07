import setupAxios from "@/setupAxios";

import { AxiosPromise } from "axios";

import { Type_Login_Inputs } from "./types";

export function api_login(data: Type_Login_Inputs): AxiosPromise {
  return setupAxios().post("admin/login", data);
}

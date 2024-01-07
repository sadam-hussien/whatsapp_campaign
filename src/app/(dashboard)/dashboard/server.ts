import setupAxios from "@/setupAxios";

import { AxiosPromise } from "axios";

import { Type_Parmas_config } from "@/app/(dashboard)/types";

import { Type_Create_Campaign } from "./types";

export function api_get_campaigns(
  params: Type_Parmas_config | undefined,
): AxiosPromise {
  return setupAxios().get("campaigns", {
    params,
  });
}

export function api_add_campaign(data: FormData): AxiosPromise {
  return setupAxios().post("campaigns", data);
}

export function api_get_single_campaign(id: number | string): AxiosPromise {
  return setupAxios().get(`campaigns/${id}`);
}

export function api_edit_campaign(id: number | string) {
  return setupAxios().patch(`campaigns/${id}`);
}

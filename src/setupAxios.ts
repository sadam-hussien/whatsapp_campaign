import { getCookie, deleteCookie } from "cookies-next";

import axios, { AxiosInstance } from "axios";

import { default_config } from "./constants";

const isServer = typeof window === "undefined";

export default function setupAxios(): AxiosInstance {
  const appClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Accept: "application/json",
      ContentType: "application/json",
    },
  });

  appClient.interceptors.request.use(async (config) => {
    let token = "";

    let lang = "";

    // is client
    if (typeof window !== "undefined") {
      const getToken = getCookie("token");

      const getLang = getCookie("lang");

      token = getToken ?? "";

      lang = getLang
        ? JSON.parse(getLang)?.lang
        : default_config.default_lang.lang;
    }
    // is server
    else {
      const nextCookies = await import("next/headers");

      const cookies = nextCookies.cookies();

      const getToken = cookies.get("token")?.value;

      const getLang = cookies.get("lang")?.value;

      token = getToken ?? "";

      lang = getLang
        ? JSON.parse(getLang)?.lang
        : default_config.default_lang.lang;
    }

    config.headers.Authorization = `Bearer ${token ?? ""}`;

    config.headers["Accept-Language"] = lang;

    config.headers["Content-Language"] = lang;

    return config;
  });

  appClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if the user unauthenticated
      if (error.response?.status === 401) {
        deleteCookie("token");
        deleteCookie("user");
        if (!isServer) {
          const path = window.location.pathname;
          if (typeof window && !path.includes("auth")) {
            window.location.reload();
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return appClient;
}

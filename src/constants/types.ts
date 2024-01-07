import { modals_types } from ".";

export interface Type_Lang_Model {
  lang: string;
  dir: string;
}

export interface Type_User_Data {
  name: string;
  email: string;
  role: string;
  id: string;
  active: boolean;
  avatar?: string;
  phone: string;
  status: "active" | "inactive";
  fcm_token: string;
}

export type Type_Modal_types = keyof typeof modals_types | undefined;

export type Type_Campaign_Model = {
  id: string | number;
  title: string;
  message_type: string;
  url: null | string;
  count: number;
  remaining: number;
  sending_at: string;
  is_active: 0 | 1;
  message: string;
  created_at: string;
  updated_at: string;
};

export type Type_Create_Campaign = {
  phones: string;
  message: string;
  sending_at: string;
  // message_type: "chat" | "image" | "video" | "link" | "audio";
  url?: File;
};

export type Type_Create_Role = {
  name_en: string;
  name_ar: string;
  permissions: Array<string>;
};

export type Type_Add_Brand = {
  image: any;
  name: string;
};

export const default_config = {
  default_lang: {
    lang: "en",
    dir: "ltr",
  },
  default_theme: "light",
};

export const sidebar_links = [
  {
    icon: "las la-home",
    title: "dashboard",
    path: "/dashboard",
  },
  {
    icon: "las la-user-tag",
    title: "roles",
    path: "/dashboard/roles",
  },
  // {
  //   icon: "las la-store-alt",
  //   title: "ecommerce",
  //   path: "/dashboard/ecommerce",
  // },
  // {
  //   icon: "las la-user-alt",
  //   title: "users",
  //   path: "/dashboard/users",
  // },
  // {
  //   icon: "lab la-facebook-messenger",
  //   title: "chat",
  //   path: "/dashboard/chat",
  // },
  {
    icon: "las la-cog",
    title: "settings",
    path: "/dashboard/settings",
    isLast: true,
    className: "mt-auto mb-0",
  },
];

export const layouts_transition_default = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  // transition: { delay: 0.1 }
};

export const pages_transition_default = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
  transition: { delay: 0.1 },
};

export const modal_transition_default = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export const available_languages_list = [
  {
    lang: "en",
    dir: "ltr",
    flag: "/images/flag-en.svg",
    title: "english",
  },
  {
    lang: "ar",
    dir: "rtl",
    flag: "/images/flag-ar.svg",
    title: "arabic",
  },
];

export const ecommerce_links = [
  {
    path: "/dashboard/ecommerce/brand",
    title: "brand",
  },
  {
    path: "/dashboard/ecommerce/categories",
    title: "categories",
  },
  {
    path: "/dashboard/ecommerce/products",
    title: "products",
  },
  {
    path: "/dashboard/ecommerce/reviews",
    title: "reviews",
  },
];

export const modals_types = {
  edit: "edit",
  view: "view",
  delete: "delete",
  add: "add",
  status: "status",
  other: "other",
  filter: "filter",
  sort: "sort",
};

export const debounce_timeout = 300;

// validation files
//  Yup.mixed()
//     .required("Please_upload_an_image")
//     .test("required", "Please_upload_an_image", (file) => {
//       console.log(typeof file, file);
//       if (!file) return false;

//       if (!(file as FileList).length) return false;
//       return true;
//     })
//     .test("fileType", "unsupported_file_format", (file) => {
//       if (!file) return false;
//       if (!(file as FileList).length) return false;
//       const supportedFormats = ["image/jpeg", "image/png"];
//       return Array.from(file as FileList).every((f) =>
//         supportedFormats.includes(f.type),
//       );
//     }),

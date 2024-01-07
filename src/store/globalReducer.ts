import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCookie, deleteCookie, setCookie } from "cookies-next";

import {
  Type_User_Data,
  Type_Lang_Model,
  Type_Modal_types,
} from "@/constants/types";

interface Type_Global_State {
  user: Type_User_Data | null | undefined;
  theme: string | null | undefined;
  lang: Type_Lang_Model | null | undefined;
  page: string;
  modal: {
    type: Type_Modal_types;
    isOpen: boolean;
    data: {};
    id: string | number | undefined | null;
  };
  clearFilter: boolean;
}

function getcookiesValues() {
  const user = getCookie("user");
  const theme = getCookie("theme");
  const lang = getCookie("lang");

  return {
    user: user ? JSON.parse(user) : null,
    theme,
    lang: lang ? JSON.parse(lang) : null,
  };
}

const initialState: Type_Global_State = {
  user: getcookiesValues().user,
  lang: getcookiesValues().lang,
  theme: getcookiesValues().theme,
  page: "",
  modal: {
    type: undefined,
    isOpen: false,
    data: {},
    id: "",
  },
  clearFilter: false,
};

const globalReducer = createSlice({
  name: "global_reducer",
  initialState,
  reducers: {
    // save data
    saveUserData: (
      state,
      action: PayloadAction<{ token: string; data: Type_User_Data }>,
    ) => {
      setCookie("token", action.payload.token);
      setCookie("user", JSON.stringify(action.payload.data));
      state.user = action.payload.data;
    },

    // logout
    logoutUser: (state) => {
      deleteCookie("token");
      deleteCookie("user");
    },

    // toggle theme
    toggleTheme: (state, action: PayloadAction<string>) => {
      setCookie("theme", action.payload);
      state.theme = action.payload;
      document.documentElement.dataset.theme = action.payload;
    },

    // set page title
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },

    // open modal
    openModal: (
      state,
      action: PayloadAction<{
        data: {};
        id: string | number;
        type: Type_Modal_types;
      }>,
    ) => {
      state.modal.isOpen = true;
      state.modal.data = action.payload.data;
      state.modal.type = action.payload.type;
      state.modal.id = action.payload.id;
    },

    // close modal
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.data = {};
      state.modal.type = undefined;
      state.modal.id = "";
    },

    // clear filter
    clearFilter: (state) => {
      state.clearFilter = !state.clearFilter;
    },
  },
});

export default globalReducer.reducer;

export const {
  saveUserData,
  logoutUser,
  toggleTheme,
  setPageTitle,
  openModal,
  closeModal,
  clearFilter,
} = globalReducer.actions;

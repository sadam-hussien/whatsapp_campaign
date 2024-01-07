// providers like -> redux, react query
import Providers from "./Providers";

import getLang from "@/helpers/getLang";

import getTheme from "@/helpers/getTheme";

import { ToastContainer } from "react-toastify";

import { fontAr, fontEn } from "@/app/fonts";

// react date picker
import "react-datepicker/dist/react-datepicker.css";

// toastify library
import "react-toastify/dist/ReactToastify.css";

// global css file
import "./style/globals.css";

// metadata
export const metadata = {
  title: "Campaigns",
  description:
    "Dive into a world where your needs are met with simplicity, speed, and support.  Here is what we offer for your currency journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const langOptions = getLang();

  const themeOptions = getTheme();

  return (
    <html
      lang={langOptions.lang}
      dir={langOptions.dir}
      data-theme={themeOptions}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>

      <body
        className={
          langOptions.lang === "ar" ? fontAr.className : fontEn.className
        }
      >
        <Providers>{children}</Providers>
        {/* library for toast  */}
        <ToastContainer />
        {/* for modals  */}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

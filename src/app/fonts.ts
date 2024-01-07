import { Cairo, Poppins } from "next/font/google";

export const fontEn = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const fontAr = Cairo({
  display: "swap",
  variable: "--main-font",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

import { Montserrat, Karla } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: [ "100",  "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: [ "200", "300", "400", "500", "600", "700", "800"],
});
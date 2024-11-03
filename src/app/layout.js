import { Raleway, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/Providers";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Jalal Ahmed Portfolio",
  description: "Junior Front-End Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} text-primaryText`}  >
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

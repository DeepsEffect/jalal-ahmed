import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/Providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Jalal Ahmed Portfolio",
  description: "Junior Front-End Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-primaryText`}  >
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

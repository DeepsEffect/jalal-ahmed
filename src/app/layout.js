import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jalal Ahmed Portfolio",
  description: "Junior Front-End Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

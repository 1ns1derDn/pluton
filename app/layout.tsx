//fonts
import { Noto_Sans } from "next/font/google";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";

const fontPrimary = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontPrimary.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}

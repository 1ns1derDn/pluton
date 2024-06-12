//fonts
import { Noto_Sans } from "next/font/google";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/global.css";
import { AuthProvider } from "@/context";

const fontPrimary = Noto_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={fontPrimary.className} suppressHydrationWarning={true}>
        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

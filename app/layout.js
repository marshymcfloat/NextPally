import "@/app/globals.css";

import MainHeader from "@/components/MainHeader/MainHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-customBGColor">
        <MainHeader />

        {children}
      </body>
    </html>
  );
}

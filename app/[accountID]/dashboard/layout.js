import "@/app/globals.css";
import TanStackProvider from "@/components/TanstackProvider";
import Head from "next/head";

export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-inter overflow-hidden bg-customBGColor">
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}

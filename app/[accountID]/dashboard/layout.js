import "@/app/globals.css";
import TanStackProvider from "@/components/TanstackProvider";
import ReduxProvider from "@/components/Redux/ReduxProvider";
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
      <body className="overflow-hidden bg-customBGColor font-inter">
        <ReduxProvider>
          <TanStackProvider>{children}</TanStackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

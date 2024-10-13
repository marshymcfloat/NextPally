import "@/app/globals.css";

import TanStackProvider from "@/components/TanstackProvider";
export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-customBGColor">
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}

import "@/app/globals.css";

import TanStackProvider from "@/components/TanstackProvider";
export default function DashBoardLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-customBGColor">
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}

import "@/app/globals.css";

import DashboardNavBar from "@/components/Dashboard/NavBar/DashboardNavBar";

export default function HomePageLayout({ children }) {
  return (
    <html>
      <body className="flex h-screen items-center overflow-hidden bg-customBGColor">
        {children}
        <DashboardNavBar />
      </body>
    </html>
  );
}

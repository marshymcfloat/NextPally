"use client";

import BusinessIcon from "./Business-Icon";
import CashierIcon from "./Cashier-icon";
import HomeIcon from "./Home-icon";
import WorkIcon from "./Work-Icon";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function DashboardNavBar() {
  const route = useRouter();
  const { accountID } = useParams();

  const [isVisible, setIsVisible] = useState(true);

  const roles = ["cashier", "worker"]; // Removed the empty initial entry

  const designatedIcons = [
    {
      iconID: "icon01",
      icon: <BusinessIcon />,
      role: "owner",
      route: `/${accountID}/business`,
    },
    {
      iconID: "icon02",
      icon: <CashierIcon />,
      role: "cashier",
      route: `/${accountID}/cashier`,
    },
    {
      iconID: "icon03",
      icon: <WorkIcon />,
      role: "worker",
      route: `/${accountID}/work`,
    },
  ];

  function handleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      {roles.length !== 0 && (
        <div
          className={
            isVisible
              ? "absolute bottom-0 z-10 flex h-[70px] w-full items-center justify-evenly rounded-t-3xl bg-customGreen01 transition-all duration-150"
              : "absolute bottom-[-70px] z-10 flex h-[70px] w-full items-center justify-evenly rounded-t-3xl bg-customGreen01 transition-all duration-150"
          }
        >
          <div
            className="absolute top-[-20px] flex h-6 w-[15%] items-center justify-center rounded-t-lg bg-customGreen01"
            onClick={handleVisibility}
          >
            <div className="h-1 w-[70%] bg-customBGColor"></div>
          </div>

          <HomeIcon />
          {roles.map((role) => {
            const roleIcon = designatedIcons.find((icon) => icon.role === role);
            return roleIcon ? (
              <div
                key={roleIcon.iconID}
                onClick={() => {
                  route.push(roleIcon.route); // Corrected to use roleIcon.route
                }}
              >
                {roleIcon.icon}
              </div>
            ) : null;
          })}
        </div>
      )}
    </>
  );
}

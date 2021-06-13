import { ReactNode } from "react";

import { DashboardSideMenu } from "./DashboardSideMenu";
import { DashboardTopBar } from "./DashboardTopBar";

interface DashboardLayoutProps {
  children: ReactNode;
  pageName: "dashboard" | "settings";
}

export const DashboardLayout = ({
  children,
  pageName,
}: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex-col">
      <div className="h-full flex flex-col">
        <DashboardTopBar />
        <div className="flex flex-grow">
          <DashboardSideMenu activeTab={pageName} />
          {children}
        </div>
      </div>
    </div>
  );
};

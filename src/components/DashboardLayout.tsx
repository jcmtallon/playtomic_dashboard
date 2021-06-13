import { ReactNode } from "react";

import { DashboardSideMenu } from "./DashboardSideMenu";
import { DashboardTopBar } from "./DashboardTopBar";

interface DashboardLayoutProps {
  children: ReactNode;
  name: "home" | "settings";
  title: string;
}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex-col">
      <div className="h-full flex flex-col">
        <DashboardTopBar />
        <div className="flex flex-grow">
          <DashboardSideMenu activeTab={props.name} />
          <div className="pt-6 px-6 w-full">
            <div className="border-b border-gray-300 w-full pb-2 mb-6">
              <h1 className="text-2xl">{props.title}</h1>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

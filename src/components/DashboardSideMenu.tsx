import { ReactComponent as DashBoardIcon } from "../assets/dashboard.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { DashboardSideMenuItem } from "./DashboardSideMenuItem";

interface DashboardSideMenuProps {
  activeTab: "dashboard" | "settings";
}

export const DashboardSideMenu = ({ activeTab }: DashboardSideMenuProps) => {
  return (
    <div className="bg-white h-full w-44 border-r border-gray-200 shadow-lg pt-6">
      <nav>
        <ul>
          <DashboardSideMenuItem
            to="/"
            isActive={activeTab === "dashboard"}
            icon={DashBoardIcon}
            labelText="Home"
          />
          <DashboardSideMenuItem
            to="/settings"
            isActive={activeTab === "settings"}
            icon={SettingsIcon}
            labelText="Settings"
          />
        </ul>
      </nav>
    </div>
  );
};

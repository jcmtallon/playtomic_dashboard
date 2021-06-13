import { DashboardSideMenu } from "../../components/DashboardSideMenu";
import { DashboardTopBar } from "../../components/DashboardTopBar";

export const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex-col">
      <div className="h-full flex flex-col">
        <DashboardTopBar />
        <div className="flex flex-grow">
          <DashboardSideMenu activeTab="home" />
          <div>HOME</div>
        </div>
      </div>
    </div>
  );
};

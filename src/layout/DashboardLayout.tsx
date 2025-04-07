import Sidebar from "@/shared/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

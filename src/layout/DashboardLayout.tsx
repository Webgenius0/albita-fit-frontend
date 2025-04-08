import Sidebar from "@/shared/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="max-h-screen w-full overflow-y-scroll">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default DashboardLayout;

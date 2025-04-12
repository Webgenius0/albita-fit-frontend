import Sidebar from "@/shared/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <Sidebar />

      <div className="ml-auto max-h-screen min-h-screen overflow-y-scroll lg:w-[calc(100%-80px)]">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default DashboardLayout;

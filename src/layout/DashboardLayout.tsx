import Sidebar from "@/shared/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <Sidebar />

      <div className="ml-auto max-h-screen min-h-screen w-[calc(100%-80px)] overflow-y-scroll">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default DashboardLayout;

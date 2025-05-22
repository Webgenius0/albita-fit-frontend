import { navigateTo } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import Sidebar from "@/shared/Sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const DashboardLayout = () => {
  const pendingUserInfo = useAppSelector((state) => state.pendingUserInfo);

  if (pendingUserInfo.accountStatus === "pending") {
    navigateTo("/onboard");
    return;
  }

  return (
    <div className="relative">
      <Sidebar />

      <div className="ml-auto max-h-screen min-h-screen overflow-y-scroll lg:w-[calc(100%-90px)]">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  );
};

export default DashboardLayout;

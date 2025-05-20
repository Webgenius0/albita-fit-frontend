import { navigateTo } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  const pendingUserInfo = useAppSelector((state) => state.pendingUserInfo);

  // if no user info is found, redirect to login page so that can't access any page
  if (Object.keys(pendingUserInfo).length === 0) {
    navigateTo("/login");
    return;
  }

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;

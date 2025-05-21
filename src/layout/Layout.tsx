import { navigateTo } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  const pendingUserInfo = useAppSelector((state) => state.pendingUserInfo);

  // if no user info is found, redirect to login page so that can't access any page
  if (!pendingUserInfo.email || !pendingUserInfo.accountStatus) {
    navigateTo("/login");
    return;
  } else {
    navigateTo("/welcome");
  }

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Layout;

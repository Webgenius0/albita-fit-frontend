import { navigateTo } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Outlet } from "react-router-dom";

const PublicUserLayout = () => {
  const pendingUserInfo = useAppSelector((state) => state.pendingUserInfo);

  // if the user is already registered and email is verified, redirect to welcome page
  if (pendingUserInfo.accountStatus || pendingUserInfo.email) {
    navigateTo("/welcome");
    return;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicUserLayout;

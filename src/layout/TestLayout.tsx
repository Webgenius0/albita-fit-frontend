import { navigateTo } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Outlet } from "react-router-dom";

const TestLayout = () => {
  const pendingUserInfo = useAppSelector((state) => state.pendingUserInfo);

  if (
    pendingUserInfo.accountStatus === "pending" &&
    pendingUserInfo.isTestGiven === false
  ) {
    return (
      <>
        <Outlet />
      </>
    );
  }

  //redirecting to register the user first
  navigateTo("/register");

  return;
};

export default TestLayout;

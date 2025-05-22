import { useAppSelector } from "@/redux/hooks";

const PendingUserRoute = () => {
  const info = useAppSelector((state) => state.pendingUserInfo);

  return <div></div>;
};

export default PendingUserRoute;

import ProfileInfo from "@/components/profile/ProfileInfo";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="space-y-11">
      <ProfileInfo />
      <Outlet />
    </div>
  );
};

export default Profile;

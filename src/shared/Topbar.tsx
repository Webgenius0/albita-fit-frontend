import logo from "@/assets/images/dashboard-logo.svg";
import logo2 from "@/assets/images/plan-logo-bg-2.svg";
import avatar from "@/assets/images/banner-compact-1.jpg";
import Notification from "@/components/notification/Notification";

const Topbar = ({ version = "dark" }: { version?: "dark" | "light" }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-14 w-14">
        <img
          src={version === "light" ? logo2 : logo}
          alt=""
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center gap-4.5">
        <Notification/>

        <div className="h-14 w-14 overflow-hidden rounded-full">
          <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

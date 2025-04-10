import logo from "@/assets/images/dashboard-logo.svg";

import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type PropTypes = {
  bgImg: string;
  title?: string;
};

const TrainingCover = ({ bgImg, title }: PropTypes) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "30% 40%",
        }}
        className="min-h-[60vh] bg-cover bg-no-repeat"
      >
        {/* top part */}
        <div className="px-11 py-9">
          <div className="flex items-center justify-between">
            <div className="h-14 w-14">
              <img src={logo} className="h-full w-full" alt="dashboard_logo" />
            </div>

            <Link to={"/"} className="block h-fit w-fit">
              <ChevronLeft color="#e77b9b" className="size-20" />
            </Link>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div></div>
    </div>
  );
};

export default TrainingCover;

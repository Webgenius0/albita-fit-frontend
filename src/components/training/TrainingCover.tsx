import logo from "@/assets/images/dashboard-logo.svg";

import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type PropTypes = {
  bgImg: string;
  title?: string;
};

const TrainingCover = ({ bgImg, title = "demo title" }: PropTypes) => {
  const pillStyle = `bg-primary-pink px-4.5 py-2.5 text-white rounded-[34px] font-semibold`;
  return (
    <div>
      {/* upper section */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "30% 40%",
        }}
        className="relative min-h-[55vh] w-full bg-cover bg-no-repeat"
      >
        {/* top part */}
        <div className="relative z-50 px-14 py-9">
          {/* arrow icon areas */}
          <div className="flex items-center justify-between">
            <div className="h-14 w-14">
              <img src={logo} className="h-full w-full" alt="dashboard_logo" />
            </div>

            <Link to={"/"} className="block h-fit w-fit">
              <ChevronLeft color="#e77b9b" className="size-18" />
            </Link>
          </div>

          {/* title area */}
          <div className="pt-16 pb-7">
            <h3 className="text-[70px] leading-[85px] font-bold text-white">
              Entrenar
            </h3>
            <p className="text-[44px] leading-[52px] font-bold text-white">
              {" "}
              {title}{" "}
            </p>
          </div>

          {/* button label area */}
          <div className="flex items-center gap-5">
            <p className={pillStyle}>
              Material recomendado para entrenar {title.toLowerCase()}
            </p>
            <p className={pillStyle}>Calentamiento</p>
          </div>
        </div>

        {/* bg overlay */}
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-[rgba(0,0,0,.5)]"></div>
      </div>
    </div>
  );
};

export default TrainingCover;

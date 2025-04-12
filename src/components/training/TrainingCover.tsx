import logo from "@/assets/images/dashboard-logo.svg";

import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type PropTypes = {
  bgImg: string;
  title?: string;
  heading?: string;
};

const TrainingCover = ({
  bgImg,
  title = "demo title",
  heading = "Entrenar",
}: PropTypes) => {
  const pillStyle = `bg-primary-pink px-4.5 py-1.5 lg:py-2.5 text-white rounded-[34px] font-semibold`;
  return (
    <div>
      {/* upper section */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "30% 40%",
        }}
        className="relative min-h-[45vh] w-full bg-cover bg-no-repeat lg:min-h-[55vh]"
      >
        {/* top part */}
        <div className="relative z-50 px-5 py-6 lg:px-14 lg:py-9">
          {/* arrow icon areas */}
          <div className="flex items-center justify-between">
            <div className="h-14 w-14">
              <img src={logo} className="h-full w-full" alt="dashboard_logo" />
            </div>

            <Link to={"/"} className="block h-fit w-fit">
              <ChevronLeft color="#e77b9b" className="size-12 lg:size-18" />
            </Link>
          </div>

          {/* title area */}
          <div className="pt-8 pb-7 lg:pt-16">
            <h3 className="text-[45px] leading-[60px] font-bold text-white lg:text-[70px] lg:leading-[85px]">
              {heading}
            </h3>
            <p className="text-3xl leading-[52px] font-bold text-white lg:text-[44px]">
              {title}
            </p>
          </div>

          {/* button label area */}
          <div className="flex flex-wrap items-start gap-5 lg:flex-nowrap lg:items-center">
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

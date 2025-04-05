import logo from "@/assets/images/pink-logo.svg";

type PropTypes = {
  size?: "sm" | "regular";
};

const PinkLogo = ({ size = "regular" }: PropTypes) => {
  return (
    <div
      style={{
        animationDuration: "2s",
      }}
      className={`subtle_bounce h-[100px] w-[100px] ${size === "regular" ? `lg:h-[240px] lg:w-[240px]` : `lg:h-[140px] lg:w-[140px]`} `}
    >
      <img src={logo} alt="primary_brand_logo" className="h-full w-full" />
    </div>
  );
};

export default PinkLogo;

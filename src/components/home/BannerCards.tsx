import CommonButton from "../common/CommonButton";

type PropTypes = {
  title: string;
  bannerImg: string;
  heading: string;
  description?: string;
  targetLink: string;
  targetText: string;
};

const BannerCards = ({
  title,
  bannerImg,
  heading,
  description,
  targetLink,
  targetText,
}: PropTypes) => {
  return (
    <div className="w-full space-y-4">
      <p className="font-satoshi text-2xl font-semibold text-[#222] uppercase">
        {" "}
        {heading}{" "}
      </p>

      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
        className="banner_card_cover relative flex aspect-[3/1.5] items-center justify-start overflow-hidden rounded-2xl bg-cover bg-center"
      >
        <div className="relative z-20 max-w-[60%] space-y-4 p-7">
          <h3 className="font-extrabold text-[#EEE] lg:text-4xl lg:leading-10 xl:text-[50px] xl:leading-[60px]">
            {" "}
            {title}{" "}
          </h3>

          <p className="text-base font-medium text-white xl:text-lg">
            {" "}
            {description}{" "}
          </p>

          <CommonButton target={targetLink} text={targetText} />
        </div>

        {/* bg overlay */}
        <div className="banner_card_overlay absolute top-0 left-0 z-10 h-full w-full"></div>
      </div>
    </div>
  );
};

export default BannerCards;

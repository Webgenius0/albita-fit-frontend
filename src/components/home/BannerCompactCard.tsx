import CommonButton from "../common/CommonButton";

type PropTypes = {
  title: string;
  coverImg: string;
  targetLink: string;
  targetText: string;
};

const BannerCompactCard = ({
  title,
  coverImg,
  targetLink,
  targetText,
}: PropTypes) => {
  return (
    <div className="banner_compact_card overflow-hidden rounded-[12px]">
      <div className="aspect-square">
        <img src={coverImg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col items-center gap-y-3 p-3">
        <p className="text-text-primary text-2xl font-bold"> {title} </p>

        <CommonButton text={targetText} target={targetLink} variant="hover" textPink />
      </div>
    </div>
  );
};

export default BannerCompactCard;

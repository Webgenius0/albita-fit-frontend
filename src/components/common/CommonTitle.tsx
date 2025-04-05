type PropTypes = {
  children: React.ReactNode;
  textSize?: "sm" | "regular";
  alignCenter?: boolean;
};

const CommonTitle = ({
  children,
  textSize = "regular",
  alignCenter,
}: PropTypes) => {
  return (
    <h3
      className={`text-text-primary text-2xl font-semibold lg:text-4xl ${alignCenter ? `text-center` : ``} ${textSize === "regular" ? `lg:text-4xl` : `lg:text-[30px]`} `}
    >
      {children}
    </h3>
  );
};

export default CommonTitle;

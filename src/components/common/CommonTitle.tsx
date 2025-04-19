type PropTypes = {
  children: React.ReactNode;
  textSize?: "sm" | "regular";
  alignCenter?: boolean;
  textBold?: boolean;
  version?: "light" | "dark";
};

const CommonTitle = ({
  children,
  textSize = "regular",
  alignCenter,
  textBold,
  version = "dark",
}: PropTypes) => {
  return (
    <h3
      className={`${version==='dark'?`text-text-primary`:`text-white`} text-2xl ${textBold ? `font-bold` : `font-semibold`} lg:text-4xl ${alignCenter ? `text-center` : ``} ${textSize === "regular" ? `lg:text-4xl` : `lg:text-[30px]`} `}
    >
      {children}
    </h3>
  );
};

export default CommonTitle;

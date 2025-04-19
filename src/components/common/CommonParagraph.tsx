const CommonParagraph = ({
  children,
  textGray,
  version = "dark",
}: {
  children: React.ReactNode;
  textGray?: boolean;
  version?: "light" | "dark";
}) => {
  return (
    <p
      className={`font-satoshi ${textGray ? "text-text-gray" : version === "dark" ? "text-text-primary" : "text-white"} text-[17px] font-normal`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph;

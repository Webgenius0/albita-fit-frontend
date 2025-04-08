const CommonParagraph = ({
  children,
  textGray,
}: {
  children: React.ReactNode;
  textGray?: boolean;
}) => {
  return (
    <p
      className={`font-satoshi ${textGray ? "text-text-gray" : "text-text-primary"} text-[17px] font-normal`}
    >
      {children}
    </p>
  );
};

export default CommonParagraph;

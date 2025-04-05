const CommonParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="font-satoshi text-text-primary text-[17px] font-medium">
      {children}
    </p>
  );
};

export default CommonParagraph;

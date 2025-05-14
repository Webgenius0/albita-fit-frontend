const CommonSlideWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-full lg:px-20">
      <div className="mx-auto w-full lg:max-w-[80%]">{children}</div>
    </div>
  );
};

export default CommonSlideWrapper;

const CommonSlideWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-full px-20">
      <div className="mx-auto max-w-[80%]">{children}</div>
    </div>
  );
};

export default CommonSlideWrapper;

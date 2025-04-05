import banner from "@/assets/images/welcome-banner.jpg";
import logo from "@/assets/images/transparent-logo.svg";
import CommonButton from "@/components/common/CommonButton";

const GetStarted = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
      }}
      className="relative flex h-screen w-screen items-center justify-center bg-cover bg-center after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)]"
    >
      <div className="relative z-10 flex flex-col items-center gap-20">
        <img
          src={logo}
          alt="transparent_logo"
          className="relative h-[230px] w-[230px]"
        />

        <div>
          <CommonButton
            text="Comenzar"
            variant="hover"
            target="/"
            textBold
            hasArrow
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

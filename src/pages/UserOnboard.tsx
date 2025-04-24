import cover from "@/assets/images/onboard-cover.jpg";
import CommonButton from "@/components/common/CommonButton";

const UserOnboard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
      }}
      className="relative min-h-screen w-full bg-cover bg-center"
    >
      {/* main content */}
      <div className="relative z-20 space-y-6 p-[90px]">
        <h1 className="mb-5 text-[75px] leading-20 font-bold text-white">
          ¡Maria Elena Escobar
        </h1>
        <p className="text-4xl leading-9 font-medium text-white">
          estás a un paso de alcanzar tu forma física ideal!
        </p>
        <CommonButton text="Comenzar" hasArrow variant="hover" target="/account-status" />
      </div>

      {/* bg overlay */}
      <div
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.51) 0%, rgba(0, 0, 0, 0) 100%)`,
        }}
        className="absolute top-0 left-0 z-10 h-full w-full"
      ></div>
    </div>
  );
};

export default UserOnboard;

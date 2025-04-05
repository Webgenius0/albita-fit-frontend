import CommonButton from "@/components/common/CommonButton";
import CommonContainer from "@/components/common/CommonContainer";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";

const Plans = () => {
  return (
    <CommonContainer>
      <div className="mx-auto my-12 flex max-w-[600px] flex-col gap-y-7 text-center">
        <div className="mx-auto w-fit">
          <PinkLogo size="sm" />
        </div>

        <CommonTitle alignCenter>
          Conoce lo que incluye cada plan antes de comenzar
        </CommonTitle>
      </div>

      {/* Plans */}
      <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col justify-center gap-6 md:flex-row">
        {/* Plan Plata */}
        <div
          className={`relative overflow-hidden rounded-xl bg-[#d3b0b9]/80 p-6 shadow-lg transition-transform hover:scale-105 md:w-1/2`}
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#e16891]/20"></div>
          <div className="relative z-10">
            <div className="mb-2 flex items-end">
              <span className="text-6xl font-bold text-white">120€</span>
              <span className="ml-2 text-xl font-medium text-white/80">
                TRIMESTRAL
              </span>
            </div>
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-white">Plan Plata</h2>
            </div>
            <p className="text-sm text-white/80">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>

        {/* Plan Oro */}
        <div
          className={`relative overflow-hidden rounded-xl bg-[#e6c066]/80 p-6 shadow-lg transition-transform hover:scale-105 md:w-1/2`}
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#e6c066]/40"></div>
          <div className="relative z-10">
            <div className="mb-2 flex items-end">
              <span className="text-6xl font-bold text-white">210$</span>
              <span className="ml-2 text-xl font-medium text-white/80">
                TRIMESTRAL
              </span>
            </div>
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-white">Plan Oro</h2>
            </div>
            <p className="text-sm text-white/80">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 flex justify-center">
        <CommonButton text="Empezar test" target="/plans" />
      </div>
    </CommonContainer>
  );
};

export default Plans;

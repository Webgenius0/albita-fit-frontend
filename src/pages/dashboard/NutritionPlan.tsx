import Topbar from "@/shared/Topbar";
import cover from "@/assets/images/nutrition-plan-cover.jpg";
import CommonTitle from "@/components/common/CommonTitle";
import CommonParagraph from "@/components/common/CommonParagraph";
import DietPlans from "@/components/nutrition-plan/DietPlans";

const NutritionPlan = () => {
  return (
    <div>
      {/* top part */}
      <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className="relative min-h-[40vh] bg-cover bg-center px-20 py-14"
      >
        <div className="relative z-10 space-y-6">
          <Topbar version="light" />

          <div className="max-w-[800px] space-y-5">
            <CommonTitle version="light">
              Opciones de comidas para tu semana
            </CommonTitle>
            <CommonParagraph version="light">
              <p className="font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </CommonParagraph>
          </div>
        </div>

        {/* bg overlay */}
        <div className="absolute top-0 left-0 z-0 h-full w-full bg-[rgba(0,0,0,.5)]"></div>
      </div>

      {/* bottom part */}
      <DietPlans />
    </div>
  );
};

export default NutritionPlan;

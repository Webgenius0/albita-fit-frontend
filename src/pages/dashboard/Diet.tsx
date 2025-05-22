import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";
import Topbar from "@/shared/Topbar";

import banner1 from "@/assets/images/diet-card-1.jpg";
import banner2 from "@/assets/images/diet-card-2.jpg";
import BannerCards from "@/components/home/BannerCards";

const Diet = () => {
  return (
    <div className="px-20 py-14">
      <div className="space-y-6 ">
        <Topbar />

        <div className="max-w-[460px] space-y-6">
          <CommonTitle textBold>Plan de alimentación</CommonTitle>

          <CommonParagraph>
            <p className="font-medium lowercase">
              ADPTAREMOS Y HAREMOS AJUSTES A LAS DIETAS EN FUNCION DE LOS
              CAMBIOS QUE VAYAMOS VIENDO
            </p>
          </CommonParagraph>
        </div>
      </div>

      <div className="flex items-start gap-11 my-11">
        <BannerCards
          bannerImg={banner1}
          title="Unete a nuestro Plan Oro"
          targetLink="/dashboard"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          targetText="Suscribirme"
        />
        <BannerCards
          bannerImg={banner2}
          title="Los planes de almientación de Alba"
          targetLink="nutrition-plan"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          targetText="Suscribirme"
        />
      </div>
    </div>
  );
};

export default Diet;
                            
import dashlogo from "@/assets/images/dashboard-logo.svg";
import CommonTitle from "@/components/common/CommonTitle";
import BannerCards from "@/components/home/BannerCards";

import bannerbg1 from "@/assets/images/banner-card-1.jpg";
import bannerbg2 from "@/assets/images/banner-card-2.png";
import bannerbg3 from "@/assets/images/banner-card-3.jpg";
import bannerbg4 from "@/assets/images/banner-compact-1.jpg";
import bannerbg5 from "@/assets/images/banner-compact-2.jpg";
import BannerCompactCard from "@/components/home/BannerCompactCard";

const Home = () => {
  return (
    <div className="px-5 py-8 lg:px-[100px] lg:py-14">
      {/* top part */}
      <div className="flex w-fit items-center gap-5 lg:gap-8">
        <div className="h-14 w-14">
          <img src={dashlogo} className="h-full w-full" alt="dashboard_logo" />
        </div>
        {/* user name */}
        <CommonTitle>
          <p className="font-bold text-[#222]">¡Hola elena!</p>
        </CommonTitle>
      </div>

      {/* card part */}
      <div className="my-11 grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-2 lg:gap-y-9">
        <BannerCards
          bannerImg={bannerbg1}
          title="Unete a nuestro Plan Oro"
          description="Obten clases grabadas de 60 minutos y cocina con los videos de alba"
          targetText="Suscribirme"
          targetLink="/"
          heading="Cambia tu plan"
        />
        <BannerCards
          bannerImg={bannerbg2}
          title="Conoce tu plan de comidas"
          description="Accede a diferentes recetas creativas"
          targetText="Dietas"
          targetLink="/diet"
          heading="PLAN DE ALIMENTACIÓN"
        />
        <div className="space-y-4">
          <h3 className="font-satoshi text-2xl font-semibold text-[#222] uppercase">
            Elige donde entrenar
          </h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <BannerCompactCard
              coverImg={bannerbg4}
              title="Entrenar en Casa"
              targetLink="/home-training"
              targetText="Empezar ahora"
            />
            <BannerCompactCard
              coverImg={bannerbg5}
              title="Entrenar en el Gym"
              targetLink="/gym-training"
              targetText="Empezar ahora"
            />
          </div>
        </div>
        <BannerCards
          bannerImg={bannerbg3}
          title="Recibe tu kit de Iniciación "
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          targetText="Empezar"
          targetLink="/"
          heading="Kit de iniciación"
        />
      </div>
    </div>
  );
};

export default Home;

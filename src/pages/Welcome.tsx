import CommonContainer from "@/components/common/CommonContainer";
import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";

import mockup1 from "@/assets/images/mockup-1.jpg";
import mockup2 from "@/assets/images/mockup-2.jpg";
import mockup3 from "@/assets/images/mockup-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-expect-error: Swiper CSS types are not declared
import "swiper/css";
// @ts-expect-error: Swiper coverflow effect CSS types missing
import "swiper/css/effect-coverflow";
// @ts-expect-error: Swiper coverflow effect CSS types missing
import "swiper/css/pagination";
// @ts-expect-error: Swiper coverflow effect CSS types missing
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperNavButtons from "@/components/welcome/SwiperNavButtons";
import CommonButton from "@/components/common/CommonButton";

const slides = [mockup1, mockup2, mockup3, mockup2];

const Welcome = () => {
  return (
    <CommonContainer>
      <div className="mx-auto my-12 flex max-w-[600px] flex-col gap-y-7 text-center">
        <div className="mx-auto w-fit">
          <PinkLogo size="sm" />
        </div>

        <CommonTitle alignCenter>Bienvenido AlbitaFit</CommonTitle>

        <CommonParagraph>
          Lorem Ipsum is simply dummy text of the typesetting industry. Lorem
          Ipsum has been the industry's scrambled it to make a type specimen
          book.
        </CommonParagraph>
      </div>

      {/* slider */}
      <div className="welcome_effect_slider relative mx-auto my-10 lg:my-24 lg:max-w-[70%]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 30,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          loop={true}
          breakpoints={{
            767: {
              slidesPerView: 2,
            },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-fit w-full">
                <img src={item} className="h-full w-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>

      <div className="mb-20 flex justify-center">
        <CommonButton text="Continuar" target="/plans" />
      </div>
    </CommonContainer>
  );
};

export default Welcome;

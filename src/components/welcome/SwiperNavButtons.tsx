import { useSwiper } from "swiper/react";

import { ArrowLeft, ArrowRight } from "lucide-react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  const styles = `text-primary-pink flex h-8 w-8 items-center justify-center rounded-full bg-white drop-shadow-2xl border-primary-pink border cursor-pointer duration-300 hover:bg-primary-pink hover:text-text-primary `;
  return (
    <div className="relative z-50 mx-auto mt-12 flex w-[50%] items-center justify-between">
      <button className={styles} onClick={() => swiper.slidePrev()}>
        <ArrowLeft />
      </button>
      <button className={styles} onClick={() => swiper.slideNext()}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default SwiperNavButtons;

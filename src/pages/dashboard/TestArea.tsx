import BackButton from "@/components/common/BackButton";
import CommonContainer from "@/components/common/CommonContainer";
import TestSlideOne from "@/components/test-area/slides/TestSlideOne";

import bg from "@/assets/images/test-area-bg.svg";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ChevronLeft } from "lucide-react";
import TestSlideTwo from "@/components/test-area/slides/TestSlideTwo";
import TestSlideThree from "@/components/test-area/slides/TestSlideThree";
import TestSlideFour from "@/components/test-area/slides/TestSlideFour";
import TestSlideFive from "@/components/test-area/slides/TestSlideFive";
import TestSlideSix from "@/components/test-area/slides/TestSlideSix";
import CommonButton from "@/components/common/CommonButton";

const injuryInfoList = [
  "Distensiones y esguinces",
  "Fracturas",
  "Artritis",
  "Desgarros de menisco",
  "Osteoporosis",
  "Afecciones cardíacas",
  "Recuperación posoperatoria",
];

const TestArea = () => {
  const testSlideHolderRef = useRef<HTMLDivElement | null>(null);
  const [slideActive, setSlideActive] = useState(5);

  const [injuryInfoModalShow, setInjuryInfoModalShow] = useState(false);

  useEffect(() => {
    if (testSlideHolderRef.current) {
      gsap.to(testSlideHolderRef.current, {
        x: `-${slideActive * 100}%`,
        ease: "circ.inOut",
        duration: 1.3,
      });
    }
  }, [slideActive]);

  const prevSlide = () => {
    setSlideActive((prev) => (prev >= 1 ? prev - 1 : 0));
  };
  const nextSlide = () => {
    setSlideActive((prev) => prev + 1);
  };

  return (
    <>
      <CommonContainer>
        <div className="relative">
          {/* back button */}
          {slideActive === 0 ? (
            <BackButton />
          ) : (
            <div
              onClick={prevSlide}
              className="mb-8 inline-block cursor-pointer text-[#e16891]"
            >
              <ChevronLeft className="h-9 w-9" />
            </div>
          )}

          {/* test container */}
          <div className="relative z-10 min-h-[75vh] max-w-full overflow-x-hidden">
            <div ref={testSlideHolderRef} className="relative z-50 flex">
              <TestSlideOne />
              <TestSlideTwo />
              <TestSlideThree />
              <TestSlideFour />
              <TestSlideFive />
              <TestSlideSix setInjuryInfoModalShow={setInjuryInfoModalShow} />
            </div>

            {/* background logo */}
            <div className="absolute top-1/2 left-1/2 z-10 h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2">
              <img
                src={bg}
                alt="background_logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* proceed button */}
          <button
            onClick={nextSlide}
            className="bg-primary-pink fixed right-20 bottom-20 z-40 flex h-14 max-w-14 min-w-14 cursor-pointer items-center justify-center rounded-full drop-shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M17 6.9943C16.9941 6.38006 16.7367 5.79281 16.2836 5.35979L11.0743 0.339503C10.8468 0.122054 10.539 0 10.2182 0C9.89742 0 9.58965 0.122054 9.36214 0.339503C9.24833 0.448038 9.15799 0.577165 9.09635 0.719437C9.0347 0.861709 9.00296 1.01431 9.00296 1.16843C9.00296 1.32256 9.0347 1.47516 9.09635 1.61743C9.15799 1.7597 9.24833 1.88883 9.36214 1.99736L13.3571 5.82679H1.21429C0.892237 5.82679 0.583379 5.94979 0.355656 6.16874C0.127934 6.38769 0 6.68465 0 6.9943C0 7.30394 0.127934 7.6009 0.355656 7.81985C0.583379 8.0388 0.892237 8.1618 1.21429 8.1618H13.3571L9.36214 12.0029C9.13349 12.2212 9.00439 12.5179 9.00325 12.8277C9.00212 13.1375 9.12903 13.4351 9.35607 13.6549C9.58312 13.8748 9.89169 13.9989 10.2139 14C10.5361 14.0011 10.8456 13.8791 11.0743 13.6608L16.2836 8.64048C16.7396 8.20459 16.9973 7.61258 17 6.9943Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </CommonContainer>

      {/* injury modal popup */}
      <div
        className={`absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.7)] px-10 py-12 ${injuryInfoModalShow ? `` : `invisible opacity-0`} duration-700 ease-in-out`}
      >
        {/* info */}
        <div className="flex max-w-[340px] flex-col items-center gap-10 rounded-[12px] bg-white px-7 py-9 text-center font-medium text-[#222]">
          <p className="text-[24px] leading-8">
            En caso de que tengas las siguientes lesiones, no puedes unirte a la
            app
          </p>

          <div className="space-y-5 text-base">
            {injuryInfoList.map((item, index) => (
              <p key={index}> {item} </p>
            ))}
          </div>

          <CommonButton
            onlyButton
            text="Continuar"
            onClick={() => setInjuryInfoModalShow(false)}
          />
        </div>
      </div>
    </>
  );
};

export default TestArea;

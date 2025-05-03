import CommonTitle from "@/components/common/CommonTitle";
import CommonSlideWrapper from "../CommonSlideWrapper";
import SlidePicker from "../SlidePicker";

const TestSlideFour = () => {
  return (
    <CommonSlideWrapper>
      <div className="flex justify-between gap-20">
        <div className="flex flex-1 flex-col items-center">
          <CommonTitle textBold>
            ¿En cuantas comidas quieres realizar el plan?
          </CommonTitle>

          <SlidePicker />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <CommonTitle textBold>
            ¿Cuántos días deseas entrenar a la semana?
          </CommonTitle>
          <SlidePicker />
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideFour;

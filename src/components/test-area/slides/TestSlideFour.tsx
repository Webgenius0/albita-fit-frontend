import CommonTitle from "@/components/common/CommonTitle";
import CommonSlideWrapper from "../CommonSlideWrapper";
import SlidePicker from "../SlidePicker";

const slideStyles = `flex flex-1 flex-col items-center text-center gap-11`;

const TestSlideFour = () => {
  return (
    <CommonSlideWrapper>
      <div className="flex justify-between gap-20">
        <div className={slideStyles}>
          <CommonTitle textBold>
            ¿En cuantas comidas quieres realizar el plan?
          </CommonTitle>

          <SlidePicker defaultValue={4} dataKey="mealCount" />
        </div>
        <div className={slideStyles}>
          <CommonTitle textBold>
            ¿Cuántos días deseas entrenar a la semana?
          </CommonTitle>
          <SlidePicker defaultValue={4} dataKey="trainingDays" />
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideFour;

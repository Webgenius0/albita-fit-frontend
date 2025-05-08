import { useEffect, useState } from "react";
import CommonSlideWrapper from "../CommonSlideWrapper";
import QuickQuestion from "../QuickQuestion";
import Calendar from "react-calendar";
import CommonTitle from "@/components/common/CommonTitle";
// import 'react-calendar/dist/Calendar.css';
import "../calendar.custom.css";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";
import CommonButton from "@/components/common/CommonButton";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TestSlideSeven = () => {
  const [isRegular, setIsRegular] = useState<string | null>("yes");

  const [calendarValue, setCalendarValue] = useState<Value>(new Date());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setInfo({
        isRegular,
        calendarValue,
      }),
    );

    // eslint-disable-next-line
  }, [isRegular, calendarValue]);

  return (
    <CommonSlideWrapper>
      <div className="flex justify-between">
        <div className="max-w-[30%]">
          <QuickQuestion
            title="¿Tu menstruación es regular?"
            setValue={setIsRegular}
          />
        </div>
        <div className="means_calendar max-w-[30%] space-y-14 text-center">
          <CommonTitle textBold>¿Fecha de tu ultima menstruación? </CommonTitle>
          <Calendar
            prevLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M12.421 14.3459L7.77148 9.69639L12.421 5.04688"
                  stroke="black"
                  stroke-width="1.54984"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            nextLabel={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M7.26953 14.3459L11.919 9.69639L7.26953 5.04688"
                  stroke="black"
                  stroke-width="1.54984"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            prev2Label={null}
            next2Label={null}
            onChange={setCalendarValue}
            value={calendarValue}
            showNeighboringMonth={false}
          />
        </div>
      </div>

      <div className="mt-26 flex justify-center">
        <CommonButton text="Confirmar envío" target="/onboard" />
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideSeven;

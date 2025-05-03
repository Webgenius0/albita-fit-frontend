import CommonTitle from "@/components/common/CommonTitle";
import { useEffect, useState } from "react";
import Picker from "react-mobile-picker";
import CommonSlideWrapper from "../CommonSlideWrapper";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";

// <------ common styles --------->
const holderStyle = `flex flex-1 flex-col items-center gap-10`;
const textStylePrimary = `text-primary-pink text-[64px] font-bold`;
const arrowStyle = `h-9 w-14`;
const pickerStyle = `age_picker_dialer  w-[90px]`;
const pickerHeight = 340;
const pickerItemHeight = 90;
// <------ common styles --------->

// <------ main component --------->
const TestSlideTwo = () => {
  const dispatch = useAppDispatch();

  // weigth metric
  const metrics: ["kg", "lb"] = ["kg", "lb"];
  const [weightMetric, setWeightMetric] = useState<"kg" | "lb">("kg");

  //   storing states values
  const [agePickerValue, setAgePickerValue] = useState({
    age: 24,
  });
  const [weightPickerValue, setWeightPickerValue] = useState({
    weight: 48,
  });

  useEffect(() => {
    setWeightPickerValue({
      weight: weightMetric === "kg" ? 48 : Math.round(48 * 2.20462),
    });
  }, [weightMetric]);

  //   setting the values
  useEffect(() => {
    if (agePickerValue.age) {
      dispatch(
        setInfo({
          age: agePickerValue.age,
        }),
      );
    }

    // eslint-disable-next-line
  }, [agePickerValue]);
  useEffect(() => {
    if (weightPickerValue.weight) {
      dispatch(
        setInfo({
          weight: weightPickerValue.weight,
          weightMetric: weightMetric,
        }),
      );
    }

    // eslint-disable-next-line
  }, [weightPickerValue, weightMetric]);

  //   default values for age and weights
  const ageValues = Array(100)
    .fill(0)
    .map((_, index) => index + 1);

  const kgValues = Array(150)
    .fill(0)
    .map((_, index) => index + 1);
  const lbValues = Array(330)
    .fill(0)
    .map((_, index) => index + 1);

  const selectedMetricsValue =
    weightMetric === "kg" ? [...kgValues] : [...lbValues];

  return (
    <CommonSlideWrapper>
      <div className="flex w-full items-start justify-between gap-20">
        {/* age picker */}
        <div className={holderStyle}>
          <CommonTitle textBold>¿Que edad tienes?</CommonTitle>
          <div className="flex flex-col items-center text-center">
            <p className={textStylePrimary}>{agePickerValue.age}</p>

            <div className={arrowStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                className="h-full w-full"
              >
                <path
                  d="M12.922 1.70871C14.5215 -0.21853 17.4785 -0.218526 19.078 1.70871L30.4787 15.4454C32.6421 18.0522 30.7883 22 27.4007 22H4.59934C1.21174 22 -0.642141 18.0522 1.52132 15.4454L12.922 1.70871Z"
                  fill="#CF3361"
                />
              </svg>
            </div>
          </div>
          <div className={pickerStyle + " " + " -mt-[130px]"}>
            <Picker
              value={agePickerValue}
              onChange={setAgePickerValue}
              wheelMode="normal"
              className="rotate-90 bg-[#FFE1EA]"
              height={pickerHeight}
              itemHeight={pickerItemHeight}
            >
              <Picker.Column name="age" className="text-4xl">
                {ageValues.map((option) => (
                  <Picker.Item
                    key={option}
                    value={option}
                    className="text-primary-pink -rotate-90 text-[40px] font-bold"
                  >
                    {option}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>

        {/* weight picker */}
        <div className={holderStyle}>
          <CommonTitle textBold>Peso</CommonTitle>

          {/* kg or lb switcher */}
          <div className="flex overflow-hidden rounded-[16px] border border-[#E84479]">
            {metrics.map((item, i) => (
              <div
                onClick={() => setWeightMetric(item)}
                key={i}
                className={`cursor-pointer px-16 py-4 text-2xl font-bold duration-300 ease-in-out ${weightMetric === item ? `bg-[#E84479] text-white` : ``} `}
              >
                {" "}
                {item}{" "}
              </div>
            ))}
          </div>

          <div className={pickerStyle + " " + "-mt-[70px]"}>
            <Picker
              value={weightPickerValue}
              onChange={setWeightPickerValue}
              wheelMode="normal"
              className="rotate-90 bg-[#FFE1EA]"
              height={pickerHeight}
              itemHeight={pickerItemHeight}
            >
              <Picker.Column name="weight" className="text-4xl">
                {selectedMetricsValue.map((option) => (
                  <Picker.Item
                    key={option}
                    value={option}
                    className="text-primary-pink -rotate-90 text-[40px] font-bold"
                  >
                    {option}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>

          <div className="-mt-[150px] flex flex-col-reverse items-center text-center">
            <p className={textStylePrimary}>
              <span className="text-[#404040]">{weightPickerValue.weight}</span>
              <span className="text-[30px] text-[#404040] opacity-60">
                {" "}
                {weightMetric}{" "}
              </span>
            </p>

            <div className={arrowStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                className="h-full w-full"
              >
                <path
                  d="M12.922 1.70871C14.5215 -0.21853 17.4785 -0.218526 19.078 1.70871L30.4787 15.4454C32.6421 18.0522 30.7883 22 27.4007 22H4.59934C1.21174 22 -0.642141 18.0522 1.52132 15.4454L12.922 1.70871Z"
                  fill="#CF3361"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideTwo;

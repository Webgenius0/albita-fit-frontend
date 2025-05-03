import CommonTitle from "@/components/common/CommonTitle";
import { useState } from "react";
import Picker from "react-mobile-picker";
import CommonSlideWrapper from "../CommonSlideWrapper";

const TestSlideTwo = () => {
  const [agePickerValue, setAgePickerValue] = useState({
    age: 20,
  });
  const [weightPickerValue, setWeightPickerValue] = useState({
    weight: 20,
  });

  return (
    <CommonSlideWrapper>
      <div className="flex w-full items-start justify-between gap-20">
        <div className="flex flex-1 flex-col items-center gap-10">
          <CommonTitle textBold>¿Que edad tienes?</CommonTitle>
          <div className="flex flex-col items-center text-center">
            <p className="text-primary-pink text-[64px] font-bold">
              {" "}
              {agePickerValue.age}{" "}
            </p>

            <div className="h-9 w-14">
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
          <div className="age_picker_dialer -mt-[100px] w-[10%]">
            <Picker
              value={agePickerValue}
              onChange={setAgePickerValue}
              wheelMode="normal"
              className="rotate-90 bg-[#FFE1EA]"
              height={350}
              itemHeight={90}
            >
              <Picker.Column name="age" className="text-4xl">
                {Array(100)
                  .fill(0)
                  .map((_, index) => index + 1)
                  .map((option) => (
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
        <div className="flex flex-1 flex-col items-center gap-10">
          <CommonTitle textBold>Peso</CommonTitle>
          <div className="flex flex-col items-center text-center">
            <p className="text-primary-pink text-[64px] font-bold">
              {" "}
              {weightPickerValue.weight}{" "}
            </p>

            <div className="h-9 w-14">
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
          <div className="age_picker_dialer -mt-[100px] w-[10%]">
            <Picker
              value={weightPickerValue}
              onChange={setWeightPickerValue}
              wheelMode="normal"
              className="rotate-90 bg-[#FFE1EA]"
              height={350}
              itemHeight={90}
            >
              <Picker.Column name="weight" className="text-4xl">
                {Array(100)
                  .fill(0)
                  .map((_, index) => index + 1)
                  .map((option) => (
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
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideTwo;

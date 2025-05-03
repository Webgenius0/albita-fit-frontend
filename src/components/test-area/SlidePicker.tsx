import { useEffect, useState } from "react";
import Picker from "react-mobile-picker";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";

// <------ common styles --------->
const textStylePrimary = `text-primary-pink text-[64px] font-bold`;
const arrowStyle = `h-9 w-14`;
const pickerStyle = `age_picker_dialer  w-[90px]`;
const pickerHeight = 340;
const pickerItemHeight = 90;
const pickerItemStyle = `text-primary-pink -rotate-90 text-[40px] font-bold duration-300 ease-in-out
text-primary-pink -rotate-90 text-[40px] font-bold duration-300 ease-in-out`;
// <------ common styles --------->

// <------ main component --------->
const SlidePicker = () => {
  const dispatch = useAppDispatch();

  //   storing states values
  const [pickerValue, setAgePickerValue] = useState({
    value: 4,
  });

  const selectedMetricsValue = [3, 4, 5];

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className={textStylePrimary}>{pickerValue.value}</p>

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
      <div className={pickerStyle + " " + "-mt-[80px]"}>
        <Picker
          value={pickerValue}
          onChange={setAgePickerValue}
          wheelMode="normal"
          className="rotate-90 bg-[#FFE1EA]"
          height={pickerHeight}
          itemHeight={pickerItemHeight}
        >
          <Picker.Column name="value" className="text-4xl">
            {selectedMetricsValue.map((option) => (
              <Picker.Item
                key={option}
                value={option}
                className={pickerItemStyle}
              >
                {({ selected }) => (
                  <span
                    style={{
                      color: selected ? "#E77B9B" : "rgba(232, 68, 121, 0.30)",
                      scale: selected ? 1 : 0.7,
                    }}
                  >
                    {option}
                  </span>
                )}
              </Picker.Item>
            ))}
          </Picker.Column>
        </Picker>
      </div>
    </div>
  );
};

export default SlidePicker;

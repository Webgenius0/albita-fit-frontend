import CommonTitle from "@/components/common/CommonTitle";
import CommonSlideWrapper from "../CommonSlideWrapper";
import Picker from "react-mobile-picker";
import { useEffect, useState } from "react";

import avatar1 from "@/assets/images/fit-avatar-1.svg";
import avatar2 from "@/assets/images/fit-avatar-2.svg";
import avatar3 from "@/assets/images/fit-avatar-3.svg";
import avatar4 from "@/assets/images/fit-avatar-4.svg";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";

const TestSlideThree = () => {
  const dispatch = useAppDispatch();

  const [selectedHeight, setSelectedHeight] = useState({
    height: 160,
  });

  const [selectedShape, setSelectedShape] = useState<number | null>(null);

  //   default values for age and weights
  const heightValues = Array(300)
    .fill(0)
    .map((_, index) => index + 1);

  // fitness shapes
  const shapes = [
    {
      fitType: 1,
      shape: avatar1,
    },
    {
      fitType: 2,
      shape: avatar2,
    },
    {
      fitType: 3,
      shape: avatar3,
    },
    {
      fitType: 4,
      shape: avatar4,
    },
  ];

  //   stroing the values in state
  useEffect(() => {
    dispatch(
      setInfo({
        height: selectedHeight.height,
        shapeType: selectedShape,
      }),
    );

    // eslint-disable-next-line
  }, [selectedHeight, selectedShape]);

  return (
    <CommonSlideWrapper>
      <div className="flex justify-between">
        <div className="flex-1">
          <CommonTitle textBold>Altura</CommonTitle>

          <div className="mt-20 font-bold text-[#282828]">
            <div className="text-[70px]">
              <span>{selectedHeight.height}</span>
              <span className="text-[30px] opacity-45">Cm</span>
            </div>

            {/* picker value */}
            <div className="mt-5 grid max-w-fit grid-cols-2 gap-10">
              <div className="w-[100px] max-w-[100px]">
                <Picker
                  value={selectedHeight}
                  onChange={setSelectedHeight}
                  wheelMode="normal"
                  itemHeight={90}
                  height={500}
                >
                  <Picker.Column name="height" className="text-[45px]">
                    {heightValues.map((option) => (
                      <Picker.Item key={option} value={option}>
                        {({ selected }) => (
                          <span
                            style={{
                              opacity: selected ? 1 : 0.45,
                              scale: selected ? 1 : 0.7,
                            }}
                            className="text-[#282828] duration-100 ease-in-out"
                          >
                            {option}
                          </span>
                        )}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                </Picker>
              </div>

              <div className="relative flex h-full w-[90px] flex-col justify-between rounded-[12px] bg-[#E84479] px-4 py-8">
                <div className="absolute top-1/2 -right-10 h-10 w-10 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="23"
                    viewBox="0 0 17 23"
                    fill="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M1.84347 14.8221C-0.209834 13.1427 -0.209839 10.0034 1.84347 8.324L9.90463 1.73067C12.6454 -0.51102 16.7595 1.43898 16.7595 4.97972L16.7595 18.1664C16.7595 21.7071 12.6454 23.6571 9.90463 21.4154L1.84347 14.8221Z"
                      fill="#E77B9B"
                    />
                  </svg>
                </div>

                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`bg-white ${index % 2 !== 0 ? `h-[1.5px] w-full` : `mx-auto h-[1.5px] w-[80%] scale-75 opacity-70`} `}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-12">
          <CommonTitle textBold>Tipo de cuerpo</CommonTitle>

          <div className="grid max-w-[375px] grid-cols-2 gap-8 gap-y-11">
            {shapes.map((item, index) => (
              <div
                onClick={() => setSelectedShape(item.fitType)}
                key={index}
                className={`${item.fitType === selectedShape ? `bg-primary-pink/20 border-primary-pink` : `border-transparent bg-transparent`} h-[280px] w-full cursor-pointer rounded-[15px] border px-6 py-5 duration-200 ease-in-out`}
              >
                <img
                  src={item.shape}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideThree;

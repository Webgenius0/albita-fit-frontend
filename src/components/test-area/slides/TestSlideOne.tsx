import CommonTitle from "@/components/common/CommonTitle";
import CommonSlideWrapper from "../CommonSlideWrapper";
import TestInput from "../TestInput";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "@/redux/features/testSlice";

const holderStyle = `flex-1 space-y-[60px]`;
const genderIconStyle = `border-primary-pink border-2 flex h-20 w-20 items-center justify-center rounded-full  text-white has-[.on]:bg-pink-500 duration-300 ease-in-out  cursor-pointer group `;

const svgStyle = `duration-300 ease-in-out  stroke-primary-pink  group-[.selected]:stroke-white`;
const genderList: {
  type: "men" | "women" | null;
  title: "Hombre" | "Mujer";
}[] = [
  {
    type: "men",
    title: "Hombre",
  },
  {
    type: "women",
    title: "Mujer",
  },
];

const TestSlideOne = () => {
  const [genderRole, setGenderRole] = useState<"men" | "women" | null>(null);
  const [selectedObjective, setSelectedObjective] = useState<number | null>(
    null,
  );
  const dispatch = useDispatch();

  const objectives = [
    {
      id: 1,
      option: "Perder peso y tonificar",
    },
    {
      id: 2,
      option: "Aumentar peso y ganar masa muscular",
    },
    {
      id: 3,
      option: "Mantenimiento",
    },
  ];

  useEffect(() => {
    if (genderRole) {
      dispatch(
        setInfo({
          gender: genderRole,
        }),
      );
    }

    // eslint-disable-next-line
  }, [genderRole]);

  useEffect(() => {
    if (selectedObjective) {
      dispatch(
        setInfo({
          objective: selectedObjective,
        }),
      );
    }

    // eslint-disable-next-line
  }, [selectedObjective]);

  return (
    <CommonSlideWrapper>
      <div className="flex flex-col justify-between gap-[90px] lg:flex-row lg:gap-[140px]">
        {/* first one */}
        <div className={holderStyle}>
          <TestInput title="Nombre completo" type="text" storeKey="name" />

          <div className="space-y-9">
            <CommonTitle textBold>Genero</CommonTitle>

            <div className="group flex items-center justify-center gap-10">
              {genderList.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 text-center">
                  <div
                    onClick={() => setGenderRole(item.type)}
                    className={
                      genderIconStyle +
                      " " +
                      ` ${item.type === genderRole ? `selected bg-primary-pink` : ``} `
                    }
                  >
                    {item.type === "men" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="39"
                        viewBox="0 0 37 39"
                        fill="none"
                      >
                        <path
                          d="M21.2925 16.3721L34.0481 3.01864M34.0481 3.01864L34.2002 12.6167M34.0481 3.01864L24.8798 2.85938M24.5354 24.5787C24.5354 30.986 19.5738 36.1802 13.4534 36.1802C7.33294 36.1802 2.37134 30.986 2.37134 24.5787C2.37134 18.1714 7.33294 12.9772 13.4534 12.9772C19.5738 12.9772 24.5354 18.1714 24.5354 24.5787Z"
                          strokeWidth="3.97861"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={svgStyle}
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="45"
                        viewBox="0 0 27 45"
                        fill="none"
                      >
                        <path
                          d="M13.4679 24.3502C19.6479 24.3502 24.6578 19.3789 24.6578 13.2464C24.6578 7.11393 19.6479 2.14258 13.4679 2.14258C7.28794 2.14258 2.27808 7.11393 2.27808 13.2464C2.27808 19.3789 7.28794 24.3502 13.4679 24.3502ZM13.4679 24.3502V42.426M20.4131 33.015H6.53086"
                          strokeWidth="3.97861"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={svgStyle}
                        />
                      </svg>
                    )}
                  </div>

                  <p className="text-sm font-medium text-black">
                    {" "}
                    {item.title}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* second one */}
        <div className={holderStyle}>
          <TestInput title="Correo electronico" type="email" storeKey="email" />

          <div className="space-y-14">
            <CommonTitle textBold>¿Cual es tu objetivo?</CommonTitle>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {objectives.map((item, index) => (
                <div
                  onClick={() => setSelectedObjective(item.id)}
                  className="flex cursor-pointer items-center justify-between rounded-[20px] bg-[#FFE1EA] px-4 py-2 text-[13px] font-medium text-[#CF3361]"
                  key={index}
                >
                  {" "}
                  <p className="max-w-[80%]"> {item.option} </p>{" "}
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#CF3361]`}
                  >
                    {item.id === selectedObjective && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-full w-full"
                      >
                        <path
                          d="M16.7292 3.39137C15.8449 2.50582 14.7944 1.80366 13.638 1.32525C12.4816 0.846828 11.2421 0.60155 9.99067 0.603527C8.73922 0.60155 7.49972 0.846828 6.34333 1.32525C5.18694 1.80366 4.1364 2.50582 3.25213 3.39137C2.36658 4.27563 1.66442 5.3261 1.186 6.48249C0.707578 7.63888 0.462389 8.87839 0.464367 10.1298C0.462389 11.3813 0.707578 12.6208 1.186 13.7772C1.66442 14.9336 2.36658 15.984 3.25213 16.8683C4.1364 17.7539 5.18694 18.456 6.34333 18.9344C7.49972 19.4128 8.73922 19.6581 9.99067 19.6561C11.2421 19.6581 12.4816 19.4128 13.638 18.9344C14.7944 18.456 15.8449 17.7539 16.7292 16.8683C17.6148 15.984 18.3169 14.9336 18.7953 13.7772C19.2738 12.6208 19.519 11.3813 19.517 10.1298C19.519 8.87839 19.2738 7.63888 18.7953 6.48249C18.3169 5.3261 17.6148 4.27563 16.7292 3.39137ZM15.5812 6.99417L9.20049 15.3129C9.09546 15.4547 8.96132 15.5724 8.80704 15.6582C8.65276 15.7439 8.48201 15.7956 8.3061 15.8098C8.13174 15.8249 7.95614 15.8021 7.79144 15.7429C7.62674 15.6837 7.47676 15.5896 7.35189 15.4669L4.27586 12.4853C4.03873 12.2562 3.90191 11.9426 3.89539 11.6129C3.88887 11.2833 4.01315 10.9644 4.24104 10.7262C4.4708 10.4897 4.78492 10.3538 5.11457 10.3482C5.44422 10.3427 5.76259 10.4678 6.00023 10.6963L8.0774 12.6841L13.6084 5.46857C13.7074 5.33848 13.8312 5.22921 13.9725 5.14703C14.1138 5.06486 14.27 5.01141 14.4321 4.98971C14.5941 4.96801 14.7588 4.97849 14.9168 5.02058C15.0747 5.06268 15.2229 5.13554 15.3527 5.23499C15.484 5.33491 15.5941 5.4599 15.6767 5.60269C15.7594 5.74548 15.8129 5.90323 15.8342 6.06684C15.8555 6.23046 15.844 6.39669 15.8006 6.55586C15.7572 6.71504 15.6826 6.86402 15.5812 6.99417Z"
                          fill="#CF3361"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideOne;

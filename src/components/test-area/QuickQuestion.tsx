import { SetStateAction, useEffect, useState } from "react";
import CommonTitle from "../common/CommonTitle";

type PropTypes = {
  title: string;
  defaultValue?: string;
  setValue: React.Dispatch<SetStateAction<string | null>>;
};

const  QuickQuestion = ({ title, defaultValue = "no", setValue }: PropTypes) => {
  const [selectedAns, setSelectedAns] = useState<string | null>(defaultValue);

  const ansValues = [
    {
      text: "SI",
      value: "yes",
    },
    {
      text: "NO",
      value: "no",
    },
  ];

  useEffect(() => {
    setValue(selectedAns);

    // eslint-disable-next-line
  }, [selectedAns]);

  return (
    <div className="space-y-20 text-center">
      <CommonTitle textBold> {title} </CommonTitle>

      <div className="flex items-center justify-between gap-11">
        {ansValues.map((item, index) => (
          <button
            className={`${selectedAns === item.value ? `bg-primary-pink text-white` : `text-primary-pink bg-transparent`} border-primary-pink cursor-pointer rounded-[32px] border px-12 py-2.5 font-semibold`}
            onClick={() => setSelectedAns(item.value)}
            key={index}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuestion;

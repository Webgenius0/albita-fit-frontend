import { ChangeEvent } from "react";
import CommonTitle from "../common/CommonTitle";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";

type PropTypes = {
  title?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  storeKey: string;
};

const TestInput = ({ title, type, placeholder, storeKey }: PropTypes) => {
  const dispatch = useAppDispatch();

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    console.log(value);

    dispatch(
      setInfo({
        [storeKey]: value,
      }),
    );
  };

  return (
    <div className="w-full space-y-6 lg:space-y-14">
      {title && <CommonTitle textBold>{title}</CommonTitle>}

      <input
        onChange={handleOnchange}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-black bg-transparent py-3 text-[17px] font-light focus:outline-none"
      />
    </div>
  );
};

export default TestInput;

import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type InputTypes<T extends FieldValues> = {
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  isRequired?: boolean;
  name: Path<T>;
  register: UseFormRegister<T>;
};

const CommonInput = <T extends FieldValues>({
  placeholder,
  type = "text",
  isRequired = true,
  name,
  register,
}: InputTypes<T>) => {
  return (
    <input
      type={type}
      className="text-text-primary focus:border-primary-pink block w-full rounded-[40px] border-[1.9px] border-[#757575] bg-white px-5 py-2.5 text-base font-medium hover:outline-none"
      placeholder={placeholder}
      required={isRequired}
      autoComplete="off"
      {...register(name, {
        required: isRequired,
      })}
    />
  );
};

export default CommonInput;

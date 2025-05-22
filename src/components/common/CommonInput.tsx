import { HTMLInputTypeAttribute } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  Validate,
  FieldErrors,
} from "react-hook-form";

type InputTypes<T extends FieldValues> = {
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  isRequired?: boolean;
  name: Path<T>;
  register: UseFormRegister<T>;
  validateRules?: Validate<string, T> | Record<string, Validate<string, T>>;
  errorValue?: FieldErrors<T>;
};

// styles

const inputStyle = `text-text-primary focus:border-primary-pink block w-full rounded-[40px] border-[1.9px] border-[#757575] bg-white px-5 py-2.5 text-base font-medium hover:outline-none`;

const CommonInput = <T extends FieldValues>({
  placeholder,
  type = "text",
  isRequired = true,
  name,
  register,
  validateRules,
  errorValue,
}: InputTypes<T>) => {
  return (
    <div className="w-full space-y-2">
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        autoComplete="off"
        {...register(name, {
          required: {
            value: isRequired,
            message: "Please Fill In the field",
          },
          ...(validateRules && { validate: validateRules }),
          ...(type === "password" && {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }),
        })}
      />
      {errorValue && errorValue[name]?.message && (
        <p className="text-start text-sm font-semibold text-red-500">
          {errorValue[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default CommonInput;

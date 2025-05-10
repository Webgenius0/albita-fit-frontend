import CommonButton from "@/components/common/CommonButton";
import CommonInput from "@/components/common/CommonInput";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";
import { Link, useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import CommonContainer from "@/components/common/CommonContainer";
import { useAppDispatch } from "@/redux/hooks";
import { setRegisterInfo } from "@/redux/features/registerSlice";
import { useState } from "react";
type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [demoLoading, setDemoLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDemoLoading(true);
    dispatch(
      setRegisterInfo({
        ...data,
      }),
    );

    setTimeout(() => {
      setDemoLoading(false);
      navigate("/privacy-policy");
    }, 1500);
  };
  return (
    <CommonContainer>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-6">
        <PinkLogo />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[550px] flex-col items-center gap-y-6 text-center"
        >
          <CommonTitle>Empieza un nuevo estilo de vida</CommonTitle>

          <CommonInput
            type="text"
            placeholder="Full name"
            name="fullName"
            register={register}
            errorValue={errors}
            isRequired
          />
          <CommonInput
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            errorValue={errors}
            isRequired
            validateRules={(value: string) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
              "Invalid email address"
            }
          />
          <CommonInput
            type="password"
            placeholder="Contraseña"
            name="password"
            register={register}
            errorValue={errors}
            isRequired
          />
          <CommonInput
            type="password"
            placeholder="Confirmar Contraseña"
            name="confirm_password"
            register={register}
            errorValue={errors}
            isRequired
            validateRules={(value: string) => {
              if (watch("password") !== value) {
                return `The Password Doesn't match`;
              }
            }}
          />

          <div className="text-primary-pink flex justify-center text-sm">
            <Link to="/login" className="font-semibold hover:underline">
              Ya tienes cuenta, inicia sesión
            </Link>
          </div>

          <CommonButton text="Continuar" onlyButton isLoading={demoLoading} />
        </form>

        {/* Terms */}
        <p className="text-text-primary max-w-md text-center text-xs">
          Al iniciar sesión y al registrarme acepto todos los términos y
          condiciones de albitafit al entrar.
        </p>
      </div>
    </CommonContainer>
  );
};

export default Register;

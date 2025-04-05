import CommonButton from "@/components/common/CommonButton";
import CommonInput from "@/components/common/CommonInput";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";
import { Link } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import CommonContainer from "@/components/common/CommonContainer";
type Inputs = {
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
            type="email"
            placeholder="Email"
            name="email"
            register={register}
          />
          <CommonInput
            type="password"
            placeholder="Contraseña"
            name="password"
            register={register}
          />

          <div className="text-primary-pink flex justify-center text-sm">
            <Link to="/login" className="font-semibold hover:underline">
              Ya tienes cuenta, inicia sesión
            </Link>
          </div>

          <CommonButton text="Continuar" onlyButton />
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

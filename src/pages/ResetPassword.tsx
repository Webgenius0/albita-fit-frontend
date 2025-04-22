import CommonButton from "@/components/common/CommonButton";
import CommonInput from "@/components/common/CommonInput";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";

import { useForm, SubmitHandler } from "react-hook-form";
import CommonContainer from "@/components/common/CommonContainer";
import CommonParagraph from "@/components/common/CommonParagraph";
import BackButton from "@/components/common/BackButton";
import { useState } from "react";
import OTPInput from "react-otp-input";

type Inputs = {
  email: string;
  password: string;
};

const ResetPassword = () => {
  const [step, SetStep] = useState("resetMail");

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [otp, setOtp] = useState("");

  return (
    <CommonContainer>
      <BackButton  />
      <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-y-6 lg:h-[80vh]">
        <PinkLogo size="sm" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[550px] flex-col items-center gap-y-6 text-center"
        >
          {step === "resetMail" ? (
            <>
              <CommonTitle>Restablecer contraseña</CommonTitle>

              <CommonParagraph textGray>
                ¿Olvidaste tu contraseña? No te preocupes. Ingresa tu correo
                electrónico y te enviaremos un código de recuperación para que
                puedas acceder nuevamente a tu cuenta en pocos pasos.
              </CommonParagraph>

              <CommonInput
                type="email"
                placeholder="Email"
                name="email"
                register={register}
              />

              <CommonButton
                text="Enviar codigo"
                onlyButton
                onClick={() => SetStep("code")}
              />
            </>
          ) : step === "code" ? (
            <>
              <CommonTitle>Codigo de verificación</CommonTitle>

              <CommonParagraph textGray>
                Ingreso el codigo enviado a tu correo
              </CommonParagraph>

              <div className="verficiation_input">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(props) => <input {...props} />}
                  inputType="number"
                />
              </div>

              <CommonButton
                onClick={() => SetStep("setPass")}
                text="Enviar codigo"
                onlyButton
              />
            </>
          ) : (
            <>
              <CommonTitle>Restablecer clave</CommonTitle>

              <CommonParagraph textGray>
                Crea una nueva contraseña de 8 - 12 carcteres
              </CommonParagraph>

              <CommonInput
                type="password"
                placeholder="Contraseña"
                name="password"
                register={register}
              />

              <CommonButton text="Restablecer" onlyButton />
            </>
          )}
        </form>
      </div>
    </CommonContainer>
  );
};

export default ResetPassword;

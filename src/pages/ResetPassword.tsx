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
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import toast from "react-hot-toast";
import { navigateTo } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setResetToken } from "@/redux/features/pendingUserInfoSlice";

type Inputs = {
  email: string;
  password: string;
};

const ResetPassword = () => {
  const [step, SetStep] = useState("resetMail");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [otp, setOtp] = useState("");

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const axiosPublic = useAxiosPublic();

  // gettting the values from the redux store
  const resetToken = useAppSelector(
    (state) => state.pendingUserInfo.resetToken,
  );
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.email) {
      // turing on the button loading
      setButtonLoading(true);

      // storting the email in the state
      setResetEmail(data.email);

      // first applyting the forgot password api
      axiosPublic
        .post("/auth/forgot-password", {
          email: data.email,
        })
        .then((res) => {
          if (res.data.success) {
            setButtonLoading(false);
            toast.success("Código enviado a tu correo");
            SetStep("code");
            reset();
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Error al enviar el código");
          setButtonLoading(false);
          reset();
        });
    }

    // reseting the password
    if (data.password && resetToken) {
      // turing on the button loading
      setButtonLoading(true);
      // then applying the reset password api
      axiosPublic
        .post(`/auth/reset-password/${resetToken}`, {
          newPassword: data.password,
        })
        .then((res) => {
          if (res.data.success) {
            setButtonLoading(false);
            toast.success("Contraseña restablecida con éxito");
            reset();
            navigateTo("/login");

            // removing the reset token from the redux store
            dispatch(setResetToken(null));
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Error al restablecer la contraseña");
          setButtonLoading(false);
          reset();
        });
    }
  };

  //  verifying the otp code
  const verifyCode = () => {
    setButtonLoading(true);
    axiosPublic
      .post("/auth/verify-reset-otp", {
        email: resetEmail,
        otp: otp,
      })
      .then((res) => {
        if (res.data.success) {
          setButtonLoading(false);
          toast.success("Código verificado con éxito");
          SetStep("password");
          reset();

          dispatch(setResetToken(res.data.data.resetToken));

          console.log(res.data.data.resetToken);
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Error al verificar el código");
        setButtonLoading(false);
        reset();

        SetStep("resetMail");
      });
  };

  return (
    <CommonContainer>
      <BackButton />
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
                isLoading={buttonLoading}
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
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                  inputType="number"
                />
              </div>

              <CommonButton
                onClick={verifyCode}
                text="Validar"
                onlyButton
                isLoading={buttonLoading}
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

              <CommonButton
                text="Restablecer"
                onlyButton
                isLoading={buttonLoading}
              />
            </>
          )}
        </form>
      </div>
    </CommonContainer>
  );
};

export default ResetPassword;

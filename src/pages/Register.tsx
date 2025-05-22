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
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";

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
    reset,
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [demoLoading, setDemoLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const axiosPublic = useAxiosPublic();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!termsAccepted) {
      toast.error("Por favor acepte los términos y condiciones");
      return;
    }

    setDemoLoading(true);
    dispatch(
      setRegisterInfo({
        ...data,
        isTermAccepted: true,
        isRefundPolicyAccepted: true,
        isCookiesAccepted: true,
      }),
    );

    // register the user
    axiosPublic
      .post("/auth/register", {
        ...data,
        isTermAccepted: true,
        isRefundPolicyAccepted: true,
        isCookiesAccepted: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // Navigate to the welcome page
          navigate("/verify-email");

          toast.success("Please check your email for a verification code");
          setDemoLoading(false);
          navigate("/verify-email");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message || "An Error Occured");
        setDemoLoading(false);

        // reset the form
        reset();
        setTermsAccepted(false);
      });
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

          {/* Checkbox */}
          <div className="flex items-start space-x-3">
            <div
              className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded border ${
                termsAccepted
                  ? "border-[#e16891] bg-[#e16891]"
                  : "border-gray-300"
              }`}
              onClick={() => setTermsAccepted(!termsAccepted)}
            >
              {termsAccepted && (
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L4.5 7.5L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <label className="space-x-1 text-sm">
              Acepto toda la política de{" "}
              <Link
                to={"/privacy-policy"}
                className="text-primary-pink font-semibold hover:underline"
              >
                privacidad
              </Link>
              ,
              <Link
                to={"/refund-policy"}
                className="text-primary-pink font-semibold hover:underline"
              >
                política de reembolso
              </Link>
              ,
              <Link
                to={"/cookie-consent"}
                className="text-primary-pink font-semibold hover:underline"
              >
                cookies
              </Link>
              de AlbitaFit
            </label>
          </div>

          <div className="text-primary-pink flex justify-center text-sm">
            <Link to="/login" className="font-semibold hover:underline">
              Ya tienes cuenta, inicia sesión
            </Link>
          </div>

          <CommonButton
            text="Continuar"
            onlyButton
            isLoading={demoLoading}
            disable={!termsAccepted}
          />
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

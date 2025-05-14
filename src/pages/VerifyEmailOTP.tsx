import BackButton from "@/components/common/BackButton";
import CommonButton from "@/components/common/CommonButton";
import CommonContainer from "@/components/common/CommonContainer";
import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const VerifyEmailOTP = () => {
  const [otp, setOtp] = useState("");

  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const registerdEmail = useAppSelector((state) => state.registerInfo.email);

  useEffect(() => {
    if (otp.length >= 6) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [otp]);

  const confirmOtp = () => {
    setIsButtonLoading(true);
    axiosPublic
      .post("/auth/verify-otp", {
        email: registerdEmail,
        otp: otp,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          // Navigate to the next step
          navigate("/login");

          // toast message
          toast.success("Email verified successfully");

          //
          setIsButtonLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setIsButtonLoading(false);
      });
  };

  return (
    <CommonContainer>
      <BackButton />
      <div className="flex h-[60vh] w-full items-center justify-center py-7">
        <div className="flex flex-col items-center gap-11">
          <PinkLogo size="sm" />

          <div className="space-y-7 text-center">
            <CommonTitle>Codigo de verificación</CommonTitle>

            <CommonParagraph textGray>
              Ingreso el codigo enviado a tu correo
            </CommonParagraph>
          </div>
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
            onClick={confirmOtp}
            onlyButton
            text="Confirm"
            disable={buttonDisable}
            isLoading={isButtonLoading}
          />
        </div>
      </div>
    </CommonContainer>
  );
};

export default VerifyEmailOTP;

import BackButton from "@/components/common/BackButton";
import CommonButton from "@/components/common/CommonButton";
import CommonContainer from "@/components/common/CommonContainer";
import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const VerifyEmailOTP = () => {
  const [otp, setOtp] = useState("");

  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    if (otp.length >= 6) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [otp]);

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
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputType="number"
            />
          </div>

          <CommonButton onlyButton text="Confirm" disable={buttonDisable} />
        </div>
      </div>
    </CommonContainer>
  );
};

export default VerifyEmailOTP;

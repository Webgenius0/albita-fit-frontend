import CommonContainer from "@/components/common/CommonContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CommonTitle from "@/components/common/CommonTitle";
import BackButton from "@/components/common/BackButton";
import useSaveStore from "@/hooks/data/useSaveStore";
import { setRegisterInfo } from "@/redux/features/registerSlice";
import toast from "react-hot-toast";
import useAxiosPublic from "@/hooks/api/useAxiosPublic";
import { useAppSelector } from "@/redux/hooks";
import LoadingSpinner from "@/components/common/LodingSpinner";

const CookieConsent = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const saveInfo = useSaveStore();

  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(false);

  // getting the data

  const userInfo = useAppSelector((state) => state.registerInfo);

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      navigate("/register");
    }

    // eslint-disable-next-line
  }, [userInfo]);

  const handleAccept = () => {
    setLoading(true);
    if (termsAccepted) {
      saveInfo({ isCookiesAccepted: true }, setRegisterInfo);

      axiosPublic
        .post("/auth/register", {
          ...userInfo,
          isCookiesAccepted: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            // Navigate to the welcome page
            navigate("/verify-email");

            toast.success("Please check your email for a verification code");
            setLoading(false);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message || "An Error Occured");
          setLoading(false);

          // Navigate to the register page
          navigate("/register");
        });
    }
  };

  return (
    <CommonContainer>
      <BackButton />

      <div className="animate-fade-in mx-auto max-w-3xl">
        {/* Header */}
        <CommonTitle textSize="sm" alignCenter>
          Nuestra APP utiliza cookies
        </CommonTitle>
        {/* Privacy Policy Content */}
        <div className="my-8 space-y-6">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pa
          </p>
        </div>

        {/* Checkbox */}
        <div className="mb-8 flex items-start space-x-3">
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
          <label
            className="cursor-pointer text-sm"
            onClick={() => setTermsAccepted(!termsAccepted)}
          >
            Aceptar todos los terminos y condiciones que tiene AlbitaFit
          </label>
        </div>

        {/* Accept Button */}
        <div className="animate-slide-up flex justify-center">
          <button
            onClick={handleAccept}
            disabled={!termsAccepted}
            className={`rounded-full px-8 py-3 font-medium text-white transition-all ${
              termsAccepted
                ? "cursor-pointer bg-[#e16891] hover:scale-105"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            {loading ? <LoadingSpinner /> : "Aceptar"}
          </button>
        </div>
      </div>
    </CommonContainer>
  );
};

export default CookieConsent;

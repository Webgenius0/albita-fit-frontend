import CommonContainer from "@/components/common/CommonContainer";

import CommonTitle from "@/components/common/CommonTitle";
import BackButton from "@/components/common/BackButton";

const CookieConsent = () => {
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
      </div>
    </CommonContainer>
  );
};

export default CookieConsent;

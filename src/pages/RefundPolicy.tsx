import CommonContainer from "@/components/common/CommonContainer";

import CommonTitle from "@/components/common/CommonTitle";
import BackButton from "@/components/common/BackButton";

const RefundPolicy = () => {
  return (
    <CommonContainer>
      <BackButton />

      <div className="animate-fade-in mx-auto max-w-3xl">
        {/* Header */}
        <CommonTitle textSize="sm" alignCenter>
          Política de reembolso ALBITA FIT
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-xs">
              <span className="mr-2 inline-block h-1 w-1 rounded-full bg-[#e16891]"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
            <div className="text-xs">
              <span className="mr-2 inline-block h-1 w-1 rounded-full bg-[#e16891]"></span>
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu
            </div>
            <div className="text-xs">
              <span className="mr-2 inline-block h-1 w-1 rounded-full bg-[#e16891]"></span>
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
          </div>

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

export default RefundPolicy;

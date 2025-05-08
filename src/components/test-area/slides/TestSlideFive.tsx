import { useState } from "react";
import CommonSlideWrapper from "../CommonSlideWrapper";
import QuickQuestion from "../QuickQuestion";
import CommonButton from "@/components/common/CommonButton";
import QuickInput from "../QuickInput";

const holderStyle = `max-w-[320px] space-y-20`;

const TestSlideFive = () => {
  const [pregnancyValue, SetPregnancyValue] = useState<string | null>("no");
  const [allergyValue, SetAllergyValue] = useState<string | null>("no");

  return (
    <CommonSlideWrapper>
      <div className="flex justify-between">
        <div className={holderStyle}>
          <QuickQuestion
            title="¿Estas embarazada?"
            defaultValue="no"
            setValue={SetPregnancyValue}
          />

          {/* information */}

          {pregnancyValue === "yes" && (
            <div className="flex flex-col items-center gap-6">
              <p className="text-text-secondary text-3xl font-medium">
                Si estas embarazada lamentablemente no puedes unirte a la app
              </p>

              <CommonButton text="Continuar" onlyButton />
            </div>
          )}
        </div>
        <div className={holderStyle}>
          <QuickQuestion
            title="¿Tienes alergias o intolerancias?"
            setValue={SetAllergyValue}
          />

          {/* information */}

          {allergyValue === "yes" && (
            <>
            <QuickInput  dataKey="allergy_info"  />
            </>
          )}
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideFive;

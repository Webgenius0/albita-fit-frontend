import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CommonSlideWrapper from "../CommonSlideWrapper";
import QuickQuestion from "../QuickQuestion";
import QuickInput from "../QuickInput";
import { useAppDispatch } from "@/redux/hooks";
import { setInfo } from "@/redux/features/testSlice";

const holderStyle = `max-w-[320px] space-y-20`;

const TestSlideSix = ({
  setInjuryInfoModalShow,
}: {
  setInjuryInfoModalShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();

  const [injuriesValue, setInjuriesValue] = useState<string | null>("no");
  const [hasChildren, setHasChildren] = useState<string | null>("no");
  const [isFeedingChild, setFeedingChild] = useState<string | null>("no");

  useEffect(() => {
    dispatch(
      setInfo({
        hasChildren,
        feedingChild: isFeedingChild,
      }),
    );

    // eslint-disable-next-line
  }, [isFeedingChild]);

  //   showing the modal if there is injury
  useEffect(() => {
    if (injuriesValue === "yes") {
      setInjuryInfoModalShow(true);
    }

    // eslint-disable-next-line
  }, [injuriesValue]);

  return (
    <CommonSlideWrapper>
      <div className="relative flex justify-between">
        <div className={holderStyle}>
          <QuickQuestion
            title="¿Sufres de lesiones?"
            defaultValue="no"
            setValue={setInjuriesValue}
          />

          {/* information */}
          {injuriesValue === "yes" && <QuickInput dataKey="injury_info" />}
        </div>
        <div className={holderStyle}>
          <QuickQuestion title="¿Has tenido hijos?" setValue={setHasChildren} />

          {/* information */}

          {hasChildren === "yes" && (
            <>
              <QuickQuestion
                title="¿Eres madre lactante?"
                defaultValue="no"
                setValue={setFeedingChild}
              />
            </>
          )}
        </div>
      </div>
    </CommonSlideWrapper>
  );
};

export default TestSlideSix;

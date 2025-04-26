import { PlanType } from "@/lib/commonTypes";
import { Dispatch, SetStateAction } from "react";

const PlanCard = ({
  plan,
  selected,
  setSelected,
}: {
  plan: PlanType;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  const planSilver = plan.title.toLowerCase() === "plan plata";
  const planGold = plan.title.toLowerCase() === "plan oro";

  const colorPrimary = planSilver ? `#5A5A5A` : `#fff`;
  const colorSecondary = planSilver ? `#444` : `#745C08`;

  return (
    <div
      onClick={() => {
        return setSelected(plan.title);
      }}
      style={{
        background: planSilver
          ? `linear-gradient(180deg, rgba(249, 249, 249, 0.70) 0%, rgba(224, 224, 224, 0.70) 23.52%, rgba(200, 200, 200, 0.70) 52.74%, rgba(214, 214, 214, 0.70) 80.29%, rgba(234, 230, 230, 0.70) 94.48%)`
          : planGold
            ? `linear-gradient(180deg, rgba(223, 194, 91, 0.70) 0%, rgba(241, 215, 121, 0.70) 23.52%, rgba(255, 237, 172, 0.70) 52.74%, rgba(241, 215, 121, 0.70) 80.29%, rgba(223, 194, 91, 0.70) 94.48%)`
            : ``,
      }}
      className={` ${selected === plan.title ? `border-primary-pink` : `border-transparent`} flex flex-1 cursor-pointer flex-col items-center gap-7 rounded-[20px] border-4 px-6 py-8 text-center`}
    >
      <p
        style={{
          color: colorSecondary,
        }}
        className="text-2xl leading-5 font-bold uppercase"
      >
        {" "}
        {plan.heading}{" "}
      </p>
      <div
        style={{
          color: colorPrimary,
        }}
        className="flex items-center text-[90px] leading-[70px] font-bold"
      >
        <span> {plan.totalPrice} </span>
        <span>€</span>
      </div>
      <div
        style={{
          color: colorSecondary,
        }}
        className="text-2xl font-bold"
      >
        <span> {plan.totalPrice / plan.planDuration} </span>
        <span>€/mes</span>
      </div>
      <div
        style={{
          color: colorPrimary,
        }}
        className="text-[40px] leading-10 font-extrabold"
      >
        {plan.title}
      </div>
      <div
        style={{
          color: colorSecondary,
        }}
        className="text-center text-base leading-5 font-medium"
      >
        {plan.features.map((feature, i) => (
          <div key={i}> {feature} </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;

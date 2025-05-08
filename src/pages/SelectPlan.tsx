import BackButton from "@/components/common/BackButton";
import CommonButton from "@/components/common/CommonButton";
import CommonContainer from "@/components/common/CommonContainer";
import CommonParagraph from "@/components/common/CommonParagraph";
import CommonTitle from "@/components/common/CommonTitle";
import PinkLogo from "@/components/common/PinkLogo";
import PlanCard from "@/components/select-plan/PlanCard";
import { PlanType } from "@/lib/commonTypes";
import { useState } from "react";

const plans: PlanType[] = [
  {
    title: "Plan plata",
    heading: "Trimestral",
    planDuration: 3,
    totalPrice: 120,
    features: [
      "Kit de bienvenida (incluye: gomas elasticas, medidor de grasa, cintas elasticas y cantimplora personalizada",
      "2 tablade ejrcicios explicadas por alba",
      "2 opciones de dietas semnalaes y una dieta de periodo de descanso",
      "ajuste de tablas una vez al mes",
    ],
  },
  {
    title: "Plan oro",
    heading: "Trimestral",
    planDuration: 3,
    totalPrice: 210,
    features: [
      "Kit de bienvenida (incluye: gomas elasticas, medidor de grasa, cintas elasticas y cantimplora personalizada",
      "2 tablade ejrcicios explicadas por alba",
      "2 opciones de dietas semnalaes y una dieta de periodo de descanso",
      "ajuste de tablas una vez al mes",
    ],
  },
];

const SelectPlan = () => {
  const [selected, setSelected] = useState("");

  return (
    <CommonContainer>
      <BackButton />
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-5 text-center">
        <PinkLogo size="sm" />
        <CommonTitle>Planes</CommonTitle>
        <CommonParagraph textGray>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </CommonParagraph>
      </div>

      <div className="mx-auto my-11 flex max-w-[70%] items-center gap-11">
        {plans.map((item, index) => (
          <PlanCard
            key={index}
            plan={item}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <CommonButton
          text="Continuar"
          onlyButton
          disable={selected ? false : true}
        />
      </div>
    </CommonContainer>
  );
};

export default SelectPlan;

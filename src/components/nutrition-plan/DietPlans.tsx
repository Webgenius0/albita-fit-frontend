import foodImage from "@/assets/images/diet-image.png";
import { DietPlanType } from "@/lib/commonTypes";
import DietCard from "./DietCard";

const allPlans: DietPlanType[] = [
  {
    planTitle: "Desayuno",
    plans: [
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "A",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "B",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "C",
      },
    ],
  },
  {
    planTitle: "Almuerzo",
    plans: [
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "A",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "B",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "C",
      },
    ],
  },
  {
    planTitle: "Cena",
    plans: [
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "A",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "B",
      },
      {
        foodName: " Huevo revuelto",
        foodImage: foodImage,
        ingredients: ["3 huevos", "1 tomate", "1 cebolla", "sal"],
        option: "C",
      },
    ],
  },
];

const DietPlans = () => {
  return (
    <div className="px-20 py-11">
      <div className="grid grid-cols-3 gap-4.5">
        {allPlans.map((item, index) => (
          <div key={index}>
            <p className="font-satoshi text-base font-bold text-[#222]">
              {" "}
              {item.planTitle}{" "}
            </p>

            {/* plans */}
            <div className="space-y-4 mt-4">
              {item.plans.map((diet, i) => (
                <DietCard key={i} diet={diet} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlans;

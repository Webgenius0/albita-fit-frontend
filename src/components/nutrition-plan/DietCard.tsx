import { DietCardType } from "@/lib/commonTypes";

const DietCard = ({ diet }: { diet: DietCardType }) => {
  return (
    <div className="flex items-start gap-7 rounded-[12px] bg-white px-5 py-[22px] shadow-[7.339px_7.339px_29.354px_0px] shadow-black/10">
      <div className="h-[85px] max-w-[85px] min-w-[85px] overflow-hidden rounded-xl">
        <img
          src={diet.foodImage}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-light text-[rgba(0,0,0,0.80)]">
          {" "}
          Option {diet.option}{" "}
        </p>
        <h3 className="text-lg font-semibold text-[rgba(0,0,0,0.80)]">
          {diet.foodName}
        </h3>

        <ul className="mt-4 list-inside list-disc columns-2 gap-x-10 text-sm leading-4 font-medium text-[#505050]">
          {diet.ingredients.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DietCard;

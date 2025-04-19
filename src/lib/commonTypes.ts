export type SessionDataType = {
  title: string;
  minuteTime: number;
  series: string;
  holdTime: number;
  recoverTime: number;
  thumbnail: string;
};

export type DietCardType = {
  foodName: string;
  foodImage: string;
  ingredients: string[];
  option: string;
};

export type DietPlanType = {
  planTitle: string;
  plans: DietCardType[];
};

import TrainingCover from "@/components/training/TrainingCover";

import bg from "@/assets/images/banner-compact-1.jpg";
import videoBg from "@/assets/images/welcome-banner.jpg";

import SessionArea from "@/components/training/SessionArea";
import { SessionDataType } from "@/lib/commonTypes";

const sessionData: SessionDataType[] = [
  {
    title: "Dia 1",
    minuteTime: 1,
    series: "4 series",
    holdTime: 60,
    recoverTime: 30,
    thumbnail: videoBg,
  },
  {
    title: "Dia 2",
    minuteTime: 1,
    series: "4 series",
    holdTime: 60,
    recoverTime: 30,
    thumbnail: videoBg,
  },
  {
    title: "Dia 3",
    minuteTime: 1,
    series: "4 series",
    holdTime: 60,
    recoverTime: 30,
    thumbnail: videoBg,
  },
  {
    title: "Dia 4",
    minuteTime: 1,
    series: "4 series",
    holdTime: 60,
    recoverTime: 30,
    thumbnail: videoBg,
  },
  {
    title: "Dia 5",
    minuteTime: 1,
    series: "4 series",
    holdTime: 60,
    recoverTime: 30,
    thumbnail: videoBg,
  },
];

const HomeTraining = () => {
  return (
    <div>
      <TrainingCover bgImg={bg} title="En Casa" />

      <SessionArea sessionData={sessionData} />
    </div>
  );
};

export default HomeTraining;

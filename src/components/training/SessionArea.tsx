import { SessionDataType } from "@/lib/commonTypes";
import { FaPlay } from "react-icons/fa6";

import bglogo from "@/assets/images/plan-logo-bg.svg";

const SessionArea = ({ sessionData }: { sessionData: SessionDataType[] }) => {
  return (
    <div className="relative px-12 py-10">
      {/* video Grid Holder */}
      <div className="relative z-40 mb-20 grid grid-cols-3 gap-x-7 gap-y-10">
        {sessionData.map((item, index) => (
          <div
            className="session_card hover:border-primary-pink flex cursor-pointer items-center gap-5 rounded-[13px] border-[1.5px] border-transparent bg-white px-5 py-3 duration-500 ease-in-out hover:drop-shadow-2xl"
            key={index}
          >
            {/* thumbnail area */}
            <div className="relative h-20 max-w-20 min-w-20 overflow-hidden rounded-xl">
              <img
                src={item.thumbnail}
                alt=""
                className="relative z-10 h-full w-full object-cover"
              />

              {/* play button */}
              <div className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.4)] text-xl text-white">
                <FaPlay />
              </div>
            </div>

            {/* information area */}
            <div className="space-y-1.5">
              <p className="text-[20px] leading-4 font-bold text-[rgba(0,0,0,0.80)]">
                {item.title}
              </p>
              <p className="text-lg leading-5 font-bold text-[#000]">
                minuto {item.minuteTime}:00
              </p>
              <p className="text-sm leading-4 font-medium text-[#505050]">
                {item.series} series, aguantas {item.holdTime}, recuperas{" "}
                {item.recoverTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* symbol logo */}
      <div className="absolute right-10 bottom-10 h-24 w-24">
        <img src={bglogo} alt="" className="h-full w-full opacity-35" />
      </div>
    </div>
  );
};

export default SessionArea;

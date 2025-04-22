import thumbnail from "@/assets/images/welcome-banner.jpg";
import { FaPlay } from "react-icons/fa6";

const Tutorials = () => {
  const tutorials = [
    {
      thumbnail: thumbnail,
      title: "Tutorial como medir tu progreso",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de cocina con alba",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de la app",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial como medir tu progreso",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de cocina con alba",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de la app",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial como medir tu progreso",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de cocina con alba",
    },
    {
      thumbnail: thumbnail,
      title: "Tutorial de la app",
    },
  ];

  return (
    <div>
      {/* tutorials area */}
      <div className="mb-11">
        <p className="text-text-primary text-center text-3xl font-bold">
          Tutoriales
        </p>

        {/* tutorial videos */}
        <div className="my-7 grid grid-cols-3 gap-8 px-14">
          {tutorials.map((item, index) => (
            <div
              className="flex items-center gap-4 rounded-[12px] px-4 py-3 shadow-[7.361px_7.361px_29.445px_0px] shadow-pink-200/30"
              key={index}
            >
              <div className="relative h-16 max-w-16 min-w-16 overflow-hidden rounded-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* overlay */}
                <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.3)] text-white">
                  <FaPlay />
                </div>
              </div>

              <div>
                <p className="text-text-secondary text-lg leading-5 font-bold">
                  {" "}
                  {item.title}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;

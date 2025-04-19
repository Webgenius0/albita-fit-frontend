import SidebarIcon from "@/components/sidebar/SidebarIcon";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

type linkType = {
  name: "Home" | "Perfil" | "Dieta" | "Entrena";
  target: string;
};
 
const links: linkType[] = [
  {
    name: "Home",
    target: "/",
  },
  {
    name: "Perfil",
    target: "/profile",
  },
  {
    name: "Dieta",
    target: "/diet",
  },
  {
    name: "Entrena",
    target: "/train",
  },
];
const Sidebar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div
      className={`sidebar_component absolute top-0 ${mobileSidebarOpen ? `left-0` : `-left-20`} z-[100] h-screen w-full max-w-20 rounded-r-2xl rounded-b-2xl border-r-[2px] border-[#9E0036] bg-white duration-300 ease-in-out lg:left-0 lg:max-w-[100px]`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-5 lg:gap-y-8">
        <Fade triggerOnce cascade direction="up" duration={600} damping={0.3}>
          {links.map((item, index) => (
            <SidebarIcon
              key={index}
              iconType={item.name}
              target={item.target}
            />
          ))}
        </Fade>
      </div>

      {/* open icon */}
      <div
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className={`border-primary-pink absolute top-1/2 -right-12 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-white duration-300 ease-in-out lg:hidden ${mobileSidebarOpen ? `rotate-180` : ``}`}
      >
        <ArrowRight size={26} color="#e77b9b" />
      </div>
    </div>
  );
};

export default Sidebar;

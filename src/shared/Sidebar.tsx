import SidebarIcon from "@/components/sidebar/SidebarIcon";
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
  return (
    <div className="sidebar_component h-screen w-full max-w-[100px] rounded-r-2xl rounded-b-2xl border-r-[2px] border-[#9E0036]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
        <Fade cascade direction="up" duration={600} damping={0.3}>
          {links.map((item, index) => (
            <SidebarIcon
              key={index}
              iconType={item.name}
              target={item.target}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Sidebar;

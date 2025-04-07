import SidebarIcon from "@/components/sidebar/SidebarIcon";

type linkType = {
  name: "home" | "profile" | "diet" | "train";
  target: string;
};

const Sidebar = () => {
  const links: linkType[] = [
    {
      name: "home",
      target: "/",
    },
    {
      name: "profile",
      target: "/profile",
    },
    {
      name: "diet",
      target: "/diet",
    },
    {
      name: "train",
      target: "/train",
    },
  ];

  return (
    <div className="sidebar_component h-screen w-full max-w-[100px] rounded-r-2xl rounded-b-2xl border-r-[2px] border-[#9E0036]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
        {links.map((item, index) => (
          <SidebarIcon key={index} iconType={item.name} target={item.target} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

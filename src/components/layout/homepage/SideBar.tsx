import Logo from "@/assets/images/icon.png";
import Image from "next/image";
import { FaBaby } from "react-icons/fa";
import SideBarComponent from "./SideBarComponent";
const SideBar = () => {
  return (
    <div className="w-[250px] flex flex-col bg-black">
      <div className="h-[60px] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="rounded-full bg-white p-[6px]">
            <Image src={Logo} alt="Logo" height={25} width={25} />
          </div>
          BallBoy
        </div>
      </div>
      <div className="flex-auto flex flex-col gap-2">
        <SideBarComponent icon={FaBaby} route="Dashboard" />
        <SideBarComponent icon={FaBaby} route="Dashboard" />
        <SideBarComponent icon={FaBaby} route="Dashboard" />
        <SideBarComponent icon={FaBaby} route="Dashboard" />
        <SideBarComponent icon={FaBaby} route="Dashboard" />
        <SideBarComponent icon={FaBaby} route="Dashboard" />
      </div>
    </div>
  );
};

export default SideBar;

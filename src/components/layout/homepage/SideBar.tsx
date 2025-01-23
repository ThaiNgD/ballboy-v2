import Logo from "@/assets/images/icon.png";
import Image from "next/image";
import { AiOutlineTeam } from "react-icons/ai";
import { GiSoccerKick } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { PiStrategy } from "react-icons/pi";
import { TbSoccerField } from "react-icons/tb";
import SideBarComponent from "./SideBarComponent";
const SideBar = () => {
  return (
    <div className="w-[200px] flex flex-col bg-[#399918]">
      <div className="h-[60px] mx-auto p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <div className="rounded-full bg-white p-[6px]">
            <Image src={Logo} alt="Logo" height={25} width={25} />
          </div>
          BallBoy
        </div>
      </div>
      <div className="flex-auto mt-2 px-2 flex flex-col">
        <SideBarComponent icon={IoHomeOutline} route="Dashboard" />
        <SideBarComponent icon={TbSoccerField} route="Formation" />
        <SideBarComponent icon={PiStrategy} route="Stategy" />
        <SideBarComponent icon={GiSoccerKick} route="Player" />
        <SideBarComponent icon={AiOutlineTeam} route="Team" />
      </div>
      <div className="">
        <Image src={Logo} alt="Logo" height={25} width={25} />
      </div>
    </div>
  );
};

export default SideBar;

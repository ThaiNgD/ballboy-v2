import Avatar from "@/assets/images/avatar_1.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { IoNotifications, IoSettings } from "react-icons/io5";
const Header = () => {
  return (
    <div className="h-[60px] px-4 gap-3 flex justify-end bg-black items-center">
      <div className="p-1 bg-white rounded-full shadow-inner">
        <IoNotifications size={20} />
      </div>
      <div className="p-1 bg-white rounded-full shadow-inner">
        <IoSettings size={20} />
      </div>
      <div className="bg-white overflow-hidden p-1 h-[38px] rounded-full">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={Avatar} alt="Avatar" height={30} width={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
